/*Assignment
Declare a const name as browserVersion (global)
Assign value as Chrome
Create a function by name getBrowserVersion
Create if condition inside function to check if brwoser is chrome, then
Dclare a local variable (browserVersion) and print that variable inside function (outside block)
call that function from the javascript
*/

// Const variable as global and var is global scope and used inside the function and if block
//print undefined
/* const browserVersion = 'Chrome'; //global variable

function getBrowserVersion()
{
    if(browserVersion == "Chrome")
    {
        var browserVersion = "Chrome 120";
        console.log("Inside if block with var:", browserVersion);
    }
    console.log("Outside if block with var:", browserVersion);
}

getBrowserVersion(); 
Output - Undefined
*/

// Const variable as global and let is global scope and used inside the function and if block
//print undefined
const browserVersion = 'Chrome'; // global variable

function getBrowserVersion()
{
    let safariBrowser = 'Safari'; // local variable inside the function
    if(browserVersion == "Chrome")
    {
        let browserVersion = "Chrome 120"; //local variable inside function and block
        console.log("Inside if block with var:", browserVersion);
    }
    console.log("Outside if block with var:", browserVersion);
    console.log("Inside the function and outside the block", safariBrowser);

}

getBrowserVersion(); 

