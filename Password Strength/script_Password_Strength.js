const inputPass = document.querySelector("#password")
const msg = document.querySelector("#message") 
const strength = document.querySelector("#strength")

inputPass.addEventListener("input" , ()=>{


    if(inputPass.value.length>0){
        msg.style.display = "block"
    }
    else{
        msg.style.display = "none"
    }
    if(inputPass.value.length<4){
        strength.innerHTML = "Weak"
        inputPass.style.borderColor = "red"
        msg.style.color = "red" 
    }
    else if(inputPass.value.length>=4 && inputPass.value.length<=8){
        strength.innerHTML = "Medium"
        inputPass.style.borderColor = "yellow"
        msg.style.color = "yellow"
    }
    else if(inputPass.value.length>=8){
        strength.innerHTML = "Strong"
        inputPass.style.borderColor = "green"
        msg.style.color = "green"
    }
    if(inputPass.value.length===0){
        msg.style.display="none"
        inputPass.style.borderColor = "#ccc"
    }
})