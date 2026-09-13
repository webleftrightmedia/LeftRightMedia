import { test, expect } from '@playwright/test';

test.describe('Lead Capture Flow', () => {
  test('User can submit advertiser lead form and see success screen', async ({ page }) => {
    // 1. Go to landing page
    await page.goto('/');

    // 2. Wait for form to be visible (it is lazy loaded)
    const formSection = page.locator('#lead-form');
    await formSection.scrollIntoViewIfNeeded();

    // 3. Fill the form
    await page.fill('input[placeholder="Rajesh Patel"]', 'Test User');
    await page.fill('input[placeholder="Patel Café & Restaurant"]', 'Test Business');
    await page.fill('input[type="tel"]', '9876543210');
    await page.fill('input[type="email"]', 'test@example.com');
    await page.selectOption('select:has(option[value="Nadiad"])', 'Nadiad');
    await page.selectOption('select:has-text("Monthly Ad Budget")', '₹5,000 – ₹15,000');

    // 4. Submit
    await page.click('button[type="submit"]');

    // 5. Verify redirection to thank you page
    await expect(page).toHaveURL(/\/thank-you/);
    
    // 6. Verify success text is visible
    await expect(page.locator('text=Success')).toBeVisible();
  });
});
