/// <reference types="cypress" />

class Register {
  visit() {
    cy.visit("/register");
  }
  getGender() {
    return cy.get('input[name="Gender"]');
  }
  getFirstName() {
    return cy.get('input[name="FirstName"]');
  }
  getLastName() {
    return cy.get('input[name="LastName"]');
  }
  getDateOfBirthDay() {
    return cy.get('select[name="DateOfBirthDay"]');
  }
  getDateOfBirthMonth() {
    return cy.get('select[name="DateOfBirthMonth"]');
  }
  getDateOfBirthYear() {
    return cy.get('select[name="DateOfBirthYear"]');
  }
  getEmail() {
    return cy.get('input[name="Email"]');
  }
  getCompany() {
    return cy.get('input[name="Company"]');
  }
  getPassword() {
    return cy.get('input[name="Password"]');
  }
  getConfirmPassword() {
    return cy.get('input[name="ConfirmPassword"]');
  }
  getRegisterButton() {
    return cy.get('input[name="register-button"]');
  }
  getResult() {
    return cy.get("div.result");
  }
}

export default Register;
