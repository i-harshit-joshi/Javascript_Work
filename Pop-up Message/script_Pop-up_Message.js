const btn = document.querySelector(".btn")
const closeBtn = document.querySelector("#closeBtn")
const popup = document.querySelector("#pop-up")

btn.addEventListener("click" , ()=>{

    popup.classList.add("open-popup");
})

closeBtn.addEventListener("click" , ()=>{
    
    popup.classList.remove("open-popup");
})