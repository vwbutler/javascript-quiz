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

// var interval = setInterval();

var startDiv = document.getElementById("start");
var startQuizBtn = document.querySelector(".big-button");
var introEl = document.querySelector(".intro");
var centerEl = document.querySelector(".center");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
// var choiceA = document.getElementById("btn0");
// var choiceB = document.getElementById("btn1");
// var choiceC = document.getElementById("btn2");
// var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

// question index is used to go through the question choices one by one. Counting starts at 0 in javascript. 0 is the first question index
var questionNumber = 0;

let correctAnswer;

function displayQuiz() {
  // this puts questions on the page
  questionTitle = document.createElement("p");
  questionTitle.innerHTML = questions[questionNumber].question;
  questionDiv.appendChild(questionTitle);

  correctAnswer = questions[questionNumber].answer;

  // this puts the answer choices on the page
  var choicesEl = questions[questionNumber].choices;
  for (let i = 0; i < choicesEl.length; i++) {
    // because there are 4 answer choices per question, we need to loop through them to do something with t hem
    var choicesBtn = document.createElement("button"); // make a button
    choicesBtn.innerHTML = choicesEl[i]; // put the text of the answer choice into the button
    choicesBtn.setAttribute("class", "choices-btn"); // this makes each answer look like a button
    questionDiv.appendChild(choicesBtn);
    choicesBtn.onclick = selectChoice; // this makes the button do something when you click
  }
}

var score = 0;

function selectChoice(event) {
  var element = event.target;
  var userAnswer = element.innerHTML;
  console.log("My Answer: ", userAnswer);
  console.log("Correct Answer: ", correctAnswer);
  // here, we determine if the person chose the correct answer
  if (userAnswer === correctAnswer) {
    console.log("correct!");
    // adds 1 to score
    score += 1;
  } else {
    console.log("incorrect");
    // lose time (5 seconds)
    timeleft = timeleft - 5;
  }

  // go to next question
  questionNumber++;

  // clears exisiting questions and answers from the page
  questionDiv.textContent = "";

  displayQuiz();
}

//example
// choiceA.addEventListener("click", correctAnswer);
// choiceB.addEventListener("click", correctAnswer);
//display function
//include wording

var timeleft = 40;
function showCountdown() {
  var downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Game Over";
    } else {
      document.getElementById("countdown").innerHTML =
        " Time remaining:" + timeleft + " seconds";
    }
    timeleft -= 1;
  }, 1000);
}

// on the intro screen, when you click the "start quiz" button then the game starts
startQuizBtn.addEventListener("click", function () {
  introEl.setAttribute("class", "hide");
  centerEl.setAttribute("class", "hide");
  questionDiv.classList.remove("hide");
  showCountdown(); // this starts the timer
  displayQuiz(); // this puts questions on the page
});

var updatePlayerScore = function () {
  var$();
};
