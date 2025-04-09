it("Google search", () => {
  cy.visit("https://www.google.com");
  cy.get("<input[name='q']>", {
    timeout: 10000,
    log: true,
    force: true,
    includeShadowDom: true,
    multiple: true,
    noWait: false,
    delay: 1000,
  }).type("Cypress testing");
  cy.contains("Cypress testing").click();
});
