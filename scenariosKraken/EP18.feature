Feature: Verificar que la eliminación de tags sea exitosa

@user1 @web
Scenario: Verificar que la eliminación de tags sea exitosa
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 5 seconds
  When I enter email "<USERNAME1>"
  And I enter password "<PASSWORD1>"
  And I click next
  And I wait for 7 seconds
  And I click tags
  And I wait for 5 seconds
  And I click tagCreado
  And I wait for 3 seconds
  And I click delete
  And I wait for 3 seconds
  And I click delete2
  And I wait for 3 seconds
  And I click tags
  And I wait for 3 seconds
  Then I should see "Create a new tag"