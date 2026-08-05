// Const variable as global and var is global scope and used inside the function and if block
//print undefined
/* const browserVersion = 'Chrome';

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
const browserVersion = 'Chrome';

function getBrowserVersion()
{
    let safariBrowser = 'Safari';
    if(browserVersion == "Chrome")
    {
        let browserVersion = "Chrome 120";
        console.log("Inside if block with var:", browserVersion);
    }
    console.log("Outside if block with var:", browserVersion);
    console.log("Inside the function and outside the block", safariBrowser);

}

getBrowserVersion(); 

