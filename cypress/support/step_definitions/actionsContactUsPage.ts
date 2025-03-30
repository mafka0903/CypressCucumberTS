import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";
import contactUsPage from "../../pages/contactUsPage";

// Given("The user opens the Telnyx home page", function () {
//   cy.visit("/");
// });

//4

When("The main page loads completely", function () {
  homePage.elements
    .headerOptions()
    .eq(2)
    .should("exist")
    .should("be.visible", { timeout: 15000 });
});
When("User click the ContactUs", function () {
  homePage.clickContactUs();
});
When("The page ContactUs loads completely", function () {
  cy.wait(5000);
});
When("User select Support on How can we help field", function () {
  contactUsPage.selectSalesInquiry();
});
When("User type in First name {string}", function (firstName: string) {
  contactUsPage.typeFirstName(firstName);
});
When("User type in Last name {string}", function (lastName: string) {
  contactUsPage.typeLasttName(lastName);
});
When("User type in Business email {string}", function (businessEmail: string) {
  contactUsPage.typeBusinessEmail(businessEmail);
});
When("User select United Kingdom on Counrty field", function () {
  contactUsPage.selectCountry();
});
When("User type in Phone number {string}", function (phoneNumber: string) {
  contactUsPage.typePhoneNumber(phoneNumber);
});
When(
  "User type in Company website {string}",
  function (companyWebsite: string) {
    contactUsPage.typeCompanyWebsite(companyWebsite);
  }
);
When(
  "User type in Request describe {string}",
  function (requestDescribe: string) {
    contactUsPage.typeRequestDescribe(requestDescribe);
  }
);
When("User type in How hear about {string}", function (howHearAbout: string) {
  contactUsPage.typeHowHearAbout(howHearAbout);
});
When("User click the Submit button", function () {
  contactUsPage.clickSubmitButton();
});

Then("Should be visible message about successfuly send the form", function () {
  homePage.elements
    .messageSuccessfulSend()
    .should("exist")
    .should("be.visible");
});

//5

When("QThe main page loads completely", function () {
  homePage.elements
    .headerOptions()
    .should("exist")
    .should("be.visible", { timeout: 15000 });
});
When("QUser click the ContactUs", function () {
  homePage.clickContactUs();
});
When("QThe page ContactUs loads completely", function () {
  cy.wait(5000);
});
When("QUser select Support on How can we help field", function () {
  contactUsPage.selectSalesInquiry();
});
When("QUser type in First name {string}", function (firstName: string) {
  contactUsPage.typeFirstName(firstName);
});
When("QUser type in Last name {string}", function (lastName: string) {
  contactUsPage.typeLasttName(lastName);
});
When("QUser type in Business email {string}", function (businessEmail: string) {
  contactUsPage.typeBusinessEmail(businessEmail);
});
When("QUser select United Kingdom on Counrty field", function () {
  contactUsPage.selectCountry();
});
When("QUser type in Phone number {string}", function (phoneNumber: string) {
  contactUsPage.typePhoneNumber(phoneNumber);
});
When(
  "QUser type in Company website {string}",
  function (companyWebsite: string) {
    contactUsPage.typeCompanyWebsite(companyWebsite);
  }
);
When(
  "QUser type in Request describe {string}",
  function (requestDescribe: string) {
    contactUsPage.typeRequestDescribe(requestDescribe);
  }
);

When("QUser click the Submit button", function () {
  contactUsPage.clickSubmitButton();
});

Then("Should be visible message about ampty required field", function () {
  homePage.elements.messageEmptyField().should("be.visible");
});
