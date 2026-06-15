import test from "@playwright/test";

test("File Upload", async({page})=>{
    await page.goto("https://www.naukri.com/registration/createAccount")

    await page.locator("//h2[contains(text(),'experienced')]").click()
    await page.locator("//input[@type='file']").setInputFiles("./TestData/LocatorsHomeWork.pdf")
})