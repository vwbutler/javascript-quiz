//question bank//

const questions = [
  {
    question: "1. What does DOM stand for?",
    choices: [
      "a. Document Object Model",
      "b. Documentation Orientation Management",
      "c. Database Oriented Modeling",
      "d. Distinct Optional Modeling",
    ],
    answer: "a. Document Object Model",
  },
  {
    question:
      "2. What is the correct syntax for declaring a function in JavaScript?",
    choices: [
      "a. function = myFunction() {}",
      "b. function myFunction() {}",
      "c. myFunction = function() {}",
      "d. myFunction() = function {}]",
    ],
    answer: "b. function myFunction() {}",
  },
];

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var questionIndex = 0;

function correctAnswer() {
  console.log("click");
}

function displayQuiz() {
  questionTitle.innerHTML = questions[questionIndex].question;
  choiceA.innerHTML = questions[questionIndex].choices[0];
  choiceB.innerHTML = questions[questionIndex].choices[1];
  choiceC.innerHTML = questions[questionIndex].choices[2];
  choiceD.innerHTML = questions[questionIndex].choices[3];
  answerCheck.innerHTML = questions[questionIndex].answer;
  console.log(questions[questionIndex].question);
  console.log(questions[questionIndex].choices);
  console.log(questions[questionIndex].answer);
}

displayQuiz();

//example
choiceA.addEventListener("click", correctAnswer);
choiceB.addEventListener("click", correctAnswer);
//display function
//include wording
