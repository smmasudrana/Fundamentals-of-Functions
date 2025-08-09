//with strings
function evenSizedSting(str){
    console.log(str);
}

evenSizedSting('Dhaka');

//-----------------------------
function evenSizedSting2(str){
    const size = str.length;
    console.log(str, size);
}

evenSizedSting2('Dhaka');
evenSizedSting2('Faka');


//even or odd check with strings -----------------------------
function evenSizedSting2(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 ===2){
        console.log('it is even size')
    }
    else{
        console.log('it is a odd size')
    }
}

evenSizedSting2('Dhaka');
evenSizedSting2('Faka');


//with boolean ---------------------------------
function doubleOrTriple(number, doDouble){
    if(doDouble===true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(5, true));
console.log(doubleOrTriple(5, false));


//with array--------------------------
function numberOfElements(number){
    const len = number.length;
    return len;
}

console.log(numberOfElements([12, 52, 82, 42, 52, 85]));