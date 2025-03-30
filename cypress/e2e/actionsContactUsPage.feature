Feature: ContactUs Page Actions

  Background: Navigation
    Given The user opens the Telnyx home page


  Scenario: Checking that the contact form is sent successfully when all required fields are filled in
    When The main page loads completely
    And User click the ContactUs
    And The page ContactUs loads completely
    And User select Support on How can we help field
    And User type in First name "Anna"
    And User type in Last name "Smith"
    And User type in Business email "annsmith@gmail.com"
    And User select United Kingdom on Counrty field
    And User type in Phone number "123456789"
    And User type in Company website "https://smitann.com"
    And User type in Request describe "Problem with adding new user"
    And User type in How hear about "From internet"
    And User click the Submit button
    Then Should be visible message about successfuly send the form

  Scenario: Checking that the contact form submission does not occur if there are no required fields
    When QThe main page loads completely
    And QUser click the ContactUs
    And QThe page ContactUs loads completely
    And QUser select Support on How can we help field
    And QUser type in First name "Anna"
    And QUser type in Last name "Smith"
    And QUser type in Business email "annsmith@gmail.com"
    And QUser select United Kingdom on Counrty field
    And QUser type in Phone number "123456789"
    And QUser type in Company website "https://smitann.com"
    And QUser type in Request describe "Problem with adding new user"
    And QUser click the Submit button
    Then Should be visible message about ampty required field
