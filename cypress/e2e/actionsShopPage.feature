Feature: Shop Page Actions

Background:
Given The user is on the shop page

Scenario: Checking the search function
    When The user clicks on the search icon
    And Waits for the search field to load
    And Enters a search term
    And Clicks the search button
    Then The product results should contain the expected product name

Scenario: Checking that user has the ability to add a product to the cart
    When The user clicks on the shop header menu
    Then The product grid should be visible
    When The user adds a product to the cart
    Then The cart should be visible
    And The product should be displayed in the cart