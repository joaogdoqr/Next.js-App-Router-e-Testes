describe("add product to cart", () => {
  it("should be able to search for products", () => {
    cy.searchByQuery("java");

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=java");

    cy.get('a[href^="/product/"]').should("exist");
  });

  it("should return to home if no query", () => {
    cy.on("uncaught:exception", () => false);

    cy.visit("/search");

    cy.location("pathname").should("equal", "/");
  });
});
