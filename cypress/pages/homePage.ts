class homePage {
  elements = {
    telnyxSvg: () => cy.get(".c-UazGY .mchNoDecorate svg"),
    mainMenu: () => cy.get("#main-menu"),
    expiriensAI: () => cy.get("h1 .c-PJLV"),
    singUpButton: () => cy.get("header .c-bhURco"),
    createAccountForm: () => cy.get(".c-gHxecU.c-gHxecU-bYrJHQ-form-true"),
    receiveCallForm: () =>
      cy.get(
        ".c-gHxecU.c-jsBVOx.c-gHxecU-bYrJHQ-form-true.c-jsBVOx-ibUuHg-embed-true"
      ),
    phoneNumberReceiveCallForm: () => cy.get("#phone_number"),
    buildMyVoiceBotButton: () =>
      cy.get(
        ".c-bzrwjc.c-bzrwjc-fwzCzT-background-light.c-bzrwjc-fMMSUj-withAnimation-true.c-bzrwjc-cZriAm-cv.c-iWMVBJ"
      ),

    menuElements: () => cy.get(".c-swQxl"),
    dropdownProducts: () => cy.get(".c-jLWzSx"),
    dropdownSolutions: () => cy.get(".c-gSgpnm"),
    dropdownWhyTelnyx: () => cy.get(".c-cnsGFs"),

    headerOptions: () => cy.get("div .c-hzhYFJ"),

    sotialTable: () => cy.get("ul.c-ejcPbY"),
    footerSocial: () => cy.get(".c-ejcPbY .c-tKuzq.mchNoDecorate"),

    messageSuccessfulSend: () => cy.get("h1.c-PJLV"),
    messageEmptyField: () =>
      cy.get("#ValidMsgHow_did_you_hear_about_Telnyx_Open__c"),
    messageErorFillReceiveCallForm: () =>
      cy.get(".c-UUKrH.c-UUKrH-kDyeyw-type-error"),

    asistantAI: () => cy.get(".c-bGYNvC"),
    questionField: () => cy.get(".c-fJsHXZ"),
    sendQestionButton: () => cy.get(".c-cODSYQ.c-gGVcDH"),
  };

  clickSingUpButton() {
    this.elements.singUpButton().eq(1).click();
  }

  clickProducts() {
    this.elements.menuElements().first().click();
  }

  clickPricing() {
    this.elements.menuElements().eq(2).click();
  }

  clickSolutions() {
    this.elements.menuElements().eq(1).click();
  }

  clickWhyTelnyx() {
    this.elements.menuElements().eq(3).click();
  }

  clickSeeAllSolotions() {
    this.elements.dropdownSolutions().last().click();
  }

  clickContactUs() {
    this.elements.headerOptions().eq(2).click();
  }

  typeOnQuestionField(questionField: string) {
    this.elements.questionField().type(questionField);
  }

  clickBuildMyVoiceBotButton() {
    this.elements.buildMyVoiceBotButton().click();
  }

  clickAsistantAI() {
    this.elements.asistantAI().click();
  }
  typePhoneNumberReceiveCallForm(phoneNumberReceiveCallForm: string) {
    this.elements.phoneNumberReceiveCallForm().type(phoneNumberReceiveCallForm);
  }
}

export default new homePage();
