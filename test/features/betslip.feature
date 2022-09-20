Feature: Betslip        

    Scenario: Adding a single bet

        Given I am on the sports page
        When I add 1 bet to the betlip
        Then I can see 1 in the count of bets