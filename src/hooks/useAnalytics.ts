"use client";

import { useCallback } from "react";
import {
  trackEvent,
  trackWhatsAppClick,
  trackPageView,
  type WhatsAppClickParams,
} from "@/lib/analytics";

export interface UseAnalyticsReturn {
  /** Send any named GA4 event with optional parameters. */
  trackEvent: (eventName: string, params?: Record<string, unknown>) => void;
  /** Fire a whatsapp_click event for a given anchor element. */
  trackWhatsAppClick: (
    element: Element,
    extra?: Partial<WhatsAppClickParams>
  ) => void;
  /** Fire a page_view hit (for programmatic / soft navigations). */
  trackPageView: (path?: string, title?: string) => void;
}

/**
 * Hook that exposes all analytics helpers with stable function references.
 * Safe to call in any Client Component without causing extra re-renders.
 *
 * @example
 * const { trackEvent } = useAnalytics();
 * trackEvent('form_submit', { form_id: 'contact' });
 */
export function useAnalytics(): UseAnalyticsReturn {
  const memoTrackEvent = useCallback(
    (eventName: string, params?: Record<string, unknown>) => {
      trackEvent(eventName, params);
    },
    []
  );

  const memoTrackWhatsAppClick = useCallback(
    (element: Element, extra?: Partial<WhatsAppClickParams>) => {
      trackWhatsAppClick(element, extra);
    },
    []
  );

  const memoTrackPageView = useCallback(
    (path?: string, title?: string) => {
      trackPageView(path, title);
    },
    []
  );

  return {
    trackEvent: memoTrackEvent,
    trackWhatsAppClick: memoTrackWhatsAppClick,
    trackPageView: memoTrackPageView,
  };
}
