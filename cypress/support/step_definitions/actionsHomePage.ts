import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";
import contactUsPage from "../../pages/contactUsPage";
import pricingPage from "../../pages/pricingPage";

Given("The user opens the Telnyx home page", function () {
  cy.visit("/");
});
//1
When("The page loads completely", function () {
  cy.wait(16000);
});
Then("The Telnyx logo should be visible", function () {
  homePage.elements.telnyxSvg().should("be.visible");
});
Then(
  "The {string} text should be displayed with the expected text",
  function (string) {
    homePage.elements.expiriensAI().should("have.text", string);
  }
);
//2
When("User click the Products", function () {
  homePage.clickProducts();
});
Then("The main menu should be visible", function () {
  homePage.elements.dropdownProducts().should("be.visible");
});
//3
When("User click the Pricing", function () {
  homePage.clickPricing();
});
Then("Should be open page {string}", function (string) {
  cy.location().should((location) => {
    expect(location.href).to.eq(string);
  });
});

//4

When("The main page loads completely", function () {
  homePage.elements
    .headerOptions()
    .should("exist")
    .should("be.visible", { timeout: 15000 });
});
When("User click the ContactUs", function () {
  homePage.clickContactUs();
});
When("The page ContactUs loads completely", function () {
  // contactUsPage.elements
  //   .reasonForContact()
  //   .should("exist")
  //   .should("be.visible", { timeout: 15000 });
  // contactUsPage.elements
  //   .contactOption()
  //   .should("exist")
  //   .should("be.visible", { timeout: 15000 });
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
  // contactUsPage.elements
  //   .reasonForContact()
  //   .should("exist")
  //   .should("be.visible", { timeout: 15000 });
  // contactUsPage.elements
  //   .contactOption()
  //   .should("exist")
  //   .should("be.visible", { timeout: 15000 });
  // cy.get("option").contains("Select").should("exist");
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

//7

When("The Telnyx main page loads completely", function () {
  homePage.elements
    .headerOptions()
    .should("exist")
    .should("be.visible", { timeout: 15000 });
});

Then(
  "The link of Shop button should have an {string} attribute pointing to the shop page",
  function (string) {
    homePage.elements
      .headerOptions()
      .eq(1)
      .should("have.attr", "href", string)
      .and("have.attr", "target", "_blank");
  }
);

//8

When("QScroll to the bottom of the page", function () {
  cy.scrollTo("bottom", { ensureScrollable: false, duration: 1000 });
  homePage.elements
    .footerSocial()
    .should("exist")
    .should("be.visible", { timeout: 15000 });
});

Then(
  "The link of Linkedin button should have an {string} attribute pointing to the shop page",
  function (string) {
    homePage.elements
      .footerSocial()
      .eq(0)
      .should("have.attr", "href", string)
      .and("have.attr", "target", "_blank");
  }
);

Then(
  "The link of Twitter button should have an {string} attribute pointing to the shop page",
  function (string) {
    homePage.elements
      .footerSocial()
      .eq(1)
      .should("have.attr", "href", string)
      .and("have.attr", "target", "_blank");
  }
);

Then(
  "The link of Facebook button should have an {string} attribute pointing to the shop page",
  function (string) {
    homePage.elements
      .footerSocial()
      .eq(2)
      .should("have.attr", "href", string)
      .and("have.attr", "target", "_blank");
  }
);
