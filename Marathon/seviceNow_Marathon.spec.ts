import test from "@playwright/test";
import iphoneSelection from "../../utils/servicenow_ServiceCatalog_Iphone.json"

//json file values stored using index value, because it contains one array
const iphoneFeatures = iphoneSelection[0]

test(`${iphoneFeatures.TC_No} Placing an order for Apple iphone 13pro`, async({page}) => {
    // timeout is handled due to application slowness
    test.setTimeout(90000);
    //Navigate to given URL
    await page.goto("https://dev296651.service-now.com/")
    // enter user name 
    await page.locator('#user_name').fill('admin')
    // enter password
    await page.locator('#user_password').fill('E7i*7wNgX*mM')
    // click on login button
    await page.locator('#sysverb_login').click()
    //click All Option
    await page.locator('#d6e462a5c3533010cbd77096e940dd8c').click()
    // In serach box enter the text using fill method which is used clear existing value and enter the given value
    await page.locator('#filter').fill('Service Catalog')
    //click the service catalog module
    await page.locator('#e660172ac611227b00fa88fb47ae3fad').click()
    // using frmae locator switch to the iframe and store in variable to use instead of using each time frame locator
    const frame_Locator = page.frameLocator('#gsft_main')
    // click Mobiles catalog
    await frame_Locator.getByText('Mobiles').nth(0).click()
    //click iphone 13 pro model to place order
    await frame_Locator.locator("//strong[text()='"+iphoneFeatures.iphoneModel+"']").click()
    // handle radio button broken option as yes
    await frame_Locator.locator("//label[@class='radio-label' and text()='"+iphoneFeatures.brokenOption+"']").click()
    // fill the text box in original phone number
    await frame_Locator.locator("//input[@class='cat_item_option sc-content-pad form-control']").fill(iphoneFeatures.originalPhNo)
    // select the monthly data from dropdown, directly giving select option is not acceptable due to frame hadling 
    await frame_Locator.locator("(//select)[1]").selectOption({value: iphoneFeatures.monthlyData})
    // handle radio button for color option
    await frame_Locator.locator("//label[@class='radio-label' and text()='"+iphoneFeatures.color+"']").click()
    // handle radio button for storage option
    await frame_Locator.locator("//label[@class='radio-label' and contains(text(),'"+iphoneFeatures.storage+"')]").click()
    // click the order now button and place the order
    await frame_Locator.locator("#oi_order_now_button").click()
    // verify the confirmation message is displayed
    const confirmMessage = frame_Locator.locator("//span[text()='Thank you, your request has been submitted']")
    // waitfor method is used to wait until the element is visisble
    await confirmMessage.waitFor({state: "visible"})
    const printMessage = await confirmMessage.innerText()
    // take full page screen shot
    await page.screenshot({path: `./TestData/Iphone13ProOrderSS.png`, fullPage: true})
    console.log(printMessage)
})
