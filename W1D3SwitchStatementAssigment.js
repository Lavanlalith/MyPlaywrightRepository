/*Assignment Details:
Write a JavaScript function that evaluates a student's score and returns their grade 
using a switch statement to assess score ranges.
Assignment Requirements:
1. Create a function that takes a student's score as a parameter.
2. Declare and initialize the variable.
3. Use `switch` statement inside the function.
4. Return the corresponding grade.
5. Call the function and print the result. */

function checkGrade(score)
{
    let marks = score;
    switch(true)
    {
        case marks>=90:
        return ("A grade");
        break;

        case marks>=80:
        return ("B grade");

        case marks>=50:
        return ("C grade");

        default:
            return ("Fail");
            
    }
}

console.log(checkGrade(90));
