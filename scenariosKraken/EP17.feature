Feature: Verificar que la edición de tags sea exitosa

@user1 @web
Scenario: Verificar que la edición de tags sea exitosa
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 4 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I click next
  And I wait for 1 seconds
  And I click tags
  And I wait for 1 seconds
  And I click tagCreado
  And I wait for 1 seconds
  And I enter tagDescription "descripcion_editada"
  And I click save
  And I wait for 1 seconds
  And I click tags
  And I wait for 1 seconds
  Then I should see the tag description "descripcion_editada"