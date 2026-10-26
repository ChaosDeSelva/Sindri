import { defineConfig } from "vitest/config";

// Per-package cache dir: parallel turbo runs otherwise race on the shared root cache.
export default defineConfig({
  cacheDir: "node_modules/.vite",
  test: {
    // Large connector fixtures and crypto tests must not compete with the sanitizer
    // performance checks. Keep the existing time budgets meaningful on CI runners.
    maxWorkers: 1,
    fsModuleCachePath: new URL("./node_modules/.vitest-cache", import.meta.url).pathname,
  },
});
