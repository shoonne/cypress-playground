before(() => {
  cy.fixture("example").as("test_data");
});

it("Read files using Fixture", () => {
  cy.log("test_data.name");
  cy.log("test_data.email");
});
it("Read files using readFile", () => {
  cy.readFile("cypress/fixtures/example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
  });
});
it("Write files using writeFile", () => {
  cy.writeFile("sample.txt", "Hello World \n");
  cy.writeFile("sample.txt", "I am learning Cypress", {
    flag: "a+",
  });
});
