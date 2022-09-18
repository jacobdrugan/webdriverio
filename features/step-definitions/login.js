const { Given, When, Then } = require('@wdio/cucumber-framework');
const SportsPage = require('../pageobjects/sports.page');
const pages = {
    sports: SportsPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await SportsPage.login(username, password)
});

Then(/^I should see (.*)$/, async (usernameText) => {
    await expect(SportsPage.spanUsername).toBeExisting();
    await expect(SportsPage.spanUsername).toHaveTextContaining(usernameText);
});