import test, { expect } from "@playwright/test";

 test("Auto Dismiss Alert", async({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml")
    //click alert confirm Show button
    await page.locator("//span[text()='Show']").nth(1).click()
    //get the text of auto dismiss alert text
    const dismissAlert = await page.locator("//span[@id='result']").innerText()
    //Assert the text
    await expect(dismissAlert).toBe("User Clicked : Cancel")
 })

 test("Using Page.once handle simple alerts", async({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml")
    // page once will handle the alert only once when the alert is pop up
    page.once('dialog', alertType =>{
        // type method will return the type of alert
        const type = alertType.type()
        console.log("The alert type is \""+type+"\"")
        // message method will return the text present in the alert message
        const message = alertType.message()
        console.log("The alert message is \""+message+"\"")
        // accept method will accept the alert
        alertType.accept()
    })

    //click alert confirm Show button
    await page.locator("//span[text()='Show']").nth(0).click()
    //get the text of accept alert message
    const acceptAlert = await page.locator("//span[@id='simple_result']").innerText()
    //Assert the text
    await expect(acceptAlert).toBe("You have successfully clicked an alert")
 })

 test("Using Page.once handle prompt alerts", async({ page }) => {

    await page.goto("https://www.leafground.com/alert.xhtml")
    // page once will handle the alert only once when the alert is pop up
    page.once('dialog', alertType =>{
        // type method will return the type of alert
        const type = alertType.type()
        console.log("The alert type is \""+type+"\"")
        // message method will return the text present in the alert message
        const message = alertType.message()
        console.log("The alert message is \""+message+"\"")
        // accept method will accept the alert and enter the text in text box
        alertType.accept("Sowmiya")
    })

    //click alert confirm Show button
    await page.locator("//span[text()='Show']").nth(4).click()
    //get the text of accept alert message
    const acceptAlert = await page.locator("//span[@id='confirm_result']").innerText()
    //Assert the text
    await expect(acceptAlert).toBe("User entered name as: Sowmiya")
 })

 test("Using Page.on handle simple, confirm, prompt alerts", async({ page }) => {
    test.setTimeout(60000)
    await page.goto("https://www.leafground.com/alert.xhtml")
    // page once will handle the alert only once when the alert is pop up
    page.on('dialog', alertType =>{
        // type method will return the type of alert
        const type = alertType.type()
        console.log("The alert type is \""+type+"\"")
        // message method will return the text present in the alert message
        const message = alertType.message()
        console.log("The alert message is \""+message+"\"")

        if(type === "alert")
        {
            // accept method will accept the alert and enter the text in text box
            alertType.accept()
        }
        else if(type === "confirm")
        {
            // dismiss method will cancel the alert
            alertType.dismiss()
        }
        else if(type === "prompt")
        {
            alertType.accept("playwright")
        }
    })
    //click alert confirm Show button
    await page.locator("//span[text()='Show']").nth(0).click()
    //get the text of accept alert message
    const acceptAlert = await page.locator("//span[@id='simple_result']").innerText()
    //Assert the text
    await expect(acceptAlert).toBe("You have successfully clicked an alert")
    //click alert confirm Show button
    await page.locator("//span[text()='Show']").nth(1).click()
    //get the text of auto dismiss alert text
    const dismissAlert = await page.locator("//span[@id='result']").innerText()
    //Assert the text
    await expect(dismissAlert).toBe("User Clicked : Cancel")
    //click alert confirm Show button
    await page.locator("//span[text()='Show']").nth(4).click()
    //get the text of accept alert message
    const acceptPromptAlert = await page.locator("//span[@id='confirm_result']").innerText()
    //Assert the text
    await expect(acceptPromptAlert).toBe("User entered name as: playwright")
 })