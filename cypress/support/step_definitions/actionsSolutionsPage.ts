import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../../pages/homePage";
import solutionsPage from "../../pages/solutionsPage";

When("User click to the Solutions on the main menu", function () {
  homePage.clickSolutions();
});

When("User click See all solutions on the dropdown menu", function () {
  homePage.clickSeeAllSolotions();
});

When("User click See use cases on the dropdown menu", function () {
  solutionsPage.clickSeeUseCases();
});

When("User click Filter by", function () {
  solutionsPage.clickFilterBy();
});

When("User check the first two selections", function () {
  solutionsPage.clickCheckboxFilterByFirst();
  solutionsPage.clickCheckboxFilterBySecond();
});

Then("Filter by fied displayed {string}", function (filters: string) {
  solutionsPage.elements.filterBy().should("contain.text", filters);
});
