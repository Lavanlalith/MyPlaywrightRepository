//Assignment - Find the duplicate elements from the array
let arr = [1,2,3,2,4,5,1,4,9,7];

let n =arr.length;

let result=[];

console.log("Print duplicate elements");

for(let  i=0; i<n; i++)
{
    for(let  j=i+1;j<n; j++)
        {
            if(arr[i]==arr[j])
            {
               // console.log(`Duplicate eleements are: ${arr[i]} at index ${j}`);
               result.push(arr[i]);
                break;
            }
        }
    
}
console.log(result);

/*let arr: number[] = [1, 2, 3, 2, 4, 5, 1, 4, 9, 7];
 let newArr: number[] = []; 
 for (let i = 0; i < arr.length; i++)
     { 
        let isDuplicate = false; 
        for (let j = 0; j < newArr.length; j++) 
            { 
                if (arr[i] === newArr[j])
                     { 
                        isDuplicate = true;
                         break;
                         } 
                        
                    } 
                    if (!isDuplicate) 
                        { 
                            newArr.push(arr[i]); 
                        } 
                    } 
                    
                    console.log(newArr); */