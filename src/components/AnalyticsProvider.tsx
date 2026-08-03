"use client";

import { useEffect, useRef } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * CSS selector that matches every WhatsApp link variant used across the site
 * and any future links that share the same href patterns.
 */
const WA_SELECTOR =
  'a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp.com"]';

/**
 * Data attribute stamped onto every detected WhatsApp link by the
 * MutationObserver so that newly added nodes are only processed once.
 */
const MARKED = "data-wa-tracked";

/**
 * Stamp all untracked WhatsApp links found inside `root`.
 * The click handler is NOT attached here — clicks are caught by the single
 * delegated listener on `document`, which covers current and future links
 * automatically without per-element attachment.
 */
function markWhatsAppLinks(root: Element | Document): void {
  root.querySelectorAll<HTMLAnchorElement>(WA_SELECTOR).forEach((el) => {
    if (!el.hasAttribute(MARKED)) el.setAttribute(MARKED, "1");
  });
}

/**
 * AnalyticsProvider
 *
 * Renders no DOM of its own. On mount it installs:
 *
 * 1. **Event delegation** — one `click` listener on `document` intercepts every
 *    WhatsApp link click, regardless of when the link was rendered into the DOM.
 *    This is the primary tracking mechanism.
 *
 * 2. **MutationObserver** — watches for newly inserted nodes and stamps them
 *    with `data-wa-tracked`. Used as an observability layer; not required for
 *    click tracking but ensures every link is catalogued for potential future
 *    impression / visibility tracking.
 *
 * Both are torn down cleanly on unmount. The `initialised` ref prevents
 * double-setup under React Strict Mode's deliberate double-invocation.
 */
export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialised = useRef(false);

  useEffect(() => {
    if (initialised.current) return;
    initialised.current = true;

    // Stamp links that exist at mount time.
    markWhatsAppLinks(document);

    /**
     * Delegated click handler.
     *
     * `passive: true` is intentional: we never call preventDefault() — the
     * WhatsApp link must open. Declaring passivity lets the browser optimise
     * event dispatch.
     */
    function handleClick(event: MouseEvent): void {
      const target = event.target as Element | null;
      if (!target) return;
      // Walk up from the actual clicked node (could be a child SVG/span).
      const link = target.closest<HTMLAnchorElement>(WA_SELECTOR);
      if (!link) return;
      trackWhatsAppClick(link);
    }

    document.addEventListener("click", handleClick, { passive: true });

    /**
     * MutationObserver — stamps dynamically injected WhatsApp links.
     * childList + subtree catches additions at any depth in the DOM tree.
     */
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          const el = node as Element;
          if (el.matches?.(WA_SELECTOR) && !el.hasAttribute(MARKED)) {
            el.setAttribute(MARKED, "1");
          }
          // Also check descendants of the added node.
          markWhatsAppLinks(el);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("click", handleClick);
      observer.disconnect();
      // Reset so Strict Mode's second mount re-initialises correctly.
      initialised.current = false;
    };
  }, []);

  return <>{children}</>;
}
