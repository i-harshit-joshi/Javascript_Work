let main = document.querySelector(".main input")
let btn = document.querySelector("button")


btn.addEventListener("click", () => {
  
   let randomLetter = '';

    for (let i = 0; i < 1; i++) { // You want to generate one random letter
        
         const randomCharCode = Math.floor(Math.random() * 26) + 97; // Generate random char code

         randomLetter = String.fromCharCode(randomCharCode); // Convert char code to letter

         console.log("Alpha = " ,randomLetter);
    }

    // genrating Special Characters

    let randomChar = ["@" , "#" , "$" , "%"] ; 

     const randomCode = Math.floor(Math.random() * randomChar.length)

     randomAns = randomChar[randomCode] ;

     console.log("Char = " , randomAns);

// generating Numbers 

     let randomNum = Math.floor(Math.random() * 9)

      console.log("Num = ", randomNum);
   
   
      const password = randomLetter + randomAns + randomNum;
       

      console.log(password + password + password + password);
   
    
      main.value = password + password + password + password;
});


