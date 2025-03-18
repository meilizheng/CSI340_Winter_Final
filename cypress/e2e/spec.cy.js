describe("Item List", () => {
  it("Loads items successfully", () => {
    cy.visit("http://localhost:3000");
    cy.get("h2").contains("Items List");
  });
});
