import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";
import pricingPage from "../../pages/pricingPage";
import { testData } from "../../fixtures/data.fixtures";

When("User click the Pricing", function () {
  homePage.clickPricing();
});
Then("Should be open page {string}", function (string) {
  cy.location().should((location) => {
    expect(location.href).to.eq(string);
  });
});

When("User click the Pricing on main menu", function () {
  homePage.clickPricing();
});

When("User click the MessagingAPI on Communications field", function () {
  pricingPage.clickMessagingAPI();
});

When("Scroll to the bottom of the page", function () {
  cy.scrollTo("bottom");
  cy.wait(10000);
});

When(
  "User on the pricing page type in First name generaitig data",
  function () {
    pricingPage.typeDownloadFirstName(testData.DataForContactUs.firstName);
    cy.wait(5000);
  }
);

When("User on the pricing page type in Last Name generaitig data", function () {
  pricingPage.typeDownloadLastName(testData.DataForContactUs.lastName);
});

When(
  "User on the pricing page type in Business Email generaitig email",
  function () {
    pricingPage.typeDownloadBussinessEmail(
      testData.DataForContactUs.businessEmail
    );
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
