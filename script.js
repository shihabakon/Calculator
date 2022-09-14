// script for Add!
document.getElementById("btn-add").addEventListener("click", function(){

    const number1 = document.getElementById("input-1");
    const numbervarible1 = parseFloat(number1.value);
    
    const number2 = document.getElementById("input-2");
    const numbervarible2 = parseFloat(number2.value);

    const result = (numbervarible1 + numbervarible2);
    const resultvalue = document.getElementById("span-0");
    resultvalue.innerText = result;
})

// script for Subtract!
document.getElementById("btn-subtract").addEventListener("click", function(){

    const number1 = document.getElementById("input-1");
    const numbervarible1 = parseFloat(number1.value);

    const number2 = document.getElementById("input-2");
    const numbervarible2 = parseFloat(number2.value);

    const result = numbervarible1 - numbervarible2;
    const resultvalue = document.getElementById("span-0");
    resultvalue.innerText = result;
})

// script for Multiply!
document.getElementById("btn-multiply").addEventListener("click", function(){

    const number1 = document.getElementById("input-1");
    const numbervarible1 = parseFloat(number1.value);

    const number2 = document.getElementById("input-2");
    const numbervarible2 = parseFloat(number2.value);

    const result = numbervarible1 * numbervarible2;
    const resultvalue = document.getElementById("span-0");
    resultvalue.innerText = result;
})

// script for Divide!
document.getElementById("btn-divide").addEventListener("click", function(){

    const number1 = document.getElementById("input-1");
    const numbervarible1 = parseFloat(number1.value);

    const number2 = document.getElementById("input-2");
    const numbervarible2 = parseFloat(number2.value);

    const result = numbervarible1 / numbervarible2;
    const resultvalue = document.getElementById("span-0");
    resultvalue.innerText = result;
})