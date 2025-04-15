import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";
import contactUsPage from "../../pages/contactUsPage";
import { testData } from "../../fixtures/data.fixtures";

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
When(
  "User select {string} on How can we help field",
  function (support: string) {
    contactUsPage.selectSalesInquiry(support);
  }
);
When("User type in First name generaiting first name", function () {
  contactUsPage.typeFirstName(testData.DataForContactUs.firstName);
});
When("User type in Last name generaiting last name", function () {
  contactUsPage.typeLasttName(testData.DataForContactUs.lastName);
});
When("User type in Business email generaiting email", function () {
  contactUsPage.typeBusinessEmail(testData.DataForContactUs.businessEmail);
});
When("User select {string} on Counrty field", function (country: string) {
  contactUsPage.selectCountry(country);
});
When("User type in Phone Number generaiting phone", function () {
  contactUsPage.typePhoneNumber(
    testData.DataForContactUs.phoneNumber.toString()
  );
});
When("User type in Company website generaiting website", function () {
  contactUsPage.typeCompanyWebsite(testData.DataForContactUs.companyWebsite);
});
When("User type in Request describe generaiting data", function () {
  contactUsPage.typeRequestDescribe(testData.DataForContactUs.requestDescribe);
});
When("User type in How hear about generaiting data", function () {
  contactUsPage.typeHowHearAbout(testData.DataForContactUs.howHearAbout);
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

Then("Should be visible message about ampty required field", function () {
  homePage.elements.messageEmptyField().should("be.visible");
});
