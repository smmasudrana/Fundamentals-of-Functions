function tenTimes (number){
    const result = number *10;
    return result;
}

tenTimes(5);

const output = tenTimes(5);        //it also possible variable value call with function name.
console.log(output);


//type 2
function cutHalf (number){
    const half = number / 2;
    return half;
}

cutHalf(50);

const divided = cutHalf(50);
console.log(divided);



//-----------------------------------------
function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const bill =add(5, 80);
console.log(bill);


//---------------------------------------
function doMath (num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = num1 * num2;
    const result =multiply/2;
    return result;
}

const result =doMath(10, 5);
console.log(result);
