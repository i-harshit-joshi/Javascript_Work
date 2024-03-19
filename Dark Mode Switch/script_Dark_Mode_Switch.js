const toggleBtn = document.querySelector("#toggleBtn")
const btn = document.querySelector(".whiteClass")
const bodyTag = document.body
toggleBtn.addEventListener("click" , ()=>{

    if(bodyTag.classList.contains("dark")){
       
        bodyTag.classList.remove("dark") 
        btn.classList.add("whiteClass")
        btn.classList.remove("onclick")

        toggleBtn.textContent = "Click me to get dark"
        
    }
    else{
       
        bodyTag.classList.add("dark")
        btn.classList.add("onclick")
        btn.classList.remove("whiteClass")

        toggleBtn.textContent = "we got dark!"
    }
    
});