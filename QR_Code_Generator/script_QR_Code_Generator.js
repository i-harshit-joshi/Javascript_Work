const btn = document.querySelector(".button");
let display = document.querySelector(".container input");
let qrImg = document.querySelector("#qrimg")
let imagBox = document.querySelector("#imgBox")

btn.addEventListener("click" , ()=>{

    if(display.value===""){

        display.placeholder = "Please enter text or URL in the text field!"
        setTimeout(()=>{
            location.reload();
        },2500)
        display.classList.add("error");
        btn.classList.remove("button");
        btn.classList.add("errorbtn")
        btn.innerText = "Please Enter valid Information";
        
    }
    
    else{
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${display.value}`

    imagBox.classList.add("show-img");
    btn.innerText = "Generate Another QR"
    btn.classList.add("newbtn");
    btn.classList.remove("")
    btn.addEventListener("click" , ()=>{

        
        location.reload()
    })
    }
})