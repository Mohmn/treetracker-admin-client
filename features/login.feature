Feature: Login

  Scenario: Login with wrong credentials shows an error message
    Given I am on the login page
    When I enter username "admin" and password "wrongpwd"
    And I click the login button
    Then I should see an error message
