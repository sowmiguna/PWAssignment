import test, { expect } from "@playwright/test";

test("Edit Individuals Sales Force", async ({ page }) => {
    
    let firstName = "henry"

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
    // click on Individuals Tab
    await page.locator("//span[text()='Individuals']").click();
    // search bar locator is stored
    const searchLocator = await page.locator("//input[@name='Individual-search-input']")
    //enter the text in search bar
    await searchLocator.fill('FG');
    // press the enter key
    await searchLocator.press('Enter')
    //click dropdown button
    await page.locator("//a[contains(@title,'FG')]/ancestor::tr//child::button").click();
    // click edit button
    await page.locator("//a[@title='Edit']").click();
    // fil first name
    await page.locator("//input[contains(@class,'firstName ')]").fill(firstName);
    // click save button
    await page.locator("//span[text()='Save']").click();
    // locator is stored as varible name
    const name = await page.locator("(//a[@class='slds-truncate'])[1]//span");
    //expect method store the xpath values and toHaveText method will validate the text is equal
    await expect(name).toContainText(firstName)     
})