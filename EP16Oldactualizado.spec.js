describe('Verificar que la creación de tags sea exitosa OLD', () => {
    beforeEach(()=>{
      //Given I navigate to page "http://localhost:2368/ghost/"
       cy.visit('http://localhost:3002/ghost/')
        cy.wait(4000)
        cy.screenshot('EP16Old-00-5.82.6');
        })

        it('E16Old', () => {
            //When I enter email "<USERNAME1>"
            cy.get('input[name="identification"]').type('darth@vader.com');
            cy.screenshot('EP16-01-5.82.6');
            //And I enter password "<PASSWORD1>"
            cy.get('input[name="password"]').type('yosoytupadre');
            cy.screenshot('EP16-02-5.82.6');
            //And I click next
            cy.get('span').contains('Sign in').click();
            cy.wait(1000)
            cy.screenshot('EP16-03-5.82.6');
            //And I click tags
            cy.get("#ember38").click()
            cy.wait(1000)
            cy.screenshot('EP16-04-5.82.6');
            //And I click newTag
            cy.get('span').contains('New tag').click();
            cy.wait(1000)
            cy.screenshot('EP16-05-5.82.6');
            //And I enter tagName "<tagName>"
            cy.get('#tag-name').type("Tag de prueba")
            cy.wait(1000)
            cy.screenshot('EP16-06-5.82.6');
            //And I enter tagSlug "<tagSlug>"
            cy.get('input[name="slug"]').clear({ force: true }).type('Slug del Tag', { force: true });
            
            cy.wait(1000)
            cy.screenshot('EP16-07-5.82.6');
            //And I enter tagDescription "<tagDescription>"
            cy.get('#tag-description').type("Este es un tag de prueba")
            cy.wait(1000)
            cy.screenshot('EP16-08-5.82.6');
            //And I click save
            cy.get('span').contains('Save').click();
            cy.wait(1000)
            cy.screenshot('EP16-09-5.82.6');
    
            //And I click tags
            cy.get("#ember38").click()
            cy.wait(1000)
            cy.screenshot('EP16-10-5.82.6');
    
            //Then I should see the tag "<tagName>"
            cy.get('span[title="slug-del-tag"]').should('exist');
            cy.wait(1000)
            cy.screenshot('EP16-11-5.82.6');
         })
    
  })