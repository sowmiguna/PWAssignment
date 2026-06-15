import test from "@playwright/test";

test("storage json file leaftap login", async({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator("//input[@id='username']").fill('democsr')
    await page.locator("//input[@id='password']").fill('crmsfa')
    await page.locator("//input[@value='Login']").click()

    await page.context().storageState({path: "Data/LeafTap_Login.json"});

})