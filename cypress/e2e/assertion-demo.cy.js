it("Assertion Demo", () => {
  cy.visit("https://example.cypress.io");
  cy.contains("get").click();
  cy.get("#query-btn")
    .should("contain", "Button")
    .and("have.class", "query-btn")
    .and("be.visible")
    .and("be.enabled");

  expect(true).to.be.true;

  assert.equal(4, "4", "NOT_EQUAL"); // Will pass because of type coercion
  // assert.strictEqual(4, "4", "NOT_EQUAL"); // Will fail strict equality
});
