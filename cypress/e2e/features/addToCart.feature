Feature: Ebay Test
    Scenario: Verify item can be added to Cart

        Given I am on the ebay homepage
        When I search for the book
        Then I click on the first book in the search results
        Then I add the item to the cart
        Then I should see the cart updated with the item count

