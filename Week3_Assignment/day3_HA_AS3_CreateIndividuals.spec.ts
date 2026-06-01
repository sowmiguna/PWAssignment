import test, { expect } from "@playwright/test";

test("Create Individuals Sales Force", async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in")
    // click username text box
    await page.locator("//input[@id='username']").click()
    // Enter username
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    // click password text box
    await page.locator("//input[contains(@id,'pass')]").click()
    //  fill the password text box
    await page.locator("//input[contains(@id,'pass')]").fill("TestLeaf@2025")
    // used xpath as this format //tag[contains(@attribute,' partial value')]
    await page.locator("//input[contains(@type,'sub')]").click()
    // click on toggle menu
    await page.locator("//div[@class='slds-icon-waffle']").click();
    // click on view all
    await page.locator("//button[text()='View All']").click();
    // click on Individuals link
    await page.locator("//a[@data-label='Incidents']").click();
    // click on Individuals list dropdown button
    await page.locator("//span[text()='Individuals List']/parent::a").click();
    //await page.waitForTimeout(10000);
    // click on New Individual List
    await page.locator("//span[text()='New Individual']").click();
    //await page.waitForTimeout(30000);
    // fil last name
    await page.locator("//input[contains(@class,'lastName ')]").fill('FG');
    // click save button
    await page.locator("//span[text()='Save']").click();
    // get text
    const lastName = await page.locator("(//span[@class='uiOutputText'])[1]");
    await expect(lastName).toHaveText('FG')
})