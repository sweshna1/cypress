/// <reference types="cypress" />

const testUsers = require("../fixtures/testUsers.json");
import RegisterPage from "./pages/Register";

describe("register users", () => {
  const Register = new RegisterPage();
  beforeEach(() => {
    Register.visit();
  });

  testUsers.forEach((user) => {
    context(`test for ${user.FirstName} ${user.LastName}`, () => {
      it(`should register the user`, () => {
        Register.getGender().check(user.Gender);
        Register.getFirstName().type(user.FirstName);
        Register.getLastName().type(user.LastName);
        Register.getDateOfBirthDay().select(user.DateOfBirthDay);
        Register.getDateOfBirthMonth().select(user.DateOfBirthMonth);
        Register.getDateOfBirthYear().select(user.DateOfBirthYear);
        Register.getEmail().type(user.Email);
        Register.getCompany().type(user.Company);
        Register.getPassword().type(user.Password);
        Register.getConfirmPassword().type(user.ConfirmPassword);
        Register.getRegisterButton().click();
        Register.getResult().should("contain", "Your registration completed");
      });
    });
  });
});
