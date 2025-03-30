import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import shopPage from "../../pages/shopPage";

Given("The user is on the shop page {string}", function (url: string) {
  cy.visit(url);
});

When("The user clicks on the search icon", function () {
  shopPage.clickSearchIcon();
});

When("Waits for the search field to load", function () {
  cy.wait(5000);
});

When("User type on the search field {string}", function (productName: string) {
  shopPage.typeSearchField(productName);
});

When("Clicks the search button", function () {
  shopPage.clickSearchFieldButton();
});

Then(
  "The product results should contain the expected product name {string}",
  function (productName: string) {
    shopPage.elements.productNameCard().should("contain.text", productName);
  }
);

When("The user clicks on the shop header menu", function () {
  shopPage.clickHeaderMenuShop();
});

Then("The product grid should be visible", function () {
  shopPage.elements.productGridContainer().should("be.visible");
});

When("The user adds a product to the cart", function () {
  shopPage.clickAddToCard();
});

Then("The cart should be visible", function () {
  shopPage.elements.yourCard().should("be.visible");
});

Then("The product should be displayed in the cart", function () {
  shopPage.elements.productInTheCard().should("be.visible");
});
