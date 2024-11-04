const num1 = document.querySelector('#inputInterger1')
const num2 = document.querySelector('#inputInterger2')
const answer = document.querySelector('#result')

//Buttons
const Sumbtn = document.querySelector('.sumbtn')
const Subbtn = document.querySelector('.subbtn')
const Mulbtn = document.querySelector('.mulbtn')
const Divbtn = document.querySelector('.divbtn')
const Clear = document.querySelector('.clear')

//Functions
function Sum(x, y){
    let sumxy = x + y
    return sumxy
}

function Sub(x, y){
    let subxy = x - y
    return subxy
}

function Mul(x, y){
    let mulxy = x * y
    return mulxy
}

function Div(x, y){
    let divxy = x / y
    return divxy
}

//Button Funtion
Sumbtn.addEventListener("click", function(){
    const Sumans = Sum(+num1.value, +num2.value);
    result.innerHTML = Sumans;
})
    
Subbtn.addEventListener("click", function(){
    const Subans = Sub(+num1.value, +num2.value);
    result.innerHTML = Subans;
})

Mulbtn.addEventListener("click", function(){
    const Mulans = Mul(+num1.value, +num2.value);
    result.innerHTML = Mulans;
})

Divbtn.addEventListener("click", function(){
    const Divans = Div(+num1.value, +num2.value); 
    result.innerHTML = Divans;
})  

Divbtn.addEventListener("click", function(){
    const Divans = Div(+num1.value, +num2.value); 
    result.innerHTML = Divans;
}) 

Clear.addEventListener("click", function(){
    result.innerHTML = " ";
})