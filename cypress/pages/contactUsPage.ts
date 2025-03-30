class contactUsPage {
  elements = {
    reasonForContact: () =>
      cy.get(".mktoFieldWrap.mktoRequiredField #Reason_for_Contact__c"),
    contactOption: () => cy.get("#Reason_for_Contact__c option"),

    firstName: () => cy.get("#FirstName"),
    lastName: () => cy.get("#LastName"),
    businessEmail: () => cy.get("#Email"),
    phoneCode: () => cy.get("#Phone_Number_Extension__c"),
    phoneNumber: () => cy.get("#Phone_Number_Base__c"),
    companyWebsite: () => cy.get("#Website"),
    requestDescribe: () => cy.get("#LblForm_Additional_Information__c"),
    howHearAbout: () => cy.get("#How_did_you_hear_about_Telnyx_Open__c"),
    submitButton: () => cy.get('button[type="submit"]'),
  };

  selectSalesInquiry(support: string) {
    this.elements.reasonForContact().select(support);
  }

  typeFirstName(firstName: string) {
    this.elements.firstName().type(firstName);
  }

  typeLasttName(lastName: string) {
    this.elements.lastName().type(lastName);
  }

  typeBusinessEmail(businessEmail: string) {
    this.elements.businessEmail().type(businessEmail);
  }

  selectCountry(country: string) {
    this.elements.phoneCode().select(country);
  }

  typePhoneNumber(phoneNumber: string) {
    this.elements.phoneNumber().type(phoneNumber);
  }

  typeCompanyWebsite(companyWebsite: string) {
    this.elements.companyWebsite().type(companyWebsite);
  }

  typeRequestDescribe(requestDescribe: string) {
    this.elements.requestDescribe().type(requestDescribe);
  }
  typeHowHearAbout(howHearAbout: string) {
    this.elements.howHearAbout().type(howHearAbout);
  }

  clickSubmitButton() {
    this.elements.submitButton().scrollIntoView().click();
  }
}

export default new contactUsPage();
