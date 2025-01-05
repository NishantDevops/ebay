describe("Ebay Test", () => {
  it("Verify Add to cart count", () => {
    cy.fixture("example.json").then((data) => {
      const bookName = data.bookName;

      cy.visit(Cypress.env("baseUrl"));

      cy.get("div[id='gh-ac-box2']").click().type(bookName);

      cy.get("input[id='gh-btn']").click();

      cy.get(".srp-results")
        .find("li[class*='s-item']")
        .eq(0) // Ensure you are selecting the first item in the list
        .find("a")
        .invoke("removeAttr", "target")
        .find(".s-item__title")
        .click();

      cy.get("a[id='atcBtn_btn_1'] span span").click()
      
      cy.get('#gh-cart-n').contains(1);
      
    });
  });
});
