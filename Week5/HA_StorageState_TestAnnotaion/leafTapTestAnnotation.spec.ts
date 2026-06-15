import test, { expect } from "@playwright/test";

//fail is used whe the particular scenario expected to be failed
test.fail("Invalid Login password expected to fail", async ({ page }) => {

    // goto method will help to navigate the specified URL
    await page.goto("https://leaftaps.com/opentaps/control/main")

    // to click the username 
    await page.locator('#username').click();
    // to enter the username use fill method it will clear the existing text and enter the value
    await page.locator('#username').fill('democsr');
    // to click the password
    await page.locator('#password').click();
    // to enter the username use fill method it will clear the existing text and enter the value
    await page.locator('#password').fill('crmsfasd');
    // to click the login button
    await page.locator('.decorativeSubmit').click();
    // store the page title
    const pageLeafTitle = await page.title()
    // validate the page title that should be failed
    expect(pageLeafTitle).toBe('LeafTaps - TestAutomation')
})

// fixme is used when test was in bug state devloper needs to fix 
test.fixme("Fixme will not execute the test case", async ({ page }) => {

  // goto method will help to navigate the specified URL
  await page.goto("https://leaftaps.com/opentaps/control/main")

  // to click the username 
  await page.locator('#username').click();
  // to enter the username use fill method it will clear the existing text and enter the value
  await page.locator('#username').fill('democsr');
  // to click the password
  await page.locator('#password').click();
  // to enter the username use fill method it will clear the existing text and enter the value
  await page.locator('#password').fill('crmsfa');
  // to click the login button
  await page.locator('.decorativeSubmit').click();
  // to click the crmsfa link
  await page.locator(`text='CRM/SFA'`).click();
})

// skip is used to skip the particular test case in some case was out of scope 
test.skip("Skip will not execute the test case", async ({ page }) => {

  // goto method will help to navigate the specified URL
  await page.goto("https://leaftaps.com/opentaps/control/main")

  // to click the username 
  await page.locator('#username').click();
  // to enter the username use fill method it will clear the existing text and enter the value
  await page.locator('#username').fill('democsr');
  // to click the password
  await page.locator('#password').click();
  // to enter the username use fill method it will clear the existing text and enter the value
  await page.locator('#password').fill('crmsfa');
  // to click the login button
  await page.locator('.decorativeSubmit').click();
  // to click the crmsfa link
  await page.locator(`text='CRM/SFA'`).click();
})