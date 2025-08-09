// * Objective: write a function to give me the sum of all numbers in an array
// * step-1: declare a function
// * step-2: call check whether the function  is called properly
// * step-3: set a parameter(s)
// * step-4: pas the parameter(s), check whether parameter is passed in a proper format
// *step-5: do the function task (step by step)

// function sumOfNumbers(numbers){
//     let jogfol=0;
//     for(const number of numbers){
//         console.log(number);
//         jogfol =jogfol + number;
//     }
//     return jogfol;
// }

// const numbs = [12, 52, 98, 96]
// const sum =sumOfNumbers(numbs);
// console.log('sum of numbers', sum);

//---------------------------------------

function foodPrice(prices){
    console.log(prices);
    let sum= 0 ;
    for(const price of prices){
        console.log(price);
        sum=sum + price;
    }
    return sum;
}


const fprices = [15, 66, 98, 33, 96]
const allfprices= foodPrice(fprices);
console.log(allfprices);




