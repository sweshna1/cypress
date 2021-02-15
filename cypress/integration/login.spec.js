/// <reference types="cypress" />

const testUsers = require("../fixtures/testUsers.json");
import LoginPage from "./pages/Login";

describe("login users", () => {
  const Login = new LoginPage();
  beforeEach(() => {
    Login.visit();
  });

  testUsers.forEach((user) => {
    context(`test for ${user.FirstName} ${user.LastName}`, () => {
      it(`should login the user`, () => {
        Login.getEmail().type(user.Email);
        Login.getPassword().type(user.Password);
        Login.getLoginButton().click();
        Login.getResult().should("contain", "Log out");
      });
    });
  });
});
