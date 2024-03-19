const questionElement = document.querySelector("#question");
const ansBtn = document.querySelector("#ans-button");
const nextBtn = document.querySelector("#next-btn");

const questions = [

        {
            question:"Which is The largest animal in the world" ,

            answer:[

                {text:"shark" , correct:false},

                {text:"Blue Whale" , correct:true},

                {text:"Elephant" , correct:false},

                {text:"Girrafe" , correct:false},


            ]

        },

        {

            question:"Which is The smallest country in the world" ,

            answer:[

                {text:"Vatican City" , correct:true},

                {text:"San Marino" , correct:false},

                {text:"Nauru" , correct:false},

                {text:"Liechtenstein" , correct:false},
            ]
            
        },

        {

            question:"Which is The largest desert in the world" ,

            answer:[

                {text:"Gobi" , correct:false},

                {text:"Kalahari" , correct:false},

                {text:"Sahara" , correct:false},

                {text:"Antartica" , correct:true},


            ]
        },

        {

            question:"Which is the smallest continent in the world" ,

            answer:[

                {text:"Asia" , correct:false},

                {text:"Australia" , correct:true},

                {text:"Artic" , correct:false},

                {text:"Africa" , correct:false},

            ]
        }
];

let currQuesIndex = 0;
let score = 0;

function startQuiz () {

    currQuesIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQues();
}

function showQues () {

    resetState();

    let currQuestion = questions[currQuesIndex];

    let quesNum = currQuesIndex + 1;

    questionElement.innerHTML = quesNum + ". " + currQuestion.question; 

    currQuestion.answer.forEach(answer => { // for each

        const button = document.createElement("button");

        button.innerHTML = answer.text;

        button.classList.add("btn");

        ansBtn.appendChild(button);

        if(answer.correct){

            button.dataset.correct = answer.correct; //dataset
        }

        button.addEventListener("click" ,selectAnswer)
    });

}


function resetState() {

    nextBtn.style.display = "none";

    while(ansBtn.firstChild){

        ansBtn.removeChild(ansBtn.firstChild); // loop
 
    }
}




function selectAnswer (e){ // selectanswer

    const selectedBtn = e.target;

    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){

        selectedBtn.classList.add("correct");
        score++;
    }

    else{

        selectedBtn.classList.add("incorrect");
    }

    Array.from(ansBtn.children).forEach(button => { //array from

        if(button.dataset.correct === "true"){

            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextBtn.style.display = "block";
}


function showScore() {

    resetState();

    questionElement.innerHTML = `Your Score ${score} out of ${questions.length}!`;

    nextBtn.innerHTML = "Play Again";

    nextBtn.style.display = "block"
}


function handlenextBtn(){

    currQuesIndex++;
    
    if(currQuesIndex < questions.length){

        showQues();
    }

    else {

        showScore();
    }

} 

nextBtn.addEventListener("click" , () => {

    if(currQuesIndex < questions.length){

        handlenextBtn();
    }    

    else {

        startQuiz();
    }
})


startQuiz();