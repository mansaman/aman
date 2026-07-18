import type Lenis from "lenis";

declare global {
  interface Window {
    appLenis?: Lenis;
  }
}

export {};
