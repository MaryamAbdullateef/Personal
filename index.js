
const questions = [
  {
    question: "What is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
    ],
  },
  {
    question: "Which language runs in the browser?",
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "C++", correct: false },
      { text: "JavaScript", correct: true },
    ],
  },
  {
    question: "What does HTML stands for?",
    answers: [
      { text: "Hyperlinks Text Markup Language", correct: false },
      { text: "HyperText Markup Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "HighText Machine Language", correct: false },
    ],
  },
  {
    question: "Which of these is not a Javascript data type?",
    answers: [
      { text: "Float", correct: true },
      { text: "Number", correct: false },
      { text: "Boolean", correct: false },
      { text: "String", correct: false},
    ],
  },
  {
    question: "Which company developed Javascript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Sun Microsystems", correct: false },
      { text: "Netscape", correct: true },
      { text: "Apple", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in Javascript?",
    answers: [
      { text: "==", correct: false },
      { text: "//", correct: true },
      { text: "#", correct: false },
      { text: "\\", correct: true },
    ],
  },
  {
    question: "What does === mean in Javascript?",
    answers: [
      { text: "Assignment", correct: false },
      { text: "Equality with type check", correct: true },
      { text: "Not equal", correct: false },
      { text: "Add", correct: true },
    ],
  },
  {
    question: "Which method is used to outpur data in Javascript?",
    answers: [
      { text: "Print ()", correct: false },
      { text: "Console.log()", correct: true},
      { text: "Echo()", correct: false },
      { text: "Write()?", correct: false },
    ],
  },
  {
    question: "What is the largest ocean in the world?",
    answers: [
      { text: "Atlantic", correct: false },
      { text: "Nile", correct: false },
      { text: "Pacific", correct: true },
      { text: "Artic", correct: false},
    ],
  },
  {
    question: "How do you declare a variable in Javascript?",
    answers: [
      { text: "var name", correct: false },
      { text: "set name", correct: false },
      { text: "let name", correct: true },
      { text: "variable name", correct: false},
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// START QUIZ
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// SHOW QUESTION
function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${
    currentQuestion.question
  }`;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

// ANSWER SELECTION
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

// RESET UI
function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

// NEXT BUTTON LOGIC
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

// FINAL SCORE
function showScore() {
  resetState();
  questionElement.innerHTML = `🎉 You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Restart Quiz";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}

startQuiz();