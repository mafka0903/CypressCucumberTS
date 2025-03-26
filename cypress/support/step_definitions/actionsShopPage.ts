import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { testData, urls } from "../../fixtures/data.fixtures";
import shopPage from "../../pages/shopPage";

Given("The user is on the shop page", function () {
  cy.visit(urls.shopPage);
});

When("The user clicks on the search icon", function () {
  shopPage.clickSearchIcon();
});

When("Waits for the search field to load", function () {
  cy.wait(5000);
});

When("Enters a search term", function () {
  shopPage.typeSearchField();
});

When("Clicks the search button", function () {
  shopPage.clickSearchFieldButton();
});

Then(
  "The product results should contain the expected product name",
  function () {
    shopPage.elements
      .productNameCard()
      .should("contain.text", testData.Products.telnyxHat);
  }
);

//2

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
