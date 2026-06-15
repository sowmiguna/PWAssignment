import test, { expect } from "@playwright/test";

test("Create Individuals Sales Force", async ({ page }) => {

    test.setTimeout(60000);

    const accountName = 'hassele';
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
    // click search icon
    await page.locator("//one-app-launcher-modal//input[@class='slds-input']").fill('Accounts')
    //click Accounts link
    await page.locator("//a[@data-label='Accounts']").click()
    // click New
    await page.locator("//a[@title='New']").click()
    //Enter the name
    await page.locator("//input[@name='Name']").fill(accountName)
    //click type dropdown
    await page.locator("//button[@aria-label='Type']").click()
    //select prospect
    await page.locator("//span[text()='Prospect']").click()
    //click Industry dropdown
    await page.locator("//button[@aria-label='Industry']").click()
    //select Banking
    await page.locator("//span[text()='Banking']").click()
    //click Save button
    await page.locator("//button[@name='SaveEdit']").click()
    await page.waitForTimeout(5000)
    //upload file using input tag
    await page.locator("//input[@name='fileInput']").setInputFiles('./TestData/LocatorsHomeWork.pdf')
    //wait for green tick element
    await page.locator("//lightning-primitive-icon[@variant='success']")
    // click Done button
    await page.locator("//span[text()='Done']").click()
    // verify file is uploaded
    await expect(page.locator("//span[text()='LocatorsHomeWork']")).toBeVisible()
})