Feature: Verificar que la asociacion de un tag a un post sea exitosa

@user1 @web
Scenario: Verificar que la asociacion de un tag a un post sea exitosa
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 4 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next
  And I wait for 2 seconds
  And I click tags
  And I wait for 1 seconds
  And I click newTag
  And I wait for 1 seconds
  And I enter tagName "<tagName>"
  And I wait for 1 seconds
  And I enter tagColor "<tagColor>"
  And I wait for 1 seconds
  And I enter tagSlug "<tagSlug>"
  And I enter tagDescription "<tagDescription>"
  And I wait for 1 seconds
  And I click save
  And I wait for 1 seconds
  And I click tags
  And I wait for 1 seconds
  And I click new post
  And I wait for 2 seconds
  And I enter title of post "Post de prueba"
  And I wait for 2 seconds
  And I enter post "Estoy escribiendo un post"
  And I wait for 2 seconds
  And I click on the post settings button
  And I wait for 2 seconds
  And I click on the Ver Tags
  And I wait for 2 seconds
  And I click on the Tag de prueba
  And I wait for 2 seconds
  And I click on the Publish button
  And I wait for 2 seconds
  And I click on the Continue button 
  And I wait for 2 seconds
  And I click on the Publish post, right now button
  And I wait for 2 seconds
  And I navigate to page "http://localhost:2368/ghost/#/dashboard"
  And I wait for 2 seconds
  And I click on the Posts link
  And I wait for 2 seconds
  Then I verify that the text Tag de prueba is present
  