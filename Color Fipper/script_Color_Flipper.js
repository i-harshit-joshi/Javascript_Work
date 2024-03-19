const btn = document.querySelector("#Button") 
const bodyTag = document.body

let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","B","C","D","E","F"];

function mix () {

   let randomIdx =  Math.floor(Math.random() * hex.length);
   return hex[randomIdx];
}

btn.addEventListener("click" , ()=>{
   let color = "#" ;
   for(i=0;i<6;i++){
      color+=mix();
      console.log(color);
   }
   bodyTag.style.backgroundColor = color;
});

