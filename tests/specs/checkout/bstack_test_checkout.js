const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/login-page');
const { users } = require('../../../data/auth/users');

test('login and validate vendors heading and products found', async ({ page }) => {
  const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.demoUser.username, users.demoUser.password);

  // Validation steps
  const vendorsHeading = await page.getByRole('heading', { name: 'Vendors:' });
  await expect(vendorsHeading).toBeVisible();
  await vendorsHeading.click();

  const productsFoundText = await page.getByText('Product(s) found.');
  await expect(productsFoundText).toBeVisible();
  await productsFoundText.click();
});

test('Add products to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // Add products to cart
  await page.getByText("Add to cart").nth(0).click();
  await page.getByText("Add to cart").nth(1).click();

  // Validate cart count
  const cartCount = await page.locator('span').filter({ hasText: '2' }).nth(2);
  await expect(cartCount).toBeVisible();
});
