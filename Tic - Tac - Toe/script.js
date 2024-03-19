let boxes = document.querySelectorAll(".Box");
let reset = document.querySelector("#reset");
let start = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // used to know the turn of which player is being played

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        if (turn0 === true) {
            Box.innerText = "O";
            turn0 = false;
        } else {
            Box.innerText = "X"; 
            turn0 = true;
        }
             Box.disabled = true;

             checkWinner();
             
    });
});

const resetgame = () => {

    turn0 === true;
    enableboxes();
    msgcontainer.classList.add("hide");
};  

const disableboxes = () => {
    for(let box of boxes) {

        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes) {

        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {

    msg.innerText = `Congratulations ${winner} is the Winner !`
    msgcontainer.classList.remove("hide");
    disableboxes();
    }; 

   
const checkWinner = () => {

    for(let patterns of winningPattern) {

           let pos1val =  boxes[patterns[0]].innerText ; 
           let pos2val =  boxes[patterns[1]].innerText ; 
           let pos3val =  boxes[patterns[2]].innerText ;

           if(pos1val != "" && pos2val != "" && pos3val != ""){

                if(pos1val === pos2val && pos2val === pos3val){

                        console.log("winner" , pos1val);
                        showWinner(pos1val);
                }
           }
             
    }
} 

newgame.addEventListener("click" , resetgame);
reset.addEventListener("click" , resetgame);