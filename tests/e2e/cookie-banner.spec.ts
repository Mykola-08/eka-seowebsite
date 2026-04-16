import { test, expect } from '@playwright/test';

test.describe('Cookie banner', () => {
  test.beforeEach(async ({ context }) => {
    await context.addInitScript(() => {
      try {
        localStorage.removeItem('ekabalance-cookie-consent');
      } catch {
        /* ignore */
      }
    });
  });

  test('appears after delay and has no box-shadow', async ({ page }) => {
    await page.goto('/');
    const banner = page.getByRole('button', { name: /reject cookies and close/i });
    await expect(banner).toBeVisible({ timeout: 5_000 });

    const box = page.locator('button[aria-label*="Reject"]').locator('xpath=ancestor::*[contains(@class,"rounded-3xl")][1]').first();
    const shadow = await box.evaluate((el) => getComputedStyle(el).boxShadow);
    expect(shadow).toBe('none');
  });

  test('Accept writes localStorage and hides', async ({ page }) => {
    await page.goto('/');
    const banner = page.getByTestId('cookie-banner');
    await expect(banner).toBeVisible({ timeout: 5_000 });
    await page.getByTestId('cookie-accept').click();
    await expect(banner).not.toBeVisible();
    const value = await page.evaluate(() => localStorage.getItem('ekabalance-cookie-consent'));
    expect(value).toBe('accepted');
  });
});
