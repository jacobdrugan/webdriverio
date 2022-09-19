import { Given,When,Then } from "@wdio/cucumber-framework"
import Page from "../pageobjects/page"
import SportsPage from '../pageobjects/sports.page'
const pages = {
    sports: SportsPage
}

Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await Page.login(username, password)
});

Then(/^I should see (.*)$/, async (usernameText) => {
    await expect(Page.spanUsername).toBeExisting();
    await expect(Page.spanUsername).toHaveTextContaining(usernameText);
});