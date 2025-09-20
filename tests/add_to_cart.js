import { test, expect } from '@playwright/test';

test('login and validate vendors heading and products found', async ({ page }) => {
  await page.goto('https://testathon.live/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('#username svg').click();
  await page.getByText('demouser', { exact: true }).click();
  await page.getByText('testingisfun99', { exact: true }).click();
  await page.getByRole('button', { name: 'Log In' }).click();

  // Validation steps
  const vendorsHeading = await page.getByRole('heading', { name: 'Vendors:' });
  await expect(vendorsHeading).toBeVisible();
  await vendorsHeading.click();

  const productsFoundText = await page.getByText('Product(s) found.');
  await expect(productsFoundText).toBeVisible();
  await productsFoundText.click();
});
/*
test('add products to cart and validate cart count', async ({ page }) => {
  await page.goto('https://testathon.live/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('#username svg').click();
  await page.getByText('demouser', { exact: true }).click();
  await page.getByText('testingisfun99', { exact: true }).click();
  await page.getByRole('button', { name: 'Log In' }).click();

  // Validation steps
  const vendorsHeading = await page.getByRole('heading', { name: 'Vendors:' });
  await expect(vendorsHeading).toBeVisible();
  await vendorsHeading.click();

  const productsFoundText = await page.getByText('Product(s) found.');
  await expect(productsFoundText).toBeVisible();
  await productsFoundText.click();

  // Add products to cart
  await page.locator('[id="\\31 "]').getByText('Add to cart').click();
  await page.locator('[id="\\32 "]').getByText('Add to cart').click();

  // Validate cart count
  const cartCount = await page.locator('span').filter({ hasText: '2' }).nth(2);
  await expect(cartCount).toBeVisible();
});*/