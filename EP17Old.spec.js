describe('Verificar que la edición de tags sea exitosa OLD', () => {
    beforeEach(()=>{
      //I navigate to page "http://localhost:2368/ghost/"
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(4000)
        cy.screenshot('EP17Old-00-5.82.6');
        })

        it('E17Old', () => {
          //I enter email "<USERNAME1>"
           cy.get('#identification').type("darth@vader.com")
           cy.screenshot('EP17-01-5.82.6');
           //I enter password "<PASSWORD1>"
           cy.get('#password').type("yosoytupadre2")
           cy.screenshot('EP17-02-5.82.6');
           //I click next
           cy.get("[data-test-button='sign-in']").click()
           cy.wait(1000)
           cy.screenshot('EP17-03-5.82.6');
           //And I click tags
           cy.get("#ember29").click()
           cy.wait(1000)
           cy.screenshot('EP17-04-5.82.6');
   
           //And I click tagCreado
           cy.get('span[title="slug-del-tag"]').click();
           cy.wait(1000)
           cy.screenshot('EP17-05-5.82.6');
   
            //And I enter tagDescription "descripcion_editada"
            cy.get('#tag-description').clear().type("descripcion_editada")
            cy.wait(1000)
            cy.screenshot('EP17-06-5.82.6');
   
           //And I click save
            cy.get('[data-test-task-button-state="idle"]').click()
             cy.wait(1000)
             cy.screenshot('EP17-07-5.82.6');
   
           //And I click tags
           cy.get("#ember29").click()
           cy.wait(1000)
           cy.screenshot('EP17-08-5.82.6');
   
           //Then I should see the tag description "descripcion_editada"
   cy.get('p[data-test-tag-description]').should('exist').contains('descripcion_editada');
           cy.wait(1000)
           cy.screenshot('EP17-09-5.82.6');
        })
    
  })