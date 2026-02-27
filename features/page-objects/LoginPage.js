class LoginPage {
  get usernameInput() {
    return $('#userName');
  }

  get passwordInput() {
    return $('#password');
  }

  get submitButton() {
    return $('button[type="submit"]');
  }

  get errorMessage() {
    return $('h6');
  }

  async login(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.submitButton.click();
  }
}

module.exports = new LoginPage();
