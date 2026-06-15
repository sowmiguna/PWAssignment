import test from "@playwright/test";

import loginValue from '../../utils/salesForce_Login.json'


// To execute one time
//json - index value start from '0'
//const getValue=loginValue[1]

// for loop execute the iteration of json file values
for(let getValue of loginValue){
test(`Login With Different Set of Data ${getValue.TC_No}`  ,async({page})=>{
   
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("//input[@id='username']").fill(getValue.userName)
await page.locator("//input[@id='password']").fill(getValue.password)
await page.locator("//input[@id='Login']").click()
})
}