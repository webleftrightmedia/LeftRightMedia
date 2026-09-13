import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: 0,
  workers: 1,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: [
    {
      command: 'npm run dev --prefix server',
      port: 5000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'npm run dev --prefix client',
      port: 5173,
      reuseExistingServer: !process.env.CI,
    }
  ]
});
