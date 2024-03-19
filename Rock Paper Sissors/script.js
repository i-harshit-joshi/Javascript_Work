let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const myScore = document.querySelector("#userscore");
const vsScore = document.querySelector("#compscore");

// FUNCTIONS

const genCompchoice = () => {

    const options = ["rock","paper","scissors"]

    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];

}

const showWinner = (userWin , userChoice , compChoice) => {

     if(userWin === true){

        //console.log(`You Won ${userChoice} beats ${compChoice}`);
        userScore++;
        myScore.innerText = userScore; 

        msg.innerText = `You Won ! ${userChoice} beats ${compChoice}`;

        msg.style.backgroundColor = "green";

        msg.style.color = "white";

       

     }

     else {

       // console.log(`You Lost ${compChoice} beats ${userChoice}`);

        compScore++;
        vsScore.innerText = compScore;
        
        msg.innerText = `You Lost ! ${compChoice} beats ${userChoice}`;

        msg.style.backgroundColor = "red";

        msg.style.color = "white";

        
     }
};

const draw = () => {

    console.log("Game Was Draw");

    msg.innerText = "Game Was Draw";

    msg.style.backgroundColor = "yellow";

    msg.style.color = "black";
};


const playGame = (userChoice) => {

    console.log("user-choice = " , userChoice)

    const compChoice = genCompchoice();

    console.log("comp-choice = " , compChoice);

    if(userChoice === compChoice){

        draw();
    }
    else {

        let userWin = true;

        if(userChoice ==="rock"){
            //sciccors , paper

            userWin = compChoice === "paper" ? false : true; 
        }

        else if(userChoice === "paper"){
            //rock , sciccors
            userWin = compChoice === "scissors" ? false : true;
        }

        else{
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , userChoice , compChoice);

    }


};

choices.forEach((choice) => {

    
    choice.addEventListener("click" , () =>{
        
            const userChoice = choice.getAttribute("id"); // used to get that what id has user clicked on 

            playGame(userChoice);
    
    });

});