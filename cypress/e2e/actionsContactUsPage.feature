Feature: ContactUs Page Actions

  Background: Navigation
    Given The user opens the Telnyx home page


  Scenario: Checking that the contact form is sent successfully when all required fields are filled in
    When The main page loads completely
    And User click the ContactUs
    And The page ContactUs loads completely
    And User select "Support" on How can we help field
    And User type in First name generaiting first name
    And User type in Last name generaiting last name
    And User type in Business email generaiting email
    And User select "United Kingdom (+44)" on Counrty field
    And User type in Phone Number generaiting phone
    And User type in Company website generaiting website
    And User type in Request describe generaiting data
    And User type in How hear about generaiting data
    And User click the Submit button
    Then Should be visible message about successfuly send the form

  Scenario: Checking that the contact form submission does not occur if there are no required fields
    When The main page loads completely
    And User click the ContactUs
    And The page ContactUs loads completely
    And User select "Support" on How can we help field
    And User type in First name generaiting first name
    And User type in Last name generaiting last name
    And User type in Business email generaiting email
    And User select "United Kingdom (+44)" on Counrty field
    And User type in Phone Number generaiting phone
    And User type in Company website generaiting website
    And User type in Request describe generaiting data
    And User click the Submit button
    Then Should be visible message about ampty required field
