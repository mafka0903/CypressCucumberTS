Feature: Pricing Page Actions

  Background: Navigation
    Given The user opens the Telnyx home page

     Scenario: Check that selecting a menu option without a dropdown redirects the user to the new page
    When User click the Pricing
    Then Should be open page "https://telnyx.com/pricing"

    Scenario: Check that Download pricing is performed successfully
    When User click the Pricing on main menu
    And User click the MessagingAPI on Communications field
    And Scroll to the bottom of the page
    And User on the pricing page type in First name generaitig data
    And User on the pricing page type in Last Name generaitig data
    And User on the pricing page type in Business Email generaitig email
    And Click the Submit button
    Then Should be visible message about successfuly download pricing