import { PlaywrightPageProvider } from 'playwright-abstract-element';

export async function startFlow() {
  return (await PlaywrightPageProvider.getPage()).goto('/');
}

export async function waitLoad() {
  return (await PlaywrightPageProvider.getPage()).waitForLoadState('networkidle');
}
