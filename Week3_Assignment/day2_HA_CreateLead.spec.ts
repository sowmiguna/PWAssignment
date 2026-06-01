import test from "@playwright/test";

// calling test method with inbuilt launch browser
test("PlayWrightFixture", async ({ page }) => {

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
  // give some external timeout
  //await page.waitForTimeout(12000);
  // to click the crmsfa link
  await page.locator(`text='CRM/SFA'`).click();
  //title method will get the title of the page 
  let txt_pageTilte = await page.title();
  console.log(txt_pageTilte)
  // to click the create lead
  await page.locator("//a[text()='Create Lead']").click();
  // click the company name
  await page.locator('#createLeadForm_companyName').click();
  // fill method will clear the text box and enter value
  await page.locator('#createLeadForm_companyName').fill('Test Leaf');
  // fill method will clear the text box and enter value
  await page.locator('#createLeadForm_firstName').nth(0).fill('Sowmiya');
  await page.locator('#createLeadForm_lastName').nth(0).fill('G');
  await page.locator('#createLeadForm_personalTitle').fill('Tester');
  await page.locator('#createLeadForm_generalProfTitle').fill('QA');
  await page.locator('#createLeadForm_annualRevenue').fill('800000');
  await page.locator('#createLeadForm_departmentName').fill('Testing');
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');
  // click the create lead button
  await page.locator("//input[@name='submitButton']").click();
})