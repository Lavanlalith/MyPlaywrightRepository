//Assignment 
//Write a Javascript function named printOddNumbers that prints odd numbers between 1 and 25

// Print odd numbers using function and for loop
/*
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

printOddNumbers(); */

// Using while loop
console.log("Print Odd Numbers:");

let range = 25;
function printOddNumbers(){
    let i = 1;
    while(i<=range)
    {
        if(i%2!==0){
        console.log(i);
        }
        i++;
    }
    
}
printOddNumbers();


