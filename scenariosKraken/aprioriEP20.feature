Feature: Verificar que el tag este publicado dentro del post

@user1 @web
Scenario: Verificar que el tag este publicado dentro del post
  Given I navigate to page "http://localhost:2368/ghost/"
  And I wait for 4 seconds
  When I enter email "<USERNAME>"
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next
  And I wait for 2 seconds
  And I click tags
  And I wait for 1 seconds
  And I click on the linked post
  And I click on the post link
  And I click on the post settings button
  And I click on the View post link
  Then I verify that the tag link within the post is present