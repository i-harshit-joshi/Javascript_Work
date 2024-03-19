const btn = document.querySelector("#button")

const bodyChange = document.querySelector("#bg")

const input = document.querySelector(".content input") 

const h1 = document.querySelector("h1");

const reset = document.querySelector("#reset")

const text = document.querySelector(".content p");

    btn.addEventListener("click" , () =>{

        if(input.value === "" || document.body.style.backgroundColor === "#EBEBEB") {

            text.textContent = "Please Add # before the Color - Code."

        }else {

          document.body.style.backgroundColor = input.value
          text.textContent = `Background color has been changed to ${input.value}.`;
          input.value = "";
          
        }
        
    })
 
    reset.addEventListener("click" , () =>{

      location.reload();
      
    });