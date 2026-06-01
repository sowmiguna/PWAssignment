import test from "@playwright/test";

// calling test method with inbuilt launch browser
test("Create Edit Leads", async ({ page }) => {

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
  // to click the  lead link
  await page.locator("//a[text()='Leads']").click();
  // to click the create lead
  await page.locator("//a[text()='Create Lead']").click();
  // click the company name
  await page.locator('#createLeadForm_companyName').click();
  // fill method will clear the text box and enter value
  await page.locator('#createLeadForm_companyName').fill('Test Leaf');
  // fill method will clear the text box and enter value
  await page.locator('#createLeadForm_firstName').nth(0).fill('Sowmiya');
  await page.locator('#createLeadForm_lastName').nth(0).fill('G');
  // click the create lead button
  await page.locator("//input[@name='submitButton']").click();
  // click the Edit button
  await page.locator("//a[text()='Edit']").click();
  // fill method will clear the text box and enter value
  await page.locator('#updateLeadForm_companyName').fill('CA');
  // click the update button
  await page.locator("//input[@value='Update']").click();
})