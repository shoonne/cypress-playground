export class LoginPage {
  username_input = '[name="username"]';
  password_input = '[name="password"]';
  login_button = ".oxd-button";

  enterUsername(username) {
    cy.get(this.username_input).type(username);
  }
  enterPassword(password) {
    cy.get(this.password_input).type(password);
  }
  clickLoginButton() {
    cy.get(this.login_button).click();
  }
}
