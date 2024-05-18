Feature: Verificar que la eliminación de tags sea exitosa

@user1 @web
Scenario: Verificar que la eliminación de tags sea exitosa
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
  And I click delete
  And I wait for 1 seconds
  And I click delete2
  And I wait for 1 seconds
  And I click tags
  And I wait for 1 seconds
  Then I should see "Create a new tag"