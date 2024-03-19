const password = document.querySelector("#password")
const eyeIcon = document.querySelector("#eyeicon")


eyeIcon.onclick = function(){

    if(password.type==="password" || password.value===""){
    
        eyeIcon.src = "Images/eye-close.png";
        password.placeholder = "Please Enter Your Password !"
        setTimeout(()=>{
            location.reload();
        },1250)
        password.classList.add("error");
        
    }
    else if(password.type==="password"){
        eyeIcon.src = "Images/eye-open.png";
        password.type = "text"
    }
    else if(password.type==="text"){

        eyeIcon.src = "Images/eye-close.png";
        password.type = "password"
    }
}

