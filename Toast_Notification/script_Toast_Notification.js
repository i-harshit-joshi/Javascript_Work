let buttons = document.querySelectorAll(".buttons button");
let toastBox = document.querySelector("#toastbox");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        
        let toast = document.createElement("div");
        toast.classList.add("toast");
        toastBox.appendChild(toast);

        if(button.id === "success"){
            toast.innerHTML = "<i class='fa-solid fa-circle-check'></i> success";
        }
        else if(button.id === "error"){
            toast.innerHTML = "<i class='fa-solid fa-circle-xmark' class='errormsg'></i> Please fix the error"
            toast.classList.add("errormsg")
        }
        else if(button.id === "invalid"){
            toast.innerHTML = "<i class='fa-solid fa-circle-exclamation' class='invalidmsg'></i> Invalid"
            toast.classList.add("invalidmsg")
        }

        setTimeout(()=>{

            toast.remove();
        },6000)

        
    });
});

