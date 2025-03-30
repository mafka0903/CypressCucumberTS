Feature: Home Page Actions

  Background: Navigation
    Given The user opens the Telnyx home page

  Scenario: Checking the opening of the main page
    When The page loads completely
    Then The Telnyx logo should be visible
    And The "Experience AI-powered connectivity" text should be displayed with the expected text

  Scenario: Verify that clicking on a menu option with a dropdown correctly displays a list of available sub-options
    When User click the Products
    Then The main menu should be visible

Scenario: Check that user navigate to a different domain page when clicking Shop
    When The Telnyx main page loads completely
    Then The link of Shop button should have an "https://shop.telnyx.com" attribute pointing to the shop page

Scenario: Checking that  Footer Links will redirect to the correct pages
    When Scroll to the bottom of the home page
    Then The link of Linkedin button should have an "https://www.linkedin.com/company/telnyx/" attribute pointing to the shop page
    Then The link of Twitter button should have an "https://twitter.com/telnyx" attribute pointing to the shop page
    Then The link of Facebook button should have an "https://www.facebook.com/Telnyx/" attribute pointing to the shop page
    

 Scenario: Check that drobdown of Why Telnyx in the main menu is full
    When User ckick to the Why Telnyx on the main menu
    Then The are four transition options are available in opened dpropdown menu

 Scenario: Check that sing up form opened
    When Click to the Sing up in the upper right corner of the page
    Then The sing up menu is displayed


Scenario: Check that user can't fill uncorrect mobile phone on Receive a call from Telnyx
    When User scroll to Receive a call from Telnyx form
    And User fill the Mobile phone field "123456789"
    And Click Build my voice bot button
    Then The message about ancorrect entered the field is displayed

Scenario: Check that in Ask our AI assistant only when user type something button Send is activated
    When User click to the Ask our AI assistant icon in the lower  corner of the page
    And User fill the Type your qestion here field "Type your question here"
    Then The Button send the question is active
