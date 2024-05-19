import { LoginPage } from '../pageObjects/LoginPage';
import { faker } from '@faker-js/faker';

describe('Verificar que la creación de tags sea exitosa', () => {
  const loginPage = new LoginPage()
  beforeEach(() => {
    cy.wait(1000);
    loginPage.visit();
    cy.wait(1000);
    loginPage.login(Cypress.env('USERNAME'), Cypress.env('PASSWORD'));    
    cy.wait(6000);
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.error('Uncaught exception', err);
      return false;
    });
  })

        it('E16', () => {
            cy.get("#ember29").click()
            cy.wait(1000)
            cy.screenshot('EP16-01-5.82.6');
            //And I click newTag
            cy.get('span').contains('New tag').click();
            cy.wait(1000)
            cy.screenshot('EP16-02-5.82.6');
            //And I enter tagName "<tagName>"
            cy.get('#tag-name').type("Tag de prueba")
            cy.wait(1000)
            cy.screenshot('EP16-03-5.82.6');
            //And I enter tagSlug "<tagSlug>"
            cy.get('#tag-slug').clear().type("Slug del Tag")
            cy.wait(1000)
            cy.screenshot('EP16-04-5.82.6');
            //And I enter tagDescription "<tagDescription>"
            cy.get('#tag-description').type("Este es un tag de prueba")
            cy.wait(1000)
            cy.screenshot('EP16-05-5.82.6');
            //And I click save
            cy.get('[data-test-button="save"]').click()
            cy.wait(1000)
            cy.screenshot('EP16-06-5.82.6');
    
            //And I click tags
            cy.get('#ember29').click()
            cy.wait(1000)
            cy.screenshot('EP16-07-5.82.6');
    
            //Then I should see the tag "<tagName>"
            cy.get('span[title="slug-del-tag"]').should('exist');
            cy.wait(1000)
            cy.screenshot('EP16-08-5.82.6');
         })


         it('E17', () => {
           //And I click tags
           cy.get("#ember29").click()
           cy.wait(1000)
           cy.screenshot('EP17-01-5.82.6');
   
           //And I click tagCreado
           cy.get('span[title="slug-del-tag"]').click();
           cy.wait(1000)
           cy.screenshot('EP17-02-5.82.6');
   
            //And I enter tagDescription "descripcion_editada"
            cy.get('#tag-description').clear().type("descripcion_editada")
            cy.wait(1000)
            cy.screenshot('EP17-03-5.82.6');
   
           //And I click save
            cy.get('[data-test-task-button-state="idle"]').click()
             cy.wait(1000)
             cy.screenshot('EP17-04-5.82.6');
   
           //And I click tags
           cy.get("#ember29").click()
           cy.wait(1000)
           cy.screenshot('EP17-05-5.82.6');
   
           //Then I should see the tag description "descripcion_editada"
   cy.get('p[data-test-tag-description]').should('exist').contains('descripcion_editada');
           cy.wait(1000)
           cy.screenshot('EP17-06-5.82.6');
        })

        it('E18', () => {
           //And I click tags
           cy.get("#ember29").click()
           cy.wait(1000)
           cy.screenshot('EP18-01-5.82.6');
   
           //And I click tagCreado
           cy.get('span[title="slug-del-tag"]').click();
           cy.wait(1000)
           cy.screenshot('EP18-02-5.82.6');
   
           //And I click delete
           cy.get('[data-test-button="delete-tag"]').click()
           cy.wait(1000)
           cy.screenshot('EP18-03-5.82.6');
   
           //And I click delete2
           cy.get('[data-test-task-button-state="idle"]').eq(1).click();
           cy.wait(1000)
           cy.screenshot('EP18-04-5.82.6');
   
           //And I click tags
           cy.get("#ember29").click()
           cy.wait(1000)
           cy.screenshot('EP18-05-5.82.6');
           
           //verificar que no exista el tag
           cy.get('span[title="slug-del-tag"]').should('not.exist');
           cy.wait(1000)
           cy.screenshot('EP18-06-5.82.6');
        })

     
    
  })