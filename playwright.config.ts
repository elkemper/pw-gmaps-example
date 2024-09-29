import { defineConfig } from 'playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://maps.google.com/',
  },
  testDir: './src/specs',
});
