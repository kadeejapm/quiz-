const questions = [
    {
        question : "what  HTML stands for?",
        answers:[
            { text: "hyper link mark-up language", correct: false},
            { text: "hyper text mark-up language", correct: true},
            { text: "higher text  mark-up language", correct: false},

        ]
    },
    {
        question : "what is javascript?",
        answers:[
            { text: " A programming language", correct: true},
            { text: " A hyper text mark-up language", correct: false},
            { text: " A scripting language", correct: false},

        ]

    },
    {
        question : "What command is used to start the react local development server?",
        answers:[
            { text: "npm build", correct: false},
            { text: "npm run dev", correct: true},
            { text: "npm start", correct: false},

        ]
    },
    {
        question : "How many components are there in react?",
        answers:[
            { text: "3", correct: false},
            { text: "2", correct: true},
            { text: "4", correct: false},

        ]
    },
    {
        question : "JavaScript comments can be used to explain?",
        answers:[
            { text: "JavaScript code", correct: true},
            { text: "HTML code", correct: false},
            { text: "CSS code", correct: false},

        ]
    },
    {
        question : " background color is used for?",
        answers:[
            { text: "changing background-color of element", correct: true},
            { text: "changing background-color of text", correct: false},
            { text: "changing background-color of images", correct: false},

        ]
    },
  
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionindex = 0;
let score = 0;

function startQuiz(){
    currentQuestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){

    resetState();
    let currentQuestion = questions[currentQuestionindex];
    let questionNo = currentQuestionindex +1;
    questionElement.innerHTML = questionNo +". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
           button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){

    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }

}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display ="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}



function handleNextButton (){
    currentQuestionindex++;
    if(currentQuestionindex <questions.length){
        showQuestion();

    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionindex < questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
})

startQuiz();