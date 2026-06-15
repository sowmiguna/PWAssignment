import test from "@playwright/test";

//scenario1 to upload image using input tag and setinputfiles method
test("File Upload using input tag", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")
    // we can give ./ is optional for complicate project need to give
    await page.locator("//input[@id='file-upload']").setInputFiles('./TestData/Sowmiya.jpeg')
    await page.waitForTimeout(3000)
})

//scenario2 to upload image using event --> filechoose -->setfiles
test("File Upload using event", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")
    // create promise --> filechoose is the event to select
    const uploadFile = page.waitForEvent('filechooser')
    // do the action
    await page.locator("//input[@id='file-upload']").click()
    // resolve the promise
    const uploadImage = await uploadFile
    // give file path to upload image
    await uploadImage.setFiles("./TestData/Sowmiya.jpeg")
})

//scenario3 to download image using event --> download --> saveas
test("File Download using event", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/download")
    // create promise --> download is the event to select
    const downloadFile = page.waitForEvent('download')
    // do the action
    await page.locator("//a[text()='megadyneBladeHero.jpg']").click()
    // resolve the promise
    const downloadImage = await downloadFile
    // give file path to download image + suggested filename download as same file name in browser and save
    await downloadImage.saveAs('./TestData/'+downloadImage.suggestedFilename())
})