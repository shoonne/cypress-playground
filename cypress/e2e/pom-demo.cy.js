import { LoginPage } from "./pages/login_page";
const loginPage = new LoginPage();

it("POM Demo", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com");
  loginPage.enterUsername("Admin");
  loginPage.enterPassword("admin123");
  loginPage.clickLoginButton();
});
