Feature: Verificar que la edición de tags sea exitosa

@user1 @web
Scenario: Verificar que la edición de tags sea exitosa
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 7 seconds
  And I click tags
  And I wait for 5 seconds
  And I click tagCreado
  And I wait for 5 seconds
  And I enter tagDescription "descripcion_editada"
  And I click save
  And I wait for 3 seconds
  And I click tags
  And I wait for 3 seconds
  Then I should see the tag description "descripcion_editada"