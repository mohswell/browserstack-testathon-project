// pages/login-page.js

class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInLink = page.getByRole('link', { name: 'Sign In' });
    this.usernameDropdown = page.locator('div').filter({ hasText: /^Select Username$/ }).nth(2);
    this.passwordDropdown = page.locator('div').filter({ hasText: /^Select Password$/ }).nth(2);
    this.loginButton = page.getByRole('button', { name: 'Log In' });
    this.logoutLink = page.getByRole('link', { name: 'Logout' });
  }

  async goto() {
    await this.page.goto('https://testathon.live/');
  }

  async openLoginForm() {
    await this.signInLink.click();
  }

  async selectUsername(username) {
    await this.usernameDropdown.click();
    await this.page.getByText(username, { exact: true }).click();
  }

  async selectPassword(password) {
    await this.passwordDropdown.click();
    await this.page.getByText(password, { exact: true }).click();
  }

  async login(username, password) {
    await this.openLoginForm();
    await this.selectUsername(username);
    await this.selectPassword(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
}

module.exports = { LoginPage };
