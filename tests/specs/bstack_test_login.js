// tests/auth.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login-page');
const { users } = require('../../data/auth/users');

test.describe('Authentication Flows', () => {
  test('Login with demo user and logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.demoUser.username, users.demoUser.password);

    // Validate homepage loads
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

    await loginPage.logout();
    await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
  });

  test('Login with image_not_loading_user and verify broken images', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.imageNotLoadingUser.username, users.imageNotLoadingUser.password);

    // Check product images fail gracefully
    await expect(page.getByRole('img', { name: 'iPhone 12' }).nth(0)).toBeVisible();


    await loginPage.logout();
  });

  test('Login with existing_orders_user and validate orders', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.existingOrdersUser.username, users.existingOrdersUser.password);

    await page.getByRole('link', { name: 'Orders' }).click();
    await expect(page.getByText(/Delivered 2 November/).nth(0)).toBeVisible();

    await loginPage.logout();
  });

  test('Login with fav_user and validate favourites', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.favUser.username, users.favUser.password);

    await page.getByRole('link', { name: 'Favourites' }).click();
    await expect(page.getByText('iPhone 12 Pro', { exact: true })).toBeVisible();


    await loginPage.logout();
  });

  test('Login with locked_user should show account locked error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);

    await expect(page.getByRole('heading', { name: 'Your account has been locked.' })).toBeVisible();
  });
});
