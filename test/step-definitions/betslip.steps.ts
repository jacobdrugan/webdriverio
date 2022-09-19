import { Given,When,Then } from "@wdio/cucumber-framework"
import Page from "../pageobjects/page"
import SportsPage from '../pageobjects/sports.page'
const pages = {
    sports: SportsPage
}

Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
    await pages[page].open()
    await Page.acceptOneTrust()
});

When(/^I add (\d+) bets to the betlip$/, async (numberofbets) => {
    expect (await Page.btnLogin).toBeDisplayed()
    //Blocked here, cannot get assertion to work and therefore is blocking clicks from happening
    await SportsPage.addNumberofBets(numberofbets)
});

Then(/^I can see (\d+) in the count of bets$/, async (numberofbets) => {
    console.log(numberofbets)
    console.log(SportsPage.countofbetsonslip)
    expect(SportsPage.countofbetsonslip).toEqual(numberofbets)
});