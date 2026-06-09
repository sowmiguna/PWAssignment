import test, { expect } from "@playwright/test";

test("PVR Cinema Ticket Booking", async ({ page }) => {
    // set timeout is increase the timeout because application is slow and takes more time 
    test.setTimeout(60000);
    const city = 'Chennai';
    const movieName = 'BLAST'
    const movieDate = 'Tomorrow'
    // navigate to url
    await page.goto("https://www.pvrcinemas.com/.")
    //Handle alerts
    page.once('dialog',alertType=>{
        const type=alertType.type()
        console.log(type)

        const msg=alertType.message()
        console.log(msg)

        alertType.accept()

    })
    // click on the location
    await page.locator("//h6[text()='"+city+"']").click();
    //click on cinema option
    await page.locator("//span[text()='Cinema']").click();
    //click on select cinema dropdown
    await page.locator("//span[text()='Select Cinema']").click();
    //click on cinema from the dropdown
    await page.locator("//span[text()='INOX The Marina Mall, OMR, Chennai']").isEnabled();
    await page.locator("//span[text()='INOX The Marina Mall, OMR, Chennai']").click();
    //if else condition will handle dropdown option based on visblity
    // To select date from dropdown
    if(await page.locator("//span[contains(text(),'"+movieDate+"')]").isVisible())
    {
        await expect(page.locator("//span[contains(text(),'"+movieDate+"')]")).toBeVisible();
        //click on date
         await page.locator("//span[contains(text(),'"+movieDate+"')]").click();
    }
    else
    {
        //click on select date dropdown
        await page.locator("//span[contains(text(),'Select Date')]").click();
        //click on date
        await page.locator("//span[contains(text(),'"+movieDate+"')]").click();
    }
    // To select dropdown from cinema
    if(await page.locator("//li//span[text()='"+movieName+"']").isVisible())
    {
        //click on movie
        await expect(page.locator("//li//span[text()='"+movieName+"']")).toBeVisible();
        await page.locator("//li//span[text()='"+movieName+"']").click();
    }
    else
    {
        //click on select cinema dropdown
        await page.locator("//span[text()='Select Cinema']").click();
        //click on movie
        await page.locator("//span[text()='"+movieName+"']").click();
    }
    // To select dropdown from timing
    if(await page.locator("//div[@class='p-dropdown-panel p-component p-ripple-disabled p-connected-overlay-enter-done']//li[1]").isVisible())
    {
        //click on timimg
        await expect(page.locator("//li[@class='p-dropdown-item']").nth(0)).toBeVisible();
        //click on timimg
        await page.locator("//li[@class='p-dropdown-item']").nth(0).click();
    }
    else
    {
        //click on select timing dropdown
        await page.locator("//span[text()='Select Timing']").click();
        //click on timimg
       await page.locator("//li[@class='p-dropdown-item']").nth(0).click();
    }
    await expect(page.locator("//button[@class='p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn']")).toBeVisible()
    //click book button
    await page.locator("//button[@class='p-button p-component sc-hjsuWn kDwaXw bgColor filter-btn']").click();
    //click accept for popup message
    await expect(page.locator("//button[text()='Accept']")).toBeVisible();
    await page.locator("//button[text()='Accept']").click();
    // click on available seat not an able to click wheel chair option seat
    await page.locator("(//span[@class='seat-current-pvr'][not (img)])[4]").click();
    // get inner text of movie title
    let movieTitle = await page.locator("//div[@class='summary-movies-content']//h5").innerText();
    // Assert movie Name
    await expect(movieTitle).toBe(movieName);
    //Print the selected movie name
    console.log("The Movie Name is "+movieTitle);
    // get inner text of total ticket price
    let totalTicketPrice = await page.locator("//div[@class='grand-prices']//h6").innerText();
    // Assert the total price
    await expect(Number(totalTicketPrice)).toBeGreaterThan(0);
    //Print the total price
    console.log("The Total Ticket Price is "+totalTicketPrice);
    // get inner text of seat number after selecting the seat
    let seatNumber = await page.locator("//div[@class='seat-number']//p").innerText();
    // get the selected seat number
    let selectedSeatNumber = await page.locator("//span[@class='seat-selected-pvr']").innerText();
    //Assert the selected seat and displayed seat number is same as expected
    await expect(seatNumber).toContain(selectedSeatNumber);
    // print the seat number
    console.log("The Selected Seat Number is "+selectedSeatNumber);
    //get the page title
    let pageTitle = await page.title();
    // Assert the title of the page
    await expect(pageTitle).toBe("PVR Cinemas");
    //print the page title
    console.log("The title of the page is "+pageTitle);
    //await page.locator("//button[text()='Proceed']").click();
})
