const { Given, When, Then } = require('@wdio/cucumber-framework');
const SportsPage = require('../pageobjects/sports.page');
const pages = {
    sports: SportsPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await SportsPage.acceptOneTrust()
});

//Problem with this step
When(/^I add (\d+) bets to the betlip$/, async (numberofbets) => {
    for(var i = 0 ; i < numberofbets; i++){
        await SportsPage.btnAddPopularBet[i].click()
    }
});

Then(/^I can see (\d+) in the count of betslips$/, async (betcount) => {
    const BetslipBets = await $$(SportsPage.singleBetonSlip)
    await expect(BetslipBets.count()).toBe(betcount)
});