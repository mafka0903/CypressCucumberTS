class solutionsPage {
  elements = {
    seeUseCases: () => cy.get(".c-buvHyO.c-buvHyO-iindzWH-css.c-fsSdbV"),

    filterBy: () => cy.get(".c-buvHyO.c-buvHyO-ifzGvDG-css.c-kiQtAQ span"),

    checkboxfilterBy: () => cy.get(".c-gQHCxf.c-dVBrgH.c-efDovs"),
  };

  clickSeeUseCases() {
    this.elements.seeUseCases().click();
  }

  clickFilterBy() {
    this.elements.filterBy().click();
  }

  clickCheckboxFilterByFirst() {
    this.elements.checkboxfilterBy().first().click();
  }

  clickCheckboxFilterBySecond() {
    this.elements.checkboxfilterBy().eq(1).click();
  }
}

export default new solutionsPage();
