import test, { chromium, webkit } from "@playwright/test";


test("Load RebBusUrl in Edge and Print Title, URL", async () => {

    // the browser will launch in edge, channel option will help to launch in edge
    // headless false have to give then only able to view UI, by default it was true
    // where all promise is present need to give await, otherwise it will in pending status
    const edgeBrowser = await chromium.launch({ channel: 'msedge', headless: false })
    //newContext will open the window, it opens isolated incognito does not interact with any othet catches and cookies/ it was one complete profile
    const edgeContext = await edgeBrowser.newContext()
    //newpage will create new browser context that is tab 
    const edgePage = await edgeContext.newPage()
    // goto method will help to navigate the specified URL
    const redbus_Url = await edgePage.goto("https://www.redbus.in")
    //title method will return the title of the page present in particural page/url once it is loaded
    const redbusPageTitle = await edgePage.title();
    //url method will return the current url of the page
    const redbusCurrentURL = await edgePage.url();
    console.log("The RedBus page Title is : " + redbusPageTitle)
    console.log("The RedBus current URL is : " + redbusCurrentURL)
})

test("Load FlipKartUrl in webkit and Print Title, URL", async () => {
    // the browser will launch in webkit browser
    // headless false have to give then only able to view UI, by default it was true
    // where all promise is present need to give await, otherwise it will in pending status
    const webkitBrowser = await webkit.launch({ headless: false })
    //newContext will open the window, it opens isolated incognito does not interact with any othet catches and cookies/ it was one complete profile
    const webkitContext = await webkitBrowser.newContext()
    //newpage will create new browser context that is tab 
    const webkitPage = await webkitContext.newPage()
    await webkitPage.waitForTimeout(5000);
    // goto method will help to navigate the specified URL
    const pageUrl1 = await webkitPage.goto("https://www.flipkart.com")
    await webkitPage.waitForTimeout(10000);
    //title method will retrun the title of the page present in particural page/url once it is loaded
    const flipkartPageTitle = await webkitPage.title();
    //url method will return the current url of the page
    const flipkartCurrentURL = await webkitPage.url();
    console.log("The FlipKart page Title is : " + flipkartPageTitle)
    console.log("The FlipKart current URL is : " + flipkartCurrentURL)
})