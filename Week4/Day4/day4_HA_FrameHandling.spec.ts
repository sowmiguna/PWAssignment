import test, { expect } from "@playwright/test";

test("Frame Handling", async({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")

    const frame = await page.frames()
    console.log("The total frame present in the page is "+frame.length)
    // clicking frame using index value
    await frame[1].locator("#Click").nth(0).click();
    // Assert the text after click
    const text = await frame[1].locator("#Click").nth(0).innerText()
    await expect(text).toBe("Hurray! You Clicked Me.")
    // clicking frame using frame object
    await page.frame({name:'frame2'})?.locator("#Click").click()
    //Assert the text
    const nestedFrameText = await page.frame({name:'frame2'})?.locator("#Click").innerText()
    await expect(nestedFrameText).toBe("Hurray! You Clicked Me.")
})