import test, { expect } from "@playwright/test";

test("Create Individuals Sales Force", async ({ page }) => {
    test.setTimeout(60000);
    const lastName_Value = 'mk'
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
    await page.locator("//div[@class='slds-icon-waffle']").click()
    // click on view all
    await page.locator("//button[text()='View All']").click()
    // click on sales 
    await page.locator("//p[text()='Sales']").click()
    // click on Leads Tab
    await page.locator("//a//span[text()='Leads']").click()
    // click on New button
    await page.locator("//a[@title='New']").click()
    // click on salutation dropdown
    await page.locator("//button[@name='salutation']").click()
    // click on salutation dropdown
    await page.locator("//div[@aria-label='Salutation']//span[text()='Ms.']").click()
    // click on lastname input box
    await page.locator("//input[@name='lastName']").click()
    // enter lastname input box
    await page.locator("//input[@name='lastName']").fill(lastName_Value)
    // click on company name
    await page.locator("//input[@name='Company']").click()
    // enter company name
    await page.locator("//input[@name='Company']").fill('CA')
    // click on Save
    await page.locator("//button[@name='SaveEdit']").click()
    // store locator creating variable
    const lastName = await page.locator("//slot[@name='primaryField']/lightning-formatted-name");
    //Auto try method to validate the lastname
    await expect(lastName).toContainText(lastName_Value)
})
