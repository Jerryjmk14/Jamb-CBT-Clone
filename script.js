const Mathematics = [
  {
    question: "what is the sum of 9 + 16?",

    correctAns: 25,
    wrongAns1: 32,
    wrongAns2: 50,
    wrongAns3: 20,
  },
  {
    question: "the area of a circle is ?",
    correctAns: "πr²",
    wrongAns1: "length x breadth",
    wrongAns2: 32,
    wrongAns3: 50,
    wrongAns4: 20,
  },
  {
    question: "25% is equals to 1/4?",
    correctAns: true,
    wrongAns: false,
  },
];
const English = [
  {
    question: "example of a preposition is 'beneath'? ",
    correctAns: true,
    wrongAns: false,
  },
  {
    question: "synonyms are words that opposite in meaning. true or false?",
    correctAns: "no, that is incorrect.",
    wrongAns: "yes, that is correct.",
  },
  {
    question: "My mum is a very frugal spender, frugal here means?",
    correctAns: "prudent",
    wrongAns: "lavish",
  },
];

const government = [
  {
    question: "Abraham Lincoln defined government as ?",
    correctAns: "for the people, of the people and by the people",
    wrongAns: " a selected few who are chosen to rule the electorates",
  },
  {
    question:
      " Nigeria gained independence in the year 1960, but became a republic ? ",
    correctAns: 1963,
    wrongAns: 1973,
  },
  {
    question:
      "man is born free but bound in chains everywhere, was quoted from?",
    correctAns: "Jean-Jacques Rousseau",
    wrongAns: "Mahatma Ghandi",
  },
];

// Targeting all the required elements
const timerEl = document.querySelector(".timer span");
console.log(timerEl);

const subjectsContainer = document.querySelector(".subjects");
const maths = document.querySelector(".maths");
const english = document.querySelector(".english");
const biology = document.querySelector(".biology");
const paraEl = document.querySelector("form p");
const inputA = document.querySelector(".A");
const inputB = document.querySelector(".B");
const inputC = document.querySelector(".C");
const inputD = document.querySelector(".D");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-previous");

//function to change next question
let mathsQue = [];

function nextQuestion() {
  mathsQue = Mathematics.shift();
  paraEl.textContent = mathsQue.question;
  inputA.textContent = mathsQue.correctAns;
  inputB.textContent = mathsQue.wrongAns1;
  inputC.textContent = mathsQue.wrongAns2;
  inputD.textContent = mathsQue.wrongAns3;
}

nextQuestion();

nextBtn.addEventListener("click", nextQuestion);

//function for changing subject

let changeMaths = [];

function changeSubjectMaths() {
  changeMaths = Mathematics.shift();
  paraEl.textContent = changeMaths.question;
  inputA.textContent = changeMaths.correctAns;
  inputB.textContent = changeMaths.wrongAns1;
  inputC.textContent = changeMaths.wrongAns2;
  inputD.textContent = changeMaths.wrongAns3;
}
maths.addEventListener("click", changeSubjectMaths);

let governmentQue = [];
function changeSubjectGov() {
  governmentQue = government.shift();
  paraEl.textContent = governmentQue.question;
  inputA.textContent = governmentQue.correctAns;
  inputB.textContent = governmentQue.wrongAns1;
  inputC.textContent = governmentQue.wrongAns2;
  inputD.textContent = governmentQue.wrongAns3;
}

biology.addEventListener("click", changeSubjectGov);

let englishQue = [];
function changeSubjectEng() {
  englishQue = English.shift();
  paraEl.textContent = englishQue.question;
  inputA.textContent = englishQue.correctAns;
  inputB.textContent = englishQue.wrongAns1;
  inputC.textContent = englishQue.wrongAns2;
  inputD.textContent = englishQue.wrongAns3;
}

english.addEventListener("click", changeSubjectEng);

// function to set timer
function getTimer() {
  let currentTime = new Date().toLocaleTimeString();
  //   console.log(currentTime);
  timerEl.textContent = currentTime;
}

getTimer();
setInterval(getTimer, 1000);

// Function to change subject styling
maths.setAttribute("style", "background-color: rgb(13, 43, 3)");
maths.classList.add("text-white");

function mathsStyle() {
  if (
    (maths.setAttribute("style", "background-color: rgb(13, 43, 3)") !== 1 &&
      maths.setAttribute("style", "background-color: rgb(13, 43, 3)") !== -1) ||
    biology.setAttribute("style", "background-color: rgb(13, 43, 3)") !== -1
  ) {
    maths.setAttribute("style", "background-color: rgb(13, 43, 3)");
    english.removeAttribute("style", "background-color: rgb(13, 43, 3)");
    biology.removeAttribute("style", "background-color: rgb(13, 43, 3)");

    maths.classList.add("text-white");
  }
  english.classList.remove("text-white");
  biology.classList.remove("text-white");
}

function englishStyle() {
  if (
    (maths.setAttribute("style", "background-color: rgb(13, 43, 3)") !== -1 &&
      biology.setAttribute("style", "background-color: rgb(13, 43, 3)") !==
        1) ||
    english.setAttribute("style", "background-color: rgb(13, 43, 3)") !== 1
  ) {
    english.setAttribute("style", "background-color: rgb(13, 43, 3)");
    maths.removeAttribute("style", "background-color: rgb(13, 43, 3)");
    biology.removeAttribute("style", "background-color: rgb(13, 43, 3)");

    english.classList.add("text-white");
  }
  maths.classList.remove("text-white");
  biology.classList.remove("text-white");
}

function biologyStyle() {
  if (
    (english.setAttribute("style", "background-color: rgb(13, 43, 3)") !== -1 &&
      maths.setAttribute("style", "background-color: rgb(13, 43, 3)") !== 1) ||
    biology.setAttribute("style", "background-color: rgb(13, 43, 3)") !== 1
  ) {
    biology.setAttribute("style", "background-color: rgb(13, 43, 3)");
    maths.removeAttribute("style", "background-color: rgb(13, 43, 3)");
    english.removeAttribute("style", "background-color: rgb(13, 43, 3)");

    biology.classList.add("text-white");
  }
  english.classList.remove("text-white");
  maths.classList.remove("text-white");
}

maths.addEventListener("click", mathsStyle);
english.addEventListener("click", englishStyle);
biology.addEventListener("click", biologyStyle);
