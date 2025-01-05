import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../support/pageObject/HomePage";
import SearchResultsPage from "../../support/pageObject/SearchResultsPage";
import ItemPage from "../../support/pageObject/ItemPage";

const homepage = new HomePage();
const searchPage = new SearchResultsPage();
const itemPage = new ItemPage();

Given("I am on the ebay homepage", function (baseUrl) {
  return homepage.visit(Cypress.env(baseUrl));
});

When("I search for the book", function (bookName) {
  return homepage.searchBook(bookName);
});

Then("I click on the first book in the search results", function () {
  return searchPage.clickFirstItem();
});

Then("I add the item to the cart", function () {
  return itemPage.addToCart();
});

Then("I should see the cart updated with the item count", function () {
  return itemPage.verifyCartCount;
});
