const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage = require('../page-objects/LoginPage');

Given('I am on the login page', async () => {
  await browser.url('/');
});

When(
  'I enter username {string} and password {string}',
  async (username, password) => {
    await loginPage.usernameInput.setValue(username);
    await loginPage.passwordInput.setValue(password);
  }
);

When('I click the login button', async () => {
  await loginPage.submitButton.click();
});

Then('I should see an error message', async () => {
  await expect(loginPage.errorMessage).toBeDisplayed();
});

Then('I should be redirected away from the login page', async () => {
  await browser.waitUntil(
    async () => !(await browser.getUrl()).includes('/login'),
    { timeout: 10000, timeoutMsg: 'Expected URL to leave /login after login' }
  );
});
