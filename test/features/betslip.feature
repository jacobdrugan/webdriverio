Feature: Betslip        

    Scenario: Adding a single bet

        Given I am on the sports page
        When I add 1 bet to the betlip
        Then I can see 1 in the count of bets

    Scenario: Adding multiple bets

        Given I am on the sports page
        When I add 3 bets to the betlip
        Then I can see 3 in the count of bets