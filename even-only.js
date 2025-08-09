/**
 * create function that will return only the even numbers.
 * return the sum of even numbers.
 */

function onlyEvenNumber(numbers){
    console.log(numbers);
    let even=[];
    for(const number of numbers){
        if(number % 2 ===0){
            console.log(number);
            even.push(number);
        }
    }
    return even;
}

const numbs =[64, 69, 34, 33, 65, 97,]
const allNumbers= onlyEvenNumber(numbs);
console.log(allNumbers);


//sum of evennumbers
function sumOfEvenNumbers(numbers){
    console.log(numbers);
    let sumev = 0;
    for(const number of numbers){
        if(number % 2 ===0){
            console.log(number);
            sumev = sumev + number;
        }
    }
    return sumev;

}


const evnum=[61, 64, 98, 36, 99, 31, 33]
const allevnum= sumOfEvenNumbers(evnum);
console.log(allevnum);


