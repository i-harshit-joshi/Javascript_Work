const passwordBox = document.querySelector("#password")
const button = document.querySelector("#button")
const copy = document.querySelector("#copy");


function copyPassword () {

    passwordBox.select();
    document.execCommand("copy");
}

button.addEventListener("click" , () => {

    let size = 8;

    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialChar ="!$%&()*+,-./:;<=>?@[]^_`{|}~";

    let allchar = upperCase + lowerCase + numbers + specialChar;
    
    let password = "";

    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += specialChar[Math.floor(Math.random() * specialChar.length)]




     while(size > password.length){

        password += allchar[Math.floor(Math.random() *allchar.length)];

     }

     passwordBox.value = password    
})

copy.addEventListener("click" , copyPassword);