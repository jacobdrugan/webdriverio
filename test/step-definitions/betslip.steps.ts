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
    await SportsPage.addNumberofBets(numberofbets)
});

Then(/^I can see (\d+) in the count of bets$/, async (numberofbets) => {

});