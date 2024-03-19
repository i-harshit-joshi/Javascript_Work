const base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"

const dropDown = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const fromCurr = document.querySelectorAll(".select-container select")[0]

const toCurr = document.querySelectorAll(".select-container select")[1]

const message = document.querySelector(".msg");


for(let select of dropDown) {

    for(let currcode in countryList) {
        
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        
        if (select.name === "fromusd" && currcode === "USD" )  
        
        {
            newOption.selected = "selected";

        } else if (select.name === "toinr" && currcode === "INR") 
        
        {
            newOption.selected = "selected";
        }

        select.append(newOption);

        select.addEventListener("change" , (evt) => {

            updateFlag(evt.target);
        });

    }
}

// Functions




const updateFlag = (element) => {

    let currcode = element.value
    let countrycode = countryList[currcode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc
}


    
  const updateExachangeRate = async () => {

    let amount = document.querySelector(".amount input");
    let amtValue = amount.value ;

    if (amtValue === "" || amtValue < 1) {

        amtValue = 1;
        amount.value = "1";
    }

    
const URL = `${base_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`

let response = await fetch(URL);

let value = await response.json();

let rate = value[toCurr.value.toLowerCase()];

let finalAmt = amtValue * rate ;

let realAmt = Math.floor(finalAmt);

message.innerText = `${amtValue} ${fromCurr.value} = ${realAmt} ${toCurr.value}` 


}


btn.addEventListener("click" ,  (evt) => {

    //console.log("clicked");

    evt.preventDefault();
    updateExachangeRate();

});


window.addEventListener ("load" , () => {

    updateExachangeRate();
})