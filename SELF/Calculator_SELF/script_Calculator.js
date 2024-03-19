const input = document.querySelector(".input");
const AC = document.querySelector("#AC");
const couns = document.querySelector("#couns");
const percent = document.querySelector("#percent");
const divide = document.querySelector("#divide");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const minus = document.querySelector("#minus");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const plus = document.querySelector("#plus");
const zero = document.querySelector("#zero");
const dot = document.querySelector("#dot");
const erase = document.querySelector("#xx");
const equal = document.querySelector("#equal");

one.addEventListener("click" , ()=>{

    input.value += "1";
    
})

two.addEventListener("click" , ()=>{

    input.value += "2";
    
})

three.addEventListener("click" , ()=>{

    input.value += "3";
    
})

four.addEventListener("click" , ()=>{

    input.value += "4";
    
})

five.addEventListener("click" , ()=>{

    input.value += "5";
    
})

six.addEventListener("click" , ()=>{

    input.value += "6";
    
})

seven.addEventListener("click" , ()=>{

    input.value += "7";
    
})

eight.addEventListener("click" , ()=>{

    input.value += "8";
    
})

nine.addEventListener("click" , ()=>{

    input.value += "9";
    
})

zero.addEventListener("click" , ()=>{

    input.value += "0";
    
})

plus.addEventListener("click" , ()=>{

    input.value += "+";
    
})

minus.addEventListener("click" , ()=>{

    input.value += "-";
    
})

divide.addEventListener("click" , ()=>{

    input.value += "/";
    
})

percent.addEventListener("click" , ()=>{

    input.value += "%";
    
})

dot.addEventListener("click" , ()=>{

    input.value += ".";
    
})

multiply.addEventListener("click" , ()=>{

    input.value += "*";
    
})


AC.addEventListener("click" , ()=>{

    input.value = "";
    
})

erase.addEventListener("click" , ()=>{

    input.value = input.value.toString().slice(0,-1);
    
})

couns.addEventListener("click" , ()=>{

    if(input.value === ""){
        
        input.value = "(";
    }
    else {

        input.value += ")";
    }
})

equal.addEventListener("click" , ()=>{

    input.value = eval(input.value)
    
})


