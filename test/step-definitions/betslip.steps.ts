import { Given,When,Then, Before, BeforeAll, After } from "@wdio/cucumber-framework"
import Page from "../pageobjects/page"
import SportsPage from '../pageobjects/sports.page'
const pages = {
    sports: SportsPage
}

Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
    await pages[page].open()
    await SportsPage.mainContent.waitForDisplayed()
    await Page.acceptOneTrust()
});

When(/^I add 1 bet to the betlip$/, async () => {
    await SportsPage.addNumberofBets(1)
});

Then(/^I can see 1 in the count of bets$/, async () => {
    expect(SportsPage.listBetslipcount).toBeElementsArrayOfSize(1)
});


When(/^I add 3 bets to the betlip$/, async () => {
    await SportsPage.addNumberofBets(3)
});

Then(/^I can see 3 in the count of bets$/, async () => {
    expect(SportsPage.listBetslipcount).toBeElementsArrayOfSize(3)
});

