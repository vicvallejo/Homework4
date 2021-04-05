
var head = document.querySelector(".header");
var Timer1 = document.querySelector("#timer");
var HScores = document.querySelector("#HScores");

// Variables are declared and elements are selected

var Inici = document.querySelector(".inicio");
var BeginButton = document.querySelector("#Begin");

var quiz = document.querySelector(".quiz");
var pregunta = document.getElementById("question");
var AButton = document.getElementById("AA");
var BButton = document.getElementById("AB");
var CButton = document.getElementById("AC");
var DButton = document.getElementById("AD");
var coin = document.getElementById("coin");

var result = document.querySelector(".result");
var YScore = document.getElementById("YScore");
var YName = document.getElementById("YName");
var SaveBut = document.getElementById("Bsave");

var foote = document.querySelector(".foot");
var backto = document.getElementById("backto");
var H1tit = document.getElementById("H1tit");
var HsList = document.getElementById("HsList");
var BReset = document.getElementById("BReset");

// questions array is declared

var questions = [
  {
    question: "What is a",
    choiceA: "a1",
    choiceB: "a2",
    choiceC: "a3",
    choiceD: "a4",
    corrct: "A"
  },
  {
    question: "What is b",
    choiceA: "b1",
    choiceB: "b2",
    choiceC: "b3",
    choiceD: "b4",
    corrct: "B"
  },
  {
    question: "What is c",
    choiceA: "c1",
    choiceB: "c2",
    choiceC: "c3",
    choiceD: "c4",
    corrct: "C"
  },
  {
    question: "What is d",
    choiceA: "d1",
    choiceB: "d2",
    choiceC: "d3",
    choiceD: "d4",
    corrct: "D"
  },
];

var LastquestionIndex = questions.length - 1;
var questionIndex = 0;
var uno = 1;
var Score = 0;
var resp = "";
var secondsLeft = 20;
var WQSS = 5;

var HS = [];


//function ofr starting the quizz

function startGame() {
  Inici.style.display = "none";
  quiz.style.display = "block";
  muestrapregunta();
  startTimer();
}

// Re starting variables for beggining the test


function restartGame() {

  questionIndex = 0;
  Score = 0;
  resp = "";
  secondsLeft = 20;
  result.style.display = "none";
  foote.style.display = "none";
  Inici.style.display = "block";
  arrayHSInverso();
}



// condotion for showing the questions and answers until last question


function muestrapregunta() {
  if (questionIndex < questions.length) {
    var quest = questions[questionIndex];
    pregunta.textContent = quest.question;
    AButton.textContent = quest.choiceA;
    BButton.textContent = quest.choiceB;
    CButton.textContent = quest.choiceC;
    DButton.textContent = quest.choiceD;

  }
  else {
    resultdisplay();

  }
}


function gamelogic() {
  if (resp == questions[questionIndex - 1].corrct) {
    GoodA();
  }
  else {
    WrongA();
  }
}



function GoodA() {
  coin.textContent = "Correct";
  Score++;
  setTimeout(function () {
    coin.textContent = "";
  }, 500);

}

function WrongA() {
  coin.textContent = "Incorrect";
  secondsLeft = secondsLeft - WQSS;
  setTimeout(function () {
    coin.textContent = "";
  }, 500);
}

//Response for different answers choice

function respA() {
  resp = "A";
  questionIndex++;
  gamelogic();
  muestrapregunta();
}

function respB() {
  resp = "B";
  questionIndex++;
  gamelogic();
  muestrapregunta();
}

function respC() {
  resp = "C";
  questionIndex++;
  gamelogic();
  muestrapregunta();
}

function respD() {
  resp = "D";
  questionIndex++;
  gamelogic();
  muestrapregunta();
}


// timer start
function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    Timer1.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      resultdisplay();
    }
  }, 1000);

}


// Score is shown

function resultdisplay() {
  secondsLeft = 1;
  quiz.style.display = "none";
  YScore.textContent = "your score is  " + Score;
  result.style.display = "block";

}


function HighScores() {
  head.style.resultdisplay = "none";
  result.style.display = "none";
  foote.style.display = "block";
  storeTodos();
}


function HighScores1() {
  head.style.resultdisplay = "none";
  result.style.display = "none";
  foote.style.display = "block";
}

function resetQuizz() {
  document.location.reload();
}

// create list for high scores
function storeTodos() {
  var NHS = [];
  var input = document.getElementById('YName').value;
  NHS.push(input + " Score " + Score);
  console.log(NHS);
  HS = HS.concat(NHS);
  console.log(HS);
  localStorage.setItem("HS", JSON.stringify(HS));
  var todo = NHS;

  var li = document.createElement("li");
  li.textContent = todo;

  HsList.appendChild(li);
}

function arrayHSInverso() {
  foote.style.display = "none";
}


//listener for different buttons and begining of different functions


BeginButton.addEventListener("click", startGame);
AButton.addEventListener("click", respA);
BButton.addEventListener("click", respB);
CButton.addEventListener("click", respC);
DButton.addEventListener("click", respD);
SaveBut.addEventListener("click", HighScores);
backto.addEventListener("click", restartGame);
BReset.addEventListener("click", resetQuizz);
HScores.addEventListener("click", HighScores1);
