class pricingPage {
  elements = {
    communications: () => cy.get(".c-PJLV.c-ihLeEO.c-PJLV-cHtIMp-dark-false"),
    downloadFirstName: () => cy.get("#FirstName"),
    downloadLastName: () => cy.get("#LastName"),
    downloadBussinessEmail: () => cy.get("#Email"),
    downloadSubmitButton: () => cy.get("span .mktoButton"),
    messageSuccesfulDownload: () =>
      cy.get(".c-PJLV.c-PJLV-kmbBBS-dark-true.c-PJLV-ghYBfS-lead-true"),
  };

  clickMessagingAPI() {
    this.elements.communications().first().click();
  }

  typeDownloadFirstName(downloadFirstName: string) {
    this.elements.downloadFirstName().type(downloadFirstName);
  }

  typeDownloadLastName(downloadLastName: string) {
    this.elements.downloadLastName().type(downloadLastName);
  }

  typeDownloadBussinessEmail(downloadBussinessEmail: string) {
    this.elements.downloadBussinessEmail().type(downloadBussinessEmail);
  }

  clickDownlosdSubmitButton() {
    this.elements.downloadSubmitButton().click();
  }
}

export default new pricingPage();
