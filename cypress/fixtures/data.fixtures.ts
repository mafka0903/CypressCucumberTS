import { faker } from "@faker-js/faker";

export const testData = {
  DataForContactUs: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    businessEmail: faker.internet.email(),
    phoneNumber: faker.number.int({ min: 8, max: 8 }),
    companyWebsite: faker.internet.url(),
    requestDescribe: faker.string.sample(),
    howHearAbout: faker.string.sample(),
  },
};
