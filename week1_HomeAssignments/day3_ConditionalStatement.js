function launchBrowser(browser){
    if(browser ==="chrome"){
        console.log("Chrome Browser launched successfully!")
    }
    else{
        console.log("FireFox Browser launched successfully!")
    }
}
function runTests(testType){
 switch(testType)
 {
    case "smoke":
        console.log("Smoke Test is Executing")
        break
    case "sanity":
        console.log("Sanity Test is Executing")
        break
    case "regression":
        console.log("Regression Test is Executing")  
        break
    default :
        console.log("Flaky Test is executing")
 }
}
let browser="chrome", testType="regression"
launchBrowser(browser)
runTests(testType)
