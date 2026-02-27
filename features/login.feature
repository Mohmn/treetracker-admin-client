Feature: Login

  Scenario: Login with wrong credentials shows an error message
    Given I am on the login page
    When I enter username "admin" and password "wrongpwd"
    And I click the login button
    Then I should see an error message

  Scenario: Login with valid credentials succeeds
    Given I am on the login page
    When I enter username "test-dev" and password "5Z5971uQXV"
    And I click the login button
    Then I should be redirected away from the login page
