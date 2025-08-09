function doubleIt(number){
    const doubled = number * 2;
    console.log(number, doubled);
}

doubleIt(15);
console.log('----------------------');
doubleIt(50);
console.log('-----------------');
doubleIt(133);


//perameter | arguments--- declare with variable
const money =500;
doubleIt(money);
const foodPrice =80;
doubleIt(foodPrice);

//difference
function difference (num1, num2){
    const diff = num1 - num2;
    console.log(num1, num2, 'difference is', diff)
}

const fatherAge = 65;
const myAge = 25;

difference(fatherAge, myAge);