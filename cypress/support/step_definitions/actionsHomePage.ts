import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";

Given("The user opens the Telnyx home page", function () {
  cy.visit("/");
});

When("The page loads completely", function () {
  cy.wait(16000);
});
Then("The Telnyx logo should be visible", function () {
  homePage.elements
    .telnyxSvg()
    .should("exist")
    .should("be.visible", { timeout: 15000 });
});
Then(
  "The {string} text should be displayed with the expected text",
  function (string) {
    homePage.elements.expiriensAI().should("have.text", string);
  }
);

When("User click the Products", function () {
  homePage.clickProducts();
});
Then("The main menu should be visible", function () {
  homePage.elements
    .dropdownProducts()
    .should("exist")
    .should("be.visible", { timeout: 15000 });
});

When("The Telnyx main page loads completely", function () {
  homePage.elements
    .headerOptions()
    .should("exist")
    .should("be.visible", { timeout: 15000 });
  cy.wait(5000);
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

When("Scroll to the bottom of the home page", function () {
  cy.scrollTo("bottom", { ensureScrollable: false, duration: 1000 });
  cy.wait(6000);
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

When("User ckick to the Why Telnyx on the main menu", function () {
  homePage.clickWhyTelnyx();
});

Then(
  "The are four transition options are available in opened dpropdown menu",
  function () {
    cy.wait(5000);
    homePage.elements.dropdownWhyTelnyx().should("have.length", 4);
  }
);

When("Click to the Sing up in the upper right corner of the page", function () {
  homePage.clickSingUpButton();
});

Then("The sing up menu is displayed", function () {
  homePage.elements.createAccountForm().should("be.visible");
});

When("User scroll to Receive a call from Telnyx form", function () {
  homePage.elements.receiveCallForm().scrollIntoView();
});

When(
  "User fill the Mobile phone field {string}",
  function (phoneNumberReceiveCallForm: string) {
    homePage.typePhoneNumberReceiveCallForm(phoneNumberReceiveCallForm);
  }
);

When("Click Build my voice bot button", function () {
  homePage.clickBuildMyVoiceBotButton();
});

Then("The message about ancorrect entered the field is displayed", function () {
  homePage.elements.messageErorFillReceiveCallForm().should("be.visible");
});

When(
  "User click to the Ask our AI assistant icon in the lower  corner of the page",
  function () {
    homePage.clickAsistantAI();
  }
);

When(
  "User fill the Type your qestion here field {string}",
  function (questionField: string) {
    homePage.typeOnQuestionField(questionField);
  }
);

Then("The Button send the question is active", function () {
  homePage.elements.sendQestionButton().should("not.be.disabled");
});
