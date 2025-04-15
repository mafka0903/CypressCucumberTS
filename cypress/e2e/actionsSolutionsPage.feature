Feature: Solutions Page Actions

  Background: Navigation
    Given The user opens the Telnyx home page

    Scenario: Check that Filter work correctly on solutions page
    When User click to the Solutions on the main menu
    And User click See all solutions on the dropdown menu
    And User click See use cases on the dropdown menu
    And User click Filter by
    And User check the first two selections
    Then Filter by fied displayed "2 filters selected"
