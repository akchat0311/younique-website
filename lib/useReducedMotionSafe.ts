"use client";

import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Mirrors the OS "reduce motion" preference. Uses useSyncExternalStore
 * rather than useState+useEffect so the server snapshot (always false) and
 * the client's first paint agree — reading matchMedia synchronously during
 * render would otherwise mismatch for visitors whose OS already has it
 * enabled, producing a hydration error.
 */
export function useReducedMotionSafe() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
