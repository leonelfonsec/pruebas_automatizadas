import { faker } from "@faker-js/faker";

export class PostsPage {

  createPost(postName) {
    //go to posts
    this.goToPosts();
    //And I click new post
    cy.get('[data-test-new-post-button=""]').click();
    cy.wait(2000);
    // And I enter title of post "Post de prueba"
    cy.get(".gh-editor-title").clear().type(postName);
    //And I enter post "Estoy escribiendo un post"
    cy.get(".kg-prose").clear().type(faker.lorem.paragraph(2));
    cy.wait(2000);
    // And I click on the post settings button
    cy.get("[data-test-psm-trigger]").click();
    cy.wait(2000);
    // And I click on the Ver Tags
    cy.get("span.ember-power-select-status-icon:eq(0)").click();
    cy.wait(2000);
    // And I click on the Tag de prueba
    cy.get("li.ember-power-select-option").eq(1).click();
    cy.wait(2000);
    // And I click on the Publish button
    cy.get("[data-test-psm-trigger]").click();
    cy.wait(2000);
    cy.contains("button.gh-btn-editor", "Publish").click();
    cy.wait(2000);
    // And I click on the Continue button
    cy.contains("button.gh-btn-black", "Continue, final review →").click();
    cy.wait(2000);
    // And I click on the Publish post, right now button
    cy.get('[data-test-button="confirm-publish"]').click();
    cy.wait(2000);
  }

  deletePost(postName){
    //go to posts
    this.goToPosts();
    //click en post
    cy.contains(postName).click();
    cy.wait(2000);
    // And I click on the post settings button
    cy.get("[data-test-psm-trigger]").click();
    cy.wait(2000);
    //click en delete tes
    cy.get('[data-test-button="delete-post"]').click();
    cy.wait(2000);
    cy.get('[data-test-button="delete-post-confirm"]').click();
    cy.wait(2000);
  }

  goToPosts() {
    cy.visit(Cypress.env('GHOST_ADMIN_URL') + '#/posts')
    cy.wait(2000);
  }

  createPostMobile(postName) {
    //go to posts
    this.goToPosts();
    //And I click new post
    cy.get('[data-test-new-post-button=""]').click();
    cy.wait(2000);
    // And I enter title of post "Post de prueba"
    cy.get(".gh-editor-title").clear().type(postName);
    //And I enter post "Estoy escribiendo un post"
    cy.get(".kg-prose").clear().type(faker.lorem.paragraph(2));
    cy.wait(2000);
    // And I click on the post settings button
    cy.get("[data-test-psm-trigger]").click();
    cy.wait(2000);
    // And I click on the Ver Tags
    cy.get("span.ember-power-select-status-icon:eq(0)").click();
    cy.wait(2000);
    // And I click on the Tag de prueba
    cy.get("li.ember-power-select-option").eq(1).click();
    cy.wait(2000);
    // And I click on the Publish button
    cy.get("[data-test-psm-trigger]").click();
    cy.wait(2000);
    cy.get('[data-test-button="publish-flow"]').eq(1).click();//cambio a version mobile
    //cy.contains("button.gh-btn-editor", "Publish").click();
    cy.wait(2000);
    // And I click on the Continue button
    cy.contains("button.gh-btn-black", "Continue, final review →").click();
    cy.wait(2000);
    // And I click on the Publish post, right now button
    cy.get('[data-test-button="confirm-publish"]').click();
    cy.wait(2000);
  }
}