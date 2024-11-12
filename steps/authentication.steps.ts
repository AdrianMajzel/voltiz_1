import { createBdd } from 'playwright-bdd';
import { Page } from 'playwright';

require('dotenv').config();

const { Given, When, Then } = createBdd();

Given('User navigates to cvislovakia webpage', async function ({page}) {
    const baseURL = process.env.CVIS_ENTRY_URL;
    if (!baseURL) {
        throw new Error('Enviroment variable CVIS_ENTRY_URL is not defined');
    }
    await page.goto(baseURL);
});

When('User navigates to login', async function ({ page }) {
    await page.click("//a[@href='#/login']");
});

Then('Login form appears on the page', async function ({ page }) {
    await page.waitForSelector(".form-login", { state: 'visible' });
});

When('User enters {string} credentials to login form', async function ({ page }, validity: string) {
    switch (validity) {
        case "invalid": {
            await page.fill('input[name="username"]', process.env.INVALID_NAME || '');
            await page.fill('input[name="password"]', process.env.INVALID_PASSWORD || '');
            break;
        }
        case "valid federation": {
            await page.fill('[id= "input_nation"]', process.env.VALID_NAME_FED || '');
            await page.fill('[id= "input_password"]', Buffer.from(process.env.VALID_PASSWORD_FED || '', 'base64').toString('utf-8'));
            break;
        }
        case "valid admin": {
            await page.fill('input[name="username"]', process.env.VALID_NAME_ADMIN || '');
            await page.fill('input[name="password"]', Buffer.from(process.env.VALID_PASSWORD_ADMIN || '', 'base64').toString('utf-8'));
            break;
        }
        default: {
            throw new Error(`Validity '${validity}' is not recognized. Valid inputs: 'valid federation', 'valid admin', 'invalid'`);
        }
    }
});
