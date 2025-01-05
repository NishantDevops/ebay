class HomePage {
  visit() {
    cy.visit(Cypress.env('baseUrl'));
  }

  searchBook() {
    cy.get("input[class='gh-tb ui-autocomplete-input']").type(bookName);
    cy.get("input[id='gh-btn']").click();
  }
}
export default HomePage;
