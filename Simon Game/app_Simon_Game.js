let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn")
// gameSeq and userSeq are the array for the sequence of the 4 cards value 
let gameSeq = [];
let userSeq = [];
//started is the variable to check if the game is started or not
let started = false;
//level variable keeps the increament of level 
let level = 0;

let btns = ["yellow","red","purple","green"];

document.addEventListener("keypress",gameStart);

//Functions

//Function to Start the game
function gameStart() {
    if(started == false){
        started = true;
        levelUp();
    }
}
//Function for Level up
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random() * 3);
    let randColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}
//Function for flashing the card(Button)
function btnFlash(btn) {
    btn.classList.add("flash");
    
    setTimeout(function() {
        btn.classList.remove("flash")
    },500)
}
//Function for flashing the card which are clicked by the user
function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(function() {
        btn.classList.remove("user-flash")
    },200)
}
//Function for the flashing event of the card
function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
//Function To check the sequence of the user
function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else {
            h2.innerHTML = `Game Over ! <br>Your score was ${level}<br>Press any key to start`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(()=>{
                document.querySelector("body").style.backgroundColor = "white";
            },150)
            document.addEventListener("keypress",resetGame);
            highScore();
    }
}
//Loop to iterate over all four cards
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
//Function to restart the game
function resetGame() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
    levelUp();
    
}
//Function for the High Score
function highScore() {
    let hiScore = document.querySelector(".high-score");
    let upScore = hiScore.innerText = `High Score: ${gameSeq.length}`;
    if(upScore > gameSeq.length){
        hiScore.innerText = gameSeq.length;
    }
} 