import { faker } from "@faker-js/faker";

export class TagsPage {
  createTag(tagName) {
    //click in tags
    this.goToTags();
    cy.wait(4000);
    //And I click newTag
    cy.get("span").contains("New tag").click();
    cy.wait(2000);
    //And I enter tagName "<tagName>"
    cy.get("#tag-name").type(tagName);
    //And I enter tagSlug "<tagSlug>"
    cy.get("#tag-slug").clear().type(faker.lorem.slug());
    //And I enter tagDescription "<tagDescription>"
    cy.get("#tag-description").type(faker.lorem.paragraph(2));
    //And I click save
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
  }

  deleteTag(tagName){
    //And I click tags
    this.goToTags();
    cy.wait(2000)
    //And I click tagCreado
    cy.contains('h3', tagName).click();
    cy.wait(2000)
    //And I click delete
    cy.get('[data-test-button="delete-tag"]').click()
    cy.wait(3000)
    //And I click delete2
    cy.get('[data-test-task-button-state="idle"]').eq(1).click();
    cy.wait(3000)
  }

  goToTags() {
    cy.visit(Cypress.env('GHOST_ADMIN_URL') + '#/tags')
    cy.wait(1000);
    return new TagsPage();
  }

}