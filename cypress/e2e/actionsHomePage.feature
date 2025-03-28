Feature: Home Page Actions

  Background: Navigation
    Given The user opens the Telnyx home page

#   Scenario: Checking the opening of the main page
#     When The page loads completely
#     Then The Telnyx logo should be visible
#     And The "Experience AI-powered connectivity" text should be displayed with the expected text

#   Scenario: Verify that clicking on a menu option with a dropdown correctly displays a list of available sub-options
#     When User click the Products
#     Then The main menu should be visible

#   Scenario: Check that selecting a menu option without a dropdown redirects the user to the new page
#     When User click the Pricing
#     Then Should be open page "https://telnyx.com/pricing"

#   Scenario: Checking that the contact form is sent successfully when all required fields are filled in
#     When The main page loads completely
#     And User click the ContactUs
#     And The page ContactUs loads completely
#     And User select Support on How can we help field
#     And User type in First name "Anna"
#     And User type in Last name "Smith"
#     And User type in Business email "annsmith@gmail.com"
#     And User select United Kingdom on Counrty field
#     And User type in Phone number "123456789"
#     And User type in Company website "https://smitann.com"
#     And User type in Request describe "Problem with adding new user"
#     And User type in How hear about "From internet"
#     And User click the Submit button
#     Then Should be visible message about successfuly send the form

#   Scenario: CChecking that the contact form submission does not occur if there are no required fields
#     When QThe main page loads completely
#     And QUser click the ContactUs
#     And QThe page ContactUs loads completely
#     And QUser select Support on How can we help field
#     And QUser type in First name "Anna"
#     And QUser type in Last name "Smith"
#     And QUser type in Business email "annsmith@gmail.com"
#     And QUser select United Kingdom on Counrty field
#     And QUser type in Phone number "123456789"
#     And QUser type in Company website "https://smitann.com"
#     And QUser type in Request describe "Problem with adding new user"
#     And QUser click the Submit button
#     Then Should be visible message about ampty required field


# Scenario: Check that Download pricing is performed successfully
#     When User click the Pricing on main menu
#     And User click the MessagingAPI on Communications field
#     And Scroll to the bottom of the page
#     And User type in First Name "Anna"
#     And User type in Last Name "Smith"
#     And User type in Business Email "annsmith@gmail.com"
#     And Click the Submit button
#     Then Should be visible message about successfuly download pricing

# Scenario: Check that user navigate to a different domain page when clicking Shop
#     When The Telnyx main page loads completely
#     Then The link of Shop button should have an "https://shop.telnyx.com" attribute pointing to the shop page

# Scenario: Checking that  Footer Links will redirect to the correct pages
#     When QScroll to the bottom of the page
#     Then The link of Linkedin button should have an "https://www.linkedin.com/company/telnyx/" attribute pointing to the shop page
#     Then The link of Twitter button should have an "https://twitter.com/telnyx" attribute pointing to the shop page
#     Then The link of Facebook button should have an "https://www.facebook.com/Telnyx/" attribute pointing to the shop page
    
# Scenario: Check that Filter work correctly on solutions page
#     When User click to the Solutions on the main menu
#     And User click See all solutions on the dropdown menu
#     And User click See use cases on the dropdown menu
#     And User click Filter by
#     And User check the first two selections
#     Then Filter by fied displayed two filters selected

#  Scenario: Check that drobdown of Why Telnyx in the main menu is full
#     When User ckick to the Why Telnyx on the main menu
#     Then The are four transition options are available in opened dpropdown menu

#  Scenario: Check that sing up form opened
#     When Click to the Sing up in the upper right corner of the page
#     Then The sing up menu is displayed


# Scenario: Check that user can't fill uncorrect mobile phone on Receive a call from Telnyx
#     When User scroll to Receive a call from Telnyx form
#     And User fill the Mobile phone field "123456789"
#     And Click Build my voice bot button
#     Then The message about ancorrect entered the field is displayed

Scenario: Check that in Ask our AI assistant only when user type something button Send is activated
    When User click to the Ask our AI assistant icon in the lower  corner of the page
    And User fill the Type your qestion here field "Type your question here"
    Then The Button send the question is active
