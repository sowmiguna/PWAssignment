import test, { expect } from "@playwright/test";

test("Handle Frames", async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    //Handle alerts
    page.once('dialog',alertType=>{
        const type=alertType.type()
        console.log(type)

        const msg=alertType.message()
        console.log(msg)

        alertType.accept()

    })

    //farmelocator is identidy the iframe and handle the frame
    await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click()
        
})