class SearchResultsPage {
  clickFirstItem() {
    cy.get(".srp-results li")
      .eq(1)
      .find("div[class='s-item__info clearfix'] a'")
      .invoke("removeAttr", "target")
      .click();
  }
}
export default SearchResultsPage;
