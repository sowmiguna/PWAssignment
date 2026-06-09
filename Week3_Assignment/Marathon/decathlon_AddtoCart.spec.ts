import test, { expect } from "@playwright/test";

test("Decathlon Shoes Add to cart", async ({ page }) => {
    // set timeout is increase the timeout because application is slow and takes more time 
    test.setTimeout(60000);
    const homeTitle = 'Buy Sporting Goods, Sportswear and Equipments | Download App'
    const category = 'Running'
    const gender = 'Men'
    const shoeSize ='10.5'

    await page.goto("https://www.decathlon.in/");
    //get the title of the page
    const launchPageTitle = await page.title();
    // verify the home page title
    await expect(launchPageTitle).toBe(homeTitle);
    // click on the search icon
    const searchIcon = await page.locator("//input[@type='search']");
    await searchIcon.click();
    // verify the click icon is enabled
    await searchIcon.isEnabled();
    // enter the shoes value in click 
    await searchIcon.fill('shoes');
    // Enter key is pressed
    await searchIcon.press('Enter');
    // get the page title
    const searchPageTitle = await page.title();
    console.log(searchPageTitle);
    // Hard assert the page title
    await expect(searchPageTitle).toBe('Search | shoes');
    //click on sport icon
    await page.locator("//span[text()='Sport']").click();
    // click on "Running Category"
    await page.locator("//span[text()='"+category+"']").click();
    //click on gender icon
    await page.locator("//span[text()='Gender']").click();
    //click on men filter check box
    await page.locator("//span[@data-test-id='filter-sidebar:item-text' and text()='"+gender+"']").click();
    //click on size filter
    await page.locator("//span[text()='Size']").click();
    // click on the size
    await page.locator("//span[text()='"+shoeSize+"']").click();
    // click on most relevent
    await page.locator("//span[text()='Most relevant']").click();
    // click price low to high
    await page.locator("//span[text()='Price (low → high) ']").click();
    // click on the product
    await page.locator("(//img[@data-test-id='product-card-product-image:img'])[6]").click();
    //click on size 
    await page.locator("//ul[@data-test-id='pdp-size-selector-desktop:grid']//span[text()='"+shoeSize+"']").click();
    //click on add to cart button
    await page.locator("//button[@data-test-id='pdp:add-to-cart-button']").click();
    //await page.getByRole("button", { name: /add to cart/i }).click();
    //validate product added to cart is visible
    await page.locator("//span[text()='Product(s) added to cart']").isVisible();
    //click cart icon
    await page.locator("//a[@aria-label='Cart']").click();
    //fetch the total amount
    const totalAmount = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']//p[@classname='font-semibold']").innerText();
    console.log("The Total Amount is "+totalAmount);
})