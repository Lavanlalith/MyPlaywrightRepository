// Print odd numbers usinf function
console.log("Print Odd Numbers between 1 and 25 :");
function printOddNumbers() {

    for(let i = 1; i <=25; i+=2)
    {
        if(i % 2 !== 0)
        {
            console.log(i);            
        }
    }
}

printOddNumbers();
