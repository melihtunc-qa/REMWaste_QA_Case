class LoginPage {
  emailField = 'input[type="text"]';
  passwordField = 'input[type="password"]';
  loginButton = "button[type='submit']";
  profileIcon = "button[aria-label='Options']";
  alertText = "p[class='chakra-text css-c2o6jq']"

  visitPage(url) {
    cy.visit(url, {
      auth: {
        username: Cypress.env("promptUsername"),
        password: Cypress.env("promptPassword"),
      },
    });
    cy.on("uncaught:exception", () => false);
  }
  typeEmail(email) {
    cy.get(this.emailField).type(email);
  }

  typePassword(password) {
    cy.get(this.passwordField).type(password);
  }
}
export default LoginPage;