import { test, expect } from '@playwright/test';
import { ROUTES } from './routes';

/**
 * Smoke suite: visits every public route and enforces the design contract.
 *  1. HTTP 200
 *  2. No uncaught console errors (excluding known noise: HubSpot, analytics)
 *  3. No element renders a non-zero `box-shadow`
 *  4. Buttons use font-weight <= 500 (no bold)
 */

const IGNORED_CONSOLE = [
  /hubspot/i,
  /google-analytics/i,
  /gtag/i,
  /favicon/i,
  /Failed to load resource/i,
];

for (const route of ROUTES) {
  test(`route ${route} loads cleanly`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() !== 'error') return;
      const text = msg.text();
      if (IGNORED_CONSOLE.some((re) => re.test(text))) return;
      errors.push(text);
    });
    page.on('pageerror', (err) => errors.push(err.message));

    const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
    expect(response?.ok(), `expected 2xx on ${route}`).toBeTruthy();

    // h1 exists (content loaded)
    await expect(page.locator('h1').first()).toBeVisible({ timeout: 10_000 });

    // No elevation shadows (blurred drop-shadows) anywhere.
    // Zero-blur rings/outlines used as hairlines are allowed.
    const offending = await page.evaluate(() => {
      const bad: string[] = [];
      const els = Array.from(document.querySelectorAll<HTMLElement>('*'));
      for (const el of els) {
        const cs = getComputedStyle(el);
        const bs = cs.boxShadow;
        if (!bs || bs === 'none') continue;
        // box-shadow: <color> <offsetX> <offsetY> <blur> <spread>. Allow zero-blur rings.
        // Each layer is comma-separated. Flag only layers with a non-zero blur.
        const layers = bs.split(/,(?![^()]*\))/).map((s) => s.trim());
        const hasBlur = layers.some((layer) => {
          const nums = layer.match(/-?\d*\.?\d+px/g) ?? [];
          // positions: [offsetX, offsetY, blur, spread]
          const blurPx = nums[2] ? parseFloat(nums[2]) : 0;
          return blurPx > 0;
        });
        if (hasBlur) {
          bad.push(`${el.tagName.toLowerCase()}.${(el.className as string).slice(0, 60)}: ${bs}`);
          if (bad.length > 5) break;
        }
      }
      return bad;
    });
    expect(offending, `elevation shadows detected on ${route}`).toEqual([]);

    // Buttons never use font-weight > 500
    const heavyButtons = await page.evaluate(() => {
      const bad: string[] = [];
      const els = Array.from(
        document.querySelectorAll<HTMLElement>('button, [data-slot="button"], a[class*="rounded-full"]'),
      );
      for (const el of els) {
        const cs = getComputedStyle(el);
        const w = parseInt(cs.fontWeight, 10);
        if (!Number.isNaN(w) && w > 500) {
          bad.push(`${el.tagName.toLowerCase()}: weight=${w}, text="${el.textContent?.trim().slice(0, 40)}"`);
          if (bad.length > 5) break;
        }
      }
      return bad;
    });
    expect(heavyButtons, `bold buttons detected on ${route}`).toEqual([]);

    expect(errors, `console errors on ${route}`).toEqual([]);
  });
}
