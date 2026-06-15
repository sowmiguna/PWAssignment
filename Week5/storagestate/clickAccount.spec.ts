import test from "@playwright/test";

test.use({storageState: "Data/LeafTap_Login.json"})

test("click lead use storage state for login", async({page}) => {

    await page.goto("https://leaftaps.com/opentaps/control/login;jsessionid=6DEC7E5A298BA06462EFC2BC3381ECA1.jvm1");
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.locator("//a[text()='Accounts'] ").click()
})