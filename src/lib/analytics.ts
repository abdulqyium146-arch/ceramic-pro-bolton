/** Google Analytics 4 Measurement ID */
const GA_MEASUREMENT_ID = "G-ERSBK6JG2N";

// ---------- Types ----------

export type DeviceType = "Mobile" | "Tablet" | "Desktop";

export type Browser = "Chrome" | "Safari" | "Firefox" | "Edge" | "Unknown";

export type OperatingSystem =
  | "Windows"
  | "macOS"
  | "Android"
  | "iOS"
  | "Linux"
  | "Unknown";

export type ButtonLocation =
  | "Header"
  | "Footer"
  | "Hero"
  | "Navbar"
  | "Sidebar"
  | "Product Card"
  | "Product Page"
  | "Contact Page"
  | "Checkout"
  | "Floating Widget"
  | "Blog"
  | "Pricing"
  | "CTA"
  | "Unknown";

/** Full parameter set sent with every whatsapp_click event. */
export interface WhatsAppClickParams {
  phone_number: string;
  button_text: string;
  button_id: string;
  button_class: string;
  button_location: ButtonLocation;
  page_title: string;
  page_path: string;
  page_url: string;
  referrer: string;
  hostname: string;
  language: string;
  screen_width: number;
  screen_height: number;
  viewport_width: number;
  viewport_height: number;
  device_type: DeviceType;
  operating_system: OperatingSystem;
  browser: Browser;
  user_agent: string;
  timestamp: string;
  session_id: string;
  // UTM — always present, empty string when absent
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  // Optional e-commerce / page context
  product_name?: string;
  product_id?: string;
  category?: string;
  price?: number;
  currency?: string;
  campaign?: string;
}

// Augment Window so TypeScript knows about gtag and dataLayer.
declare global {
  interface Window {
    gtag: (
      command: "event" | "config" | "js" | "set",
      target: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

// ---------- Private helpers ----------

function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Returns or creates a stable session ID in sessionStorage.
 * Falls back to a timestamp string if sessionStorage is unavailable.
 */
export function getSessionId(): string {
  if (!isClient()) return "";
  try {
    const KEY = "__ga_wa_session";
    let id = sessionStorage.getItem(KEY);
    if (!id) {
      id = `${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      sessionStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    return String(Date.now());
  }
}

/** Extract the numeric phone from a WhatsApp href. */
function extractPhoneNumber(href: string): string {
  // wa.me/447482225323 or wa.me/+447482225323
  const waMe = href.match(/wa\.me\/\+?(\d+)/);
  if (waMe) return waMe[1];
  // api.whatsapp.com/send?phone=447482225323
  const api = href.match(/[?&]phone=(\d+)/);
  if (api) return api[1];
  return "";
}

/**
 * Return visible button text, preferring aria-label over textContent.
 * SVG icons are excluded because textContent of SVG paths is empty.
 */
function getButtonText(element: Element): string {
  const aria = element.getAttribute("aria-label");
  if (aria?.trim()) return aria.trim();
  const text = (element.textContent ?? "").replace(/\s+/g, " ").trim();
  if (text) return text;
  return element.getAttribute("title") ?? "";
}

/** Safely return the class attribute string (avoids SVGAnimatedString). */
function getElementClass(element: Element): string {
  return element.getAttribute("class") ?? "";
}

/**
 * Walk the DOM upward from the clicked element to infer the section of the
 * page where the button lives. Checks own classes/id before parents.
 */
function inferButtonLocation(element: Element): ButtonLocation {
  type Rule = [RegExp, ButtonLocation];

  const rules: Rule[] = [
    // Floating / fixed elements — check the element itself first
    [/\bfixed\b/, "Floating Widget"],
    [/float(ing)?|sticky.*bottom|bottom.*sticky/i, "Floating Widget"],
    // Structural
    [/site-?header|page-?header/i, "Header"],
    [/site-?footer|page-?footer/i, "Footer"],
    [/navbar|nav-?bar/i, "Navbar"],
    [/hero|jumbotron|banner/i, "Hero"],
    [/sidebar|side-?bar/i, "Sidebar"],
    // Page types
    [/product[-_]?card/i, "Product Card"],
    [/product[-_]?page|pdp/i, "Product Page"],
    [/contact/i, "Contact Page"],
    [/checkout|cart/i, "Checkout"],
    [/blog|article|post/i, "Blog"],
    [/pric(e|ing)/i, "Pricing"],
    [/\bcta\b|call-?to-?action/i, "CTA"],
  ];

  // First: check the element itself (catches the floating button whose
  // className includes "fixed bottom-6 right-6")
  const selfCls = getElementClass(element);
  const selfId = element.id ?? "";
  for (const [pattern, location] of rules) {
    if (pattern.test(selfCls) || pattern.test(selfId)) return location;
  }

  // Then: walk ancestors
  let el: Element | null = element.parentElement;
  while (el && el !== document.body) {
    const tag = el.tagName.toLowerCase();
    if (tag === "header") return "Header";
    if (tag === "footer") return "Footer";
    if (tag === "nav") return "Navbar";
    if (tag === "aside") return "Sidebar";

    const combined = `${el.id ?? ""} ${getElementClass(el)}`;
    for (const [pattern, location] of rules) {
      if (pattern.test(combined)) return location;
    }
    el = el.parentElement;
  }

  // Last resort: infer from the current URL path
  if (isClient()) {
    const path = window.location.pathname;
    if (/\/contact/.test(path)) return "Contact Page";
    if (/\/blog/.test(path)) return "Blog";
    if (/\/services/.test(path)) return "Product Page";
  }

  return "Unknown";
}

export function getDeviceType(): DeviceType {
  if (!isClient()) return "Desktop";
  const ua = navigator.userAgent;
  if (/Mobi|Android.*Mobile|iPhone/i.test(ua)) return "Mobile";
  if (/iPad|Android(?!.*Mobile)|Tablet/i.test(ua)) return "Tablet";
  return "Desktop";
}

export function getBrowser(): Browser {
  if (!isClient()) return "Unknown";
  const ua = navigator.userAgent;
  if (/Edg\//i.test(ua)) return "Edge";
  if (/Chrome\//i.test(ua) && !/Chromium|OPR\//i.test(ua)) return "Chrome";
  if (/Firefox\//i.test(ua)) return "Firefox";
  if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) return "Safari";
  return "Unknown";
}

export function getOperatingSystem(): OperatingSystem {
  if (!isClient()) return "Unknown";
  const ua = navigator.userAgent;
  if (/Android/i.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/i.test(ua)) return "iOS";
  if (/Windows/i.test(ua)) return "Windows";
  if (/Mac OS X/i.test(ua)) return "macOS";
  if (/Linux/i.test(ua)) return "Linux";
  return "Unknown";
}

function getUTMParams(): Pick<
  WhatsAppClickParams,
  "utm_source" | "utm_medium" | "utm_campaign" | "utm_term" | "utm_content"
> {
  const empty = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
  };
  if (!isClient()) return empty;
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") ?? "",
    utm_medium: p.get("utm_medium") ?? "",
    utm_campaign: p.get("utm_campaign") ?? "",
    utm_term: p.get("utm_term") ?? "",
    utm_content: p.get("utm_content") ?? "",
  };
}

// ---------- Public API ----------

/**
 * Send a named GA4 event. No-op when called on the server or before
 * the gtag snippet has loaded.
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (!isClient() || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

/**
 * Send a GA4 page_view hit.
 * The initial page load is tracked automatically by the gtag snippet;
 * call this for client-side route transitions if needed.
 */
export function trackPageView(path?: string, title?: string): void {
  if (!isClient() || typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path ?? window.location.pathname,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
}

/**
 * Collect all available context from a WhatsApp anchor element and fire
 * a `whatsapp_click` GA4 event.
 *
 * @param element - The `<a>` element that was clicked.
 * @param extra   - Optional overrides / additions (product_name, category, etc.).
 */
export function trackWhatsAppClick(
  element: Element,
  extra: Partial<WhatsAppClickParams> = {}
): void {
  if (!isClient()) return;

  const href = element.getAttribute("href") ?? "";

  const params: WhatsAppClickParams = {
    phone_number: extractPhoneNumber(href),
    button_text: getButtonText(element),
    button_id: element.id ?? "",
    button_class: getElementClass(element),
    button_location: inferButtonLocation(element),
    page_title: document.title,
    page_path: window.location.pathname,
    page_url: window.location.href,
    referrer: document.referrer,
    hostname: window.location.hostname,
    language: navigator.language,
    screen_width: screen.width,
    screen_height: screen.height,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    device_type: getDeviceType(),
    operating_system: getOperatingSystem(),
    browser: getBrowser(),
    user_agent: navigator.userAgent,
    timestamp: new Date().toISOString(),
    session_id: getSessionId(),
    ...getUTMParams(),
    ...extra,
  };

  // Strip undefined optional fields before sending to GA4
  const payload = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined)
  ) as Record<string, unknown>;

  trackEvent("whatsapp_click", payload);
}
