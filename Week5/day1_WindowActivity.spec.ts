import test from '@playwright/test'


test("Handle window",async({page,context})=>{
    await page.goto("https://www.leafground.com/window.xhtml")
    
    //step1: create promise
    const parentWindow=context.waitForEvent("page")
    //step 2: Do the action click open
    await page.locator("//span[text()='Open']").click();
    //step 3: resolve the promise(switch to child window)
    const childWindow=await parentWindow
    // Enter mail id
    await childWindow.locator("#email").fill('sowmiguna02@gmail.com');
    // come back to parent window
    await page.bringToFront()
    // click on multiple window
    await page.locator("//span[text()='Open Multiple']").click();
})