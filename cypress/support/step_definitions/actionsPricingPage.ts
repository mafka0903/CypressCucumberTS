import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";
import pricingPage from "../../pages/pricingPage";

// Given("The user opens the Telnyx home page", function () {
//   cy.visit("/");
// });

//3
When("User click the Pricing", function () {
  homePage.clickPricing();
});
Then("Should be open page {string}", function (string) {
  cy.location().should((location) => {
    expect(location.href).to.eq(string);
  });
});

// 6

When("User click the Pricing on main menu", function () {
  homePage.clickPricing();
});

When("User click the MessagingAPI on Communications field", function () {
  pricingPage.clickMessagingAPI();
});

When("Scroll to the bottom of the page", function () {
  cy.scrollTo("bottom");
  pricingPage.elements
    .downloadFirstName()
    .should("exist")
    .should("be.visible", { timeout: 15000 });
});

When("User type in First Name {string}", function (downloadFirstName: string) {
  pricingPage.typeDownloadFirstName(downloadFirstName);
});

When("User type in Last Name {string}", function (downloadLastName: string) {
  pricingPage.typeDownloadLastName(downloadLastName);
});

When(
  "User type in Business Email {string}",
  function (downloadBussinessEmail: string) {
    pricingPage.typeDownloadBussinessEmail(downloadBussinessEmail);
  }
);

When("Click the Submit button", function () {
  pricingPage.clickDownlosdSubmitButton();
});

Then(
  "Should be visible message about successfuly download pricing",
  function () {
    pricingPage.elements.messageSuccesfulDownload().should("be.visible");
  }
);
