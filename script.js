let startButton = document.getElementById("start-button");
let questionTextEl = document.getElementById("question-text");
let questionOptions = document.getElementById("question-options");
var timeEl = document.querySelector(".time");
var timerInterval;
var secondsleft = 60;
var score = 0;
var currentQuestionIndex = 0;
var questions = [
  {
    questionText: "How old is the planet?",
    options: ["4.5 billion", "3.5 billion", "5.5 billion", "10 trillion"],
    answer: "4.5 billion",
  },
  {
    questionText: "What is the new age of the universe?",
    options: ["27.8 billion", "13.7 billion", "8.5 billion"],
    answer: "27.8 billion",
  },
  {
    questionText: "Name of the short hominins lived near indonasia?",
    options: ["sapien", "erectus", "florensis"],
    answer: "florensis",
  },
  {
    questionText: "Which planet is related to the jovian system?",
    options: ["saturn", "earth", "jupiter"],
    answer: "jupiter",
  },
];
startButton.addEventListener("click", () => {
  alert("Welcome to this quiz");
  startButton.setAttribute("style", "display:none");

   timerInterval = setInterval(function () {
    secondsleft--;
    if (secondsleft < 0) {
      secondsleft = 0;
    }
    timeEl.textContent = secondsleft;
  }, 1000);
  displayQuestion();
});

function displayQuestion() {
  questionTextEl.textContent = questions[currentQuestionIndex].questionText;
  questionOptions.innerHTML = "";

  const currentQuestionOptions = questions[currentQuestionIndex].options;
  console.log("currentQuestionOptions", currentQuestionOptions);

  // for (initialization; condition; aftermath)
  for (let index = 0; index < currentQuestionOptions.length; index++) {
    var newButton = document.createElement("button");
    newButton.textContent = currentQuestionOptions[index];

    newButton.addEventListener("click", function (e) {
      console.log(e.target.innerText)
      const value = e.target.innerText
      if(value === questions[index].answer){
        score += 1
      } else {
        secondsleft -= 10
      }

      currentQuestionIndex++;

      if (currentQuestionIndex === questions.length) {
        endGame()
      } else {
        displayQuestion();
      }
    });

    questionOptions.appendChild(newButton);
    // TODO: For each option in the options array of the current question object,
    //       create a new <button> element and set its text content to the string
    //       of the option array. Then append the button to the questionOptions element
    //const optionString = currentQuestionOptions[index];
  }
}

function checkAnswer(isCorrect) {
  //clearInterval(secondsleft);

  if (isCorrect) {
    score += 1;
  } else {
    timeRemaining -= 10;
    if (timeRemaining < 0) {
      timeRemaining = 0;
    }
  }
}
function endGame(){
  questionTextEl.textContent = 'Game Over'
  questionOptions.innerHTML = 'score' + score
  clearInterval(timerInterval)
  saveScore()
}
function saveScore() {
  document.getElementById("savescore").classList.remove("hide")
  const initialsInput = document.getElementById("initials");
  const initials = initialsInput.ariaValueMax.trim().toUpperCase();
console.log(initials)
  if (initials && score > 0) {
    scoreboard.push({ initials, score });
    //scoreboard.sort((a, b)) => b.score - a.score);
  }
}
