import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { CVI_SLOVAKIA_LOGO, GOHEALTH_LOGO, WELCOME_TEXT,LOGIN_BUTTON_LOCATOR } from '../implementation/GuiLocators';
import { ENTRIES_TABLE } from '../implementation/modulLocators';

const { Given, When, Then } = createBdd();

Given('User lands on home page containing the Entries module', async ({ page }) => {
    await page.waitForSelector(ENTRIES_TABLE, { state: 'visible' });
});

When('Welcome text is visible on the page', async ({page}) => {
    await expect(page.locator(WELCOME_TEXT)).toBeVisible();
});

When('Logo of sponsor CVISlovakia is visible on the page', async ({page}) => {
    await page.waitForSelector(ENTRIES_TABLE, { state: 'visible' });
});

When('Logo of developer company GoHealth is visible on the page', async ({page}) => {
    const gohealthLogo = await page.locator(GOHEALTH_LOGO).all();
    expect(gohealthLogo.length).toBeGreaterThan(0);
});

When('Guide download link is available on the page', async ({page}) => {
    await expect(page.locator("//a[contains(text(),'Guide')]")).toBeVisible();
});

When('Navigation to modules {string} are available on the page', async ({page}, modulesNames: string) => {
    const navigationModules = modulesNames.split(', ')
    for (const moduleName of navigationModules) {
        await expect(page.locator(`//a[contains(text(),'${moduleName}')]`)).toBeVisible();
    }
});

When('User presses login button', async ({ page }) => {
    await page.click(LOGIN_BUTTON_LOCATOR);
});

Then('User is logged in and redirected to module Entries', async ({ page }) => {
    await page.waitForSelector('.form-group', { state: 'visible' });
});