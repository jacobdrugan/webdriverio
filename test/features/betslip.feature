Feature: Betslip        

    Scenario Outline: Adding a bet

        Given I am on the sports page
        When I add <numberofbets> bets to the betlip
        Then I can see <numberofbets> in the count of bets
    
        Examples:
        | numberofbets |
        | 1 |