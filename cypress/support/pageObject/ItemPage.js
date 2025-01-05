class ItemPage {
  addToCart()
  {
    cy.contains("Add to cart").click();
  }
  verifyCartCount()
  {
    cy.get('#gh-cart-n').should('have.text',1);
  }
}
export default ItemPage;
