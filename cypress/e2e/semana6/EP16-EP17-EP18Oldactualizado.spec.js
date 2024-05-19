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
    
         it('E17Old', () => {
          //I enter email "<USERNAME1>"
           cy.get('input[name="identification"]').type('darth@vader.com');
           cy.screenshot('EP17-01-5.82.6');
           //I enter password "<PASSWORD1>"
           cy.get('input[name="password"]').type('yosoytupadre');
           cy.screenshot('EP17-02-5.82.6');
           //I click next
           cy.get('span').contains('Sign in').click();
           cy.wait(1000)
           cy.screenshot('EP17-03-5.82.6');
           //And I click tags
           cy.get("#ember38").click()
           cy.wait(1000)
           cy.screenshot('EP17-04-5.82.6');
   
           //And I click tagCreado
           cy.get('span[title="slug-del-tag"]').click();
           cy.wait(1000)
           cy.screenshot('EP17-05-5.82.6');
   
            //And I enter tagDescription "descripcion_editada"
            cy.get('#tag-description').clear({ force: true }).type('descripcion_editada', { force: true });
            cy.wait(1000)
            cy.screenshot('EP17-06-5.82.6');
   
           //And I click save
            cy.get('span').contains('Save').click();
            cy.wait(1000)
            cy.screenshot('EP17-07-5.82.6');
   
           //And I click tags
           cy.get("#ember38").click()
           cy.wait(1000)
           cy.screenshot('EP17-08-5.82.6');
   
           //Then I should see the tag description "descripcion_editada"
            cy.get('p.ma0.pa0.f8.midgrey.gh-tag-list-description').should('contain.text', 'descripcion_editada');
            cy.wait(1000)
            cy.screenshot('EP17-09-5.82.6');
        })

        it('E18Old', () => {
          //I enter email "<USERNAME1>"
          cy.get('input[name="identification"]').type('darth@vader.com');
           cy.screenshot('EP18-01-5.82.6');
           //I enter password "<PASSWORD1>"
           cy.get('input[name="password"]').type('yosoytupadre');
           cy.screenshot('EP18-02-5.82.6');
           //I click next
           cy.get('span').contains('Sign in').click();
           cy.wait(1000)
           cy.screenshot('EP18-03-5.82.6');
           //And I click tags
           cy.get("#ember38").click()
           cy.wait(1000)
           cy.screenshot('EP18-04-5.82.6');
   
           //And I click tagCreado
           cy.get('span[title="slug-del-tag"]').click();
           cy.wait(1000)
           cy.screenshot('EP18-05-5.82.6');
   
           //And I click delete
           cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.mb15').contains('span', 'Delete tag').click();
 
           cy.wait(1000)
           cy.screenshot('EP18-06-5.82.6');
   
           //And I click delete2
           cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
           cy.wait(1000)
           cy.screenshot('EP18-07-5.82.6');
   
           //And I click tags
           cy.get("#ember38").click()
           cy.wait(1000)
           cy.screenshot('EP18-08-5.82.6');
           
           //verificar que no exista el tag
           cy.get('span[title="slug-del-tag"]').should('not.exist');
           cy.wait(1000)
           cy.screenshot('EP18-09-5.82.6');
        })
  })