import { LoginPage } from "../pageObjects/LoginPage";
import { TagsPage } from "../pageObjects/TagsPage";
import { PostsPage } from "../pageObjects/PostsPage";
import { DashboardPage } from "../pageObjects/DashboardPage";


describe("Pruebas en diferentes navegadores para PC", () => {
  const loginPage = new LoginPage();
  const tagsPage = new TagsPage();
  const postPage = new PostsPage();
  const dashboardPage = new DashboardPage();

  beforeEach(() => {
    cy.setCookie('ghost-admin-api-session', 'your-session-token');
    loginPage.visit();
    cy.wait(3000);
    loginPage.login(Cypress.env("USERNAME"), Cypress.env("PASSWORD"));
    cy.wait(3000);
    Cypress.on("uncaught:exception", (err, runnable) => {
      console.error("Uncaught exception", err);
      return false;
    });
  });

  it("E01-E06-E11 - crear tag", () => {
    tagsPage.createTag("Tag de prueba");
    //And I go tags
    tagsPage.goToTags();
    cy.wait(2000);
    //Then I should see the tag
    cy.get('h3.gh-tag-list-name[data-test-tag-name=""]').contains("Tag de prueba").should('exist');
    cy.screenshot("Verificacion que se creo el tag");
    cy.wait(2000);
    tagsPage.deleteTag("Tag de prueba");
  });

  it("E02-E07-E12 - editar tag", () => {
    //create tag
    tagsPage.createTag("Tag de prueba");
    cy.wait(2000);
    //And I go tags
    tagsPage.goToTags();
    cy.wait(2000);
    //And I click tagCreado
    cy.contains('h3', 'Tag de prueba').click();
    cy.wait(2000);
    //And I enter tagDescription "descripcion_editada"
    cy.get("#tag-description").clear().type("descripcion editada");
    cy.wait(2000);
    //And I click save
    cy.get('[data-test-task-button-state="idle"]').click();
    cy.wait(2000);
    //And I click tags
    tagsPage.goToTags();
    cy.wait(2000);
    //Then I should see the tag description "descripcion_editada"
    cy.get('p[data-test-tag-description]').should('exist').contains('descripcion editada');
    cy.wait(2000)
    cy.screenshot('verificacion de edicion del tag');
    tagsPage.deleteTag("Tag de prueba");
  });

  it('E03-E08-E13 - eliminar tag', () => {
    //create tag
     tagsPage.createTag("Tag de prueba");
     cy.wait(2000);
     //And I click tags
     tagsPage.goToTags();
     cy.wait(2000);
     //Then I should see the tag
     cy.contains('a', 'Tag de prueba').should('exist');
     cy.wait(2000);
     tagsPage.deleteTag("Tag de prueba")
     //And I click tags
     tagsPage.goToTags();
     cy.wait(2000);
     //verifica que no exista
     cy.contains('a', 'Tag de prueba').should('not.exist');
     cy.screenshot("Verificacion que el tag fue eliminado");
     cy.wait(2000);
  })

  it("E04-E09-E14 - Verificar que el enlace entre un tag y un post sea exitosa", () => {
    //create tag
    tagsPage.createTag("Tag de prueba");
    cy.wait(2000);
    //And I create posts
    postPage.createPost("Post de prueba");
    cy.wait(2000);
    //Then I verify that the Tag is present
    postPage.goToPosts();
    cy.contains("span.midgrey-l2", "Tag de prueba").should("exist");
    cy.wait(2000);
    cy.screenshot("Verificacion que el tag esta relacionado en el post creado");
    //delete tag
    tagsPage.deleteTag("Tag de prueba")
    cy.wait(1000);
    //delete post
    postPage.deletePost("Post de prueba")
  });

   it('E05-E10-E15 - Verificacion que el post en el site si tenga el tag', () => {
    //create tag
    tagsPage.createTag("Tag de prueba");
    cy.wait(2000);
    //And I create posts
    postPage.createPost("Post de prueba");
    cy.wait(2000);
    //View post link
    dashboardPage.visitSite();
    cy.wait(2000);
    //click en post creado
    cy.contains('Post de prueba').click();
    cy.wait(2000);
    // Then I verify that the tag the post is present
    cy.contains('a', 'Tag de prueba').should('be.visible'); 
    cy.wait(2000)
    cy.screenshot("Verificacion que el tag este en post del site de usuario");
    //delete tag
    tagsPage.deleteTag("Tag de prueba")
    cy.wait(1000);
    //delete post
    postPage.deletePost("Post de prueba")
  })
});