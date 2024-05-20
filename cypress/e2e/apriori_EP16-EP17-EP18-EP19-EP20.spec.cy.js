import { LoginPage } from './cypress/pageObjects/LoginPage';
import { faker } from '@faker-js/faker';

describe('Verificar que la creación de tags sea exitosa', () => {
  const loginPage = new LoginPage()
  let datosApriori;
  
  
  beforeEach(() => {
    cy.fixture('MOCK_DATA.json').then((datos) => {
      datosApriori = datos;
    });
    
    cy.wait(3000);
    loginPage.visit();
    cy.wait(3000);
    loginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));    
    cy.wait(14000);
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception', err);
      return false;
    });
  })

   it('E16', () => {       
            cy.get('a[data-test-nav="tags"]').click();
            cy.wait(3000)
            cy.screenshot('EP16-01-5.82.6');
            //And I click newTag
            cy.get('span').contains('New tag').click();
            cy.wait(3000)
            cy.screenshot('EP16-02-5.82.6');
            //And I enter tagName "<tagName>"
            cy.get('#tag-name').type(datosApriori.tagName)
            cy.wait(1000)
            cy.screenshot('EP16-03-5.82.6');
            //And I enter tagSlug "<tagSlug>"
            cy.get('#tag-slug').clear().type(datosApriori.tagSlug)
            cy.wait(1000)
            cy.screenshot('EP16-04-5.82.6');
            //And I enter tagDescription "<tagDescription>"
            cy.get('#tag-description').type(datosApriori.tagDescription)
            cy.wait(1000)
            cy.screenshot('EP16-05-5.82.6');
            //And I click save
            cy.get('[data-test-button="save"]').click()
            cy.wait(3000)
            cy.screenshot('EP16-06-5.82.6');
    
            //And I click tags
            cy.get('a[data-test-nav="tags"]').click();
            cy.wait(3000)
            cy.screenshot('EP16-07-5.82.6');
    
            //Then I should see the tag "<tagName>"
           // cy.get(`span[title=${datosApriori.tagName}]`).should('exist');
            cy.get('h3.gh-tag-list-name[data-test-tag-name=""]').contains(datosApriori.tagName).should('exist');

            cy.wait(3000)
            cy.screenshot('EP16-08-5.82.6');
         })


         it('E17', () => {
           //And I click tags
           cy.wait(3000)
           cy.get('a[data-test-nav="tags"]').click();
           cy.wait(3000)
           cy.screenshot('EP17-01-5.82.6');
   
           //And I click tagCreado
           //cy.get('span[title="slug-del-tag"]').click();
           cy.contains('h3.gh-tag-list-name',datosApriori.tagName).click();
           cy.wait(3000)
           cy.screenshot('EP17-02-5.82.6');
   
            //And I enter tagDescription "descripcion_editada"
            cy.get('#tag-description').clear().type(datosApriori.tagDescription1)
            cy.wait(3000)
            cy.screenshot('EP17-03-5.82.6');
   
           //And I click save
            cy.get('[data-test-task-button-state="idle"]').click()
             cy.wait(3000)
             cy.screenshot('EP17-04-5.82.6');
   
           //And I click tags
           cy.get('a[data-test-nav="tags"]').click();
           cy.wait(3000)
           cy.screenshot('EP17-05-5.82.6');
   
           //Then I should see the tag description "descripcion_editada"
   cy.get('p[data-test-tag-description]').should('exist').contains(datosApriori.tagDescription1);
           cy.wait(3000)
           cy.screenshot('EP17-06-5.82.6');
        })
//IGUAL QUE EL 16 PERO DEJAMOS CAMPOS VACIOS
it('E18', () => {
           
  cy.get('a[data-test-nav="tags"]').click();
  cy.wait(3000)
  //And I click newTag
  cy.get('span').contains('New tag').click();
  cy.wait(3000)
  //And I enter tagName "<tagName>"
  //cy.get('#tag-name').type(datosApriori.tagName)
  
  
  
 
  //And I enter tagDescription "<tagDescription>"
  cy.get('#tag-description').type(datosApriori.tagDescription)
  cy.wait(1000)
  cy.screenshot('EP16-05-5.82.6');
  //And I click save
  cy.get('[data-test-button="save"]').click()
  cy.wait(3000)
  cy.screenshot('EP16-06-5.82.6');

  //
  cy.get('p.response').contains('You must specify a name for the tag.').should('exist');
  cy.wait(3000)
})


        it('E19', () => {
          cy.wait(3000)
          cy.get('a[data-test-nav="tags"]').click();
          cy.wait(3000)
          cy.screenshot('EP16-01-5.82.6');
          //And I click newTag
          cy.get('span').contains('New tag').click();
          cy.wait(3000)
          cy.screenshot('EP16-02-5.82.6');
          //And I enter tagName "<tagName>"
          cy.get('#tag-name').type(datosApriori.tagName2)
          cy.wait(1000)
          cy.screenshot('EP16-03-5.82.6');
          //And I enter tagSlug "<tagSlug>"
          cy.get('#tag-slug').clear().type(datosApriori.tagSlug2)
          cy.wait(1000)
          cy.screenshot('EP16-04-5.82.6');
          //And I enter tagDescription "<tagDescription>"
          cy.get('#tag-description').type(datosApriori.tagDescription2)
          cy.wait(1000)
          cy.screenshot('EP16-05-5.82.6');
          //And I click save
          cy.get('[data-test-button="save"]').click()
          cy.wait(3000)
          cy.screenshot('EP16-06-5.82.6');
  
          //And I click tags
          cy.get('a[data-test-nav="tags"]').click();
          cy.wait(3000)
          cy.screenshot('EP16-07-5.82.6');
  
  // And I click new post
  cy.get('[data-test-nav="new-story"]').click();
  cy.wait(3000)
  // And I wait for 2 seconds
  // And I enter title of post "Post de prueba"
  cy.get('.gh-editor-title').clear().type(datosApriori.tittlePost2);
  cy.wait(1000)
  // And I wait for 2 seconds
  // And I enter post "Estoy escribiendo un post"
  cy.get('.kg-prose').clear().type(datosApriori.post2);
  cy.wait(1000)
  // And I wait for 2 seconds
  // And I click on the post settings button
  cy.get('[data-test-psm-trigger]').click();
  cy.wait(3000)
  // And I wait for 2 seconds
  // And I click on the Ver Tags
  cy.get('span.ember-power-select-status-icon:eq(0)').click();
  cy.wait(3000)
  // And I wait for 2 seconds
  // And I click on the Tag de prueba
  cy.contains('li.ember-power-select-option', datosApriori.tagName2).click();
  //cy.get('li.ember-power-select-option').eq(0).click(); // Para hacer clic en el primer elemento
  cy.wait(5000)
  // And I wait for 2 seconds
  // And I click on the Publish button
  cy.get('[data-test-psm-trigger]').click();
  cy.wait(8000)
  cy.contains('button.gh-btn-editor', 'Publish').click();
  cy.wait(5000)
  // And I wait for 2 seconds
  // And I click on the Continue button 
  cy.contains('button.gh-btn-black', 'Continue, final review →').click();
  cy.wait(5000)
  // And I wait for 2 seconds
  // And I click on the Publish post, right now button
  cy.get('[data-test-button="confirm-publish"]').click();
  cy.wait(12000)
  // And I wait for 2 seconds
  // And I navigate to page "http://localhost:2368/ghost/#/dashboard"
  cy.visit('http://localhost:2368/ghost/#/dashboard');
  cy.wait(5000)
  // And I wait for 2 seconds
  // And I click on the Posts link
  cy.get('[data-test-nav="posts"]').click();
  cy.wait(5000)
  // And I wait for 2 seconds
  // Then I verify that the text Tag de prueba is present
  cy.contains('span.midgrey-l2', datosApriori.tagName2).should('exist');
  cy.wait(5000)

       })
    //lo mismo que el 19 pero de dejan campos vacios
    it('E20', () => {
      cy.wait(3000)
      cy.get('a[data-test-nav="tags"]').click();
      cy.wait(3000)
      cy.screenshot('EP16-01-5.82.6');
      //And I click newTag
      cy.get('span').contains('New tag').click();
      cy.wait(3000)
      cy.screenshot('EP16-02-5.82.6');
      //And I enter tagName "<tagName>"
      cy.get('#tag-name').type(datosApriori.tagName2)
      cy.wait(1000)
      cy.screenshot('EP16-03-5.82.6');
      //And I enter tagSlug "<tagSlug>"
      cy.get('#tag-slug').clear().type(datosApriori.tagSlug2)
      cy.wait(1000)
      cy.screenshot('EP16-04-5.82.6');
      //And I enter tagDescription "<tagDescription>"
      cy.get('#tag-description').type(datosApriori.tagDescription2)
      cy.wait(1000)
      cy.screenshot('EP16-05-5.82.6');
      //And I click save
      cy.get('[data-test-button="save"]').click()
      cy.wait(3000)
      cy.screenshot('EP16-06-5.82.6');

      //And I click tags
      cy.get('a[data-test-nav="tags"]').click();
      cy.wait(3000)
      cy.screenshot('EP16-07-5.82.6');

// And I click new post
cy.get('[data-test-nav="new-story"]').click();
cy.wait(3000)
// And I wait for 2 seconds
// And I enter title of post "Post de prueba"
cy.get('.gh-editor-title').clear().type(datosApriori.tittlePost2);
cy.wait(1000)

// And I wait for 2 seconds
// And I click on the Publish button
cy.get('[data-test-psm-triger]').should('not.exist');
cy.wait(5000)

     })

  })