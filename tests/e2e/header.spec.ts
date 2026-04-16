import { test, expect } from '@playwright/test';

test.describe('Header navigation', () => {
  test('services dropdown opens on hover and closes with Escape', async ({ page }) => {
    await page.goto('/');
    await page.locator('h1').first().waitFor();

    const servicesTrigger = page.locator('.nav-trigger', { hasText: /services/i }).first();
    await servicesTrigger.hover();

    const dropdown = page.locator('[role="menu"]').first();
    await expect(dropdown).toBeVisible({ timeout: 3_000 });

    // Dropdown must not have a drop-shadow filter
    const filter = await dropdown.evaluate((el) => getComputedStyle(el).filter);
    expect(filter === 'none' || !/drop-shadow/.test(filter)).toBeTruthy();

    await page.keyboard.press('Escape');
    await expect(dropdown).not.toBeVisible({ timeout: 3_000 });
  });

  test('sticky header gains a hairline border when scrolled', async ({ page }) => {
    await page.goto('/');
    await page.locator('h1').first().waitFor();
    // Scroll with mouse wheel to drive Lenis smooth-scroll, then also set scrollY directly.
    await page.mouse.move(400, 400);
    for (let i = 0; i < 10; i++) {
      await page.mouse.wheel(0, 200);
    }
    await page.evaluate(() => {
      document.documentElement.scrollTop = 1200;
      document.body.scrollTop = 1200;
      window.dispatchEvent(new Event('scroll'));
    });
    await page.waitForTimeout(800);
    const borderBottom = await page.locator('nav').first().evaluate((el) => {
      const cs = getComputedStyle(el);
      return { width: cs.borderBottomWidth, style: cs.borderBottomStyle, cls: el.className };
    });
    expect(borderBottom.width, JSON.stringify(borderBottom)).not.toBe('0px');
  });
});
