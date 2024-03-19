const URL = "https://api.quotable.io/random";
const quote = document.querySelector("blockquote");
const author = document.querySelector("span");
const button = document.querySelector("button");
const sharebtn = document.querySelector("#share");

// let generate = async () => {

//     let response = await fetch(URL);

//     data = await response.json();
 
//     quote.innerText = data.content;

//     author.innerText = data.author; 
// }

// button.addEventListener("click" , generate);

// sharebtn.addEventListener("click", ()=>{

//     window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + "by-----" + author.innerText , "tweetwindow" , width=600 ,height=300);
// })

function generate () {

    fetch(URL)

    .then((response) => {

      return response.json()
    })

    .then((data) => {

        
        quote.innerText = data.content;
        author.innerText = data.author;
    })
}   

button.addEventListener("click" , generate);

sharebtn.addEventListener("click", ()=>{

    window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + "by-----" + author.innerText , "tweetwindow" , width=600 ,height=300);
     
})
    