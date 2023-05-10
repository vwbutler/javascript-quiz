//high score

var highScore = JSON.parse(localStorage.getItem("high-score")) || {
  userInitials: " ",
  score: " ",
};

document.querySelector(".high-score").innerHTML =
  highScore.userInitials + " " + highScore.score;

// document.getElementById("high-score-value").textContent =
//   highScore.userInitials !== ""
//     ? `${highScore.userInitials}: ${highScore.score}`
//     : "";

// // Get the high score from local storage, or initialize it to 0 if it doesn't exist
// let highScore = localStorage.getItem("highScore");
// if (highScore === null) {
//   highScore = 0;
//   localStorage.setItem("highScore", highScore);
// }

// // Display the high score on the page
// const highScoreEl = document.querySelector(".high-score");
// highScoreEl.textContent = `Last Score: ${high - score}`;

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
  {
    question:
      "3. Which of the following is considered a best practice for variable naming in JavaScript?",
    choices: [
      "a. Using single-letter variable names for brevity",
      "b. Prefixing variable names with an underscore (_)",
      "c. Using camelCase for multi-word variable names",
      "d. Capitalizing the first letter of variable names",
    ],
    answer: "c. Using camelCase for multi-word variable names",
  },
  {
    question:
      "4. Which of the following statements is true regarding the use of global variables in JavaScript?",
    choices: [
      "a. Global variables should be used extensively to simplify code readability.",
      "b. It is recommended to avoid using global variables whenever possible.",
      "c. Global variables are automatically scoped within the functions they are used in.",
      "d. Global variables have higher performance compared to local variables.",
    ],
    answer:
      "b. It is recommended to avoid using global variables whenever possible.",
  },
  {
    question:
      "5. When comparing two variables in JavaScript, which of the following is considered a best practice?",
    choices: [
      "a. Using the == operator for strict equality comparison",
      "b. Using the === operator for loose equality comparison",
      "c. Using the != operator for inequality comparison",
      "d. Using the !== operator for strict inequality comparison",
    ],
    answer: "b. Using the === operator for loose equality comparison",
  },
];

// var interval = setInterval();

var startDiv = document.getElementById("start");
var startQuizBtn = document.querySelector(".big-button");
var introEl = document.querySelector(".intro");
var centerEl = document.querySelector(".center");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var answerCheck = document.getElementById("answerCheck");

// question index is used to go through the question choices one by one. Counting starts at 0 in javascript. 0 is the first question index
var questionNumber = 0;

let correctAnswer;

function displayQuiz() {
  // this puts questions on the page
  // this stops the clock and gets user's initials
  if (questionNumber === questions.length) {
    clearInterval(downloadTimer);
    var userInitials = prompt("Enter your initials");
    localStorage.setItem("high-score", JSON.stringify({ userInitials, score }));
    window.location.reload();
    return;
  }

  if (questionNumber === questions.length) {
    clearInterval(downloadTimer);
    var userInitials = prompt("Enter your initials");
    localStorage.setItem("high-score", JSON.stringify({ userInitials, score }));

    // Get the high score from local storage, or set it to 0 if it doesn't exist
    let highScore = JSON.parse(localStorage.getItem("high-score")) || {
      score: 0,
    };

    // Set the text content of the elements to display the scores
    highScoreValueEl.textContent = highScore.userInitials
      ? `${highScore.userInitials}: ${highScore.score}`
      : "";
    userScoreEl.textContent = `${userInitials}: ${score}`;
    window.location.reload();
    return;
  }

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

var timeleft = 30;
function showCountdown() {
  downloadTimer = setInterval(function () {
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

var updateUserScore = function () {
  var$();
};
