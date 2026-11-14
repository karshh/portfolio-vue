import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4204',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
  },
  webServer: {
    command:
      'npm run build && NUXT_PORTFOLIO_E2E_FIXTURES=true PORT=4204 HOST=127.0.0.1 node .output/server/index.mjs',
    url: 'http://127.0.0.1:4204/home',
    reuseExistingServer: true,
    timeout: 120_000
  }
});
