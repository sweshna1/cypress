/// <reference types="cypress" />

class Login {
  visit() {
    cy.visit("/login");
  }
  getEmail() {
    return cy.get('input[name="Email"]');
  }
  getPassword() {
    return cy.get('input[name="Password"]');
  }
  getLoginButton() {
    return cy.get('input.login-button');
  }
  getResult() {
    return cy.get("div.header-links");
  }
}

export default Login;