import test, { expect } from "@playwright/test";

// test.use annotation will store the login function and execute in API without UI visible 
test.use({storageState: "Data/sf-storage.json"})
test("Navigate To Home Page And Verify Using Storage State", async({page}) => {
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    // verify the Home tab is visible after skiping the login
    await page.locator("//span[text()='Home']").nth(0).isVisible();
})

test("Navigate to Accounts Page", async({page}) => {
    test.slow()
    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    // verify the Home tab is visible after skiping the login
    await page.locator("//span[text()='Accounts']").nth(0).isVisible();
    // Navigate to Account page
     await page.locator("//span[text()='Accounts']").nth(0).click();
})

test.fail("Account Page title isinvalid", async({page}) => {

    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    // verify the Home tab is visible after skiping the login
    await page.locator("//span[text()='Accounts']").nth(0).isVisible();
    // Navigate to Account page
     await page.locator("//span[text()='Accounts']").nth(0).click();
    // store the page title
    const pageTitle = await page.title()
    // validate the page title that should be failed
    expect(pageTitle).toBe('Recently Viewed | Home | Salesforce')
})