describe('Verificar que la eliminación de tags sea exitosa OLD', () => {
    beforeEach(()=>{
      //I navigate to page "http://localhost:2368/ghost/"
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(4000)
        cy.screenshot('EP18Old-01-5.82.6');
        })

        it('E18Old', () => {
         //I enter email "<USERNAME1>"
          cy.get('#identification').type("darth@vader.com")
          cy.screenshot('EP18-01-5.82.6');
          //I enter password "<PASSWORD1>"
          cy.get('#password').type("yosoytupadre2")
          cy.screenshot('EP18-02-5.82.6');
          //I click next
          cy.get("[data-test-button='sign-in']").click()
          cy.wait(1000)
          cy.screenshot('EP18-03-5.82.6');
          //And I click tags
          cy.get("#ember29").click()
          cy.wait(1000)
          cy.screenshot('EP18-04-5.82.6');
  
          //And I click tagCreado
          cy.get('span[title="slug-del-tag"]').click();
          cy.wait(1000)
          cy.screenshot('EP18-05-5.82.6');
  
          //And I click delete
          cy.get('[data-test-button="delete-tag"]').click()
          cy.wait(1000)
          cy.screenshot('EP18-06-5.82.6');
  
          //And I click delete2
          cy.get('[data-test-task-button-state="idle"]').eq(1).click();
          cy.wait(1000)
          cy.screenshot('EP18-07-5.82.6');
  
          //And I click tags
          cy.get("#ember29").click()
          cy.wait(1000)
          cy.screenshot('EP18-08-5.82.6');
          
          //verificar que no exista el tag
          cy.get('span[title="slug-del-tag"]').should('not.exist');
          cy.wait(1000)
          cy.screenshot('EP18-09-5.82.6');
       })
    
  })