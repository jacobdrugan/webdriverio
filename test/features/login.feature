Feature: Login

    Scenario Outline: As a user, I can log into sports

        Given I am on the sports page
        When I login with <username> and <password>
        Then I should see <usernameText>

        Examples:
        | username | password | usernameText |
        | JacobDragon10 | en$!8CE@.PM9qt9 | JacobDragon10 |