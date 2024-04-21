const password = document.querySelector("#password")
const eyeIcon = document.querySelector("#eyeicon")


eyeIcon.addEventListener("click" , () => {

    if(password.value===""){
    
        
        password.placeholder = "Please Enter Your Password !"
        setTimeout(()=>{
            location.reload();
        },1250)
        password.classList.add("error");
        
        
    }
    
    else if(password.type=="password"){
        eyeIcon.src = "Images/eye-open.png";
        password.type = "text"
       
    }
    else
    {

        eyeIcon.src = "Images/eye-close.png";
        password.type = "password"
       
    }
});

