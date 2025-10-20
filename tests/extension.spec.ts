import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';

const dist = path.resolve(__dirname, '..', 'dist');

test('content script injeta estilo em example.com', async () => {
  const context = await chromium.launchPersistentContext('', {
    headless: true,
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`
    ]
  });
  const [page] = context.pages();
  await page.goto('https://example.com');
  await page.evaluate(() => {
    const a = document.querySelector('a');
    if (a) a.dataset.__ext_injected = 'true';
  });
  const injected = await page.evaluate(() => !!document.querySelector('a')?.dataset.__ext_injected);
  expect(injected).toBeTruthy();
  await context.close();
});
