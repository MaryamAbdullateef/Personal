
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
    question: "What does <b>HTML</b> stands for?",
    answers: [
      { text: "Hyperlinks Text Markup Language", correct: false },
      { text: "HyperText Makeup Language", correct: false },
      { text: "HyperText Markup Language", correct: true },
      { text: "HighText Machine Language", correct: false },
    ],
  },
  {
    question: "Which of these is <b>not</b> a Javascript data type?",
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
      { text: "*", correct: false },
    ],
  },
  {
    question: "What does <b>===</b> mean in Javascript?",
    answers: [
      { text: "Assignment", correct: false },
      { text: "Equality with type check", correct: true },
      { text: "Not equal", correct: false },
      { text: "Add", correct: true },
    ],
  },
  {
    question: "Which method is used to output data in Javascript?",
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
   {
    question: "What is source code?",
    answers: [
      { text: "Output of a program", correct: false },
      { text: "Human-readable program code", correct: true },
      { text: "Machine Language", correct: false },
      { text: "Error message", correct: false},
    ],
  },
   {
    question: "Which of these is a logic error?",
    answers: [
      { text: "Missing semicolon", correct: false },
      { text: "Program not compiling", correct: false },
      { text: "Wrong output due to incorrect logic", correct: true },
      { text: "Syntax mistake", correct: false},
    ],
  },
   {
    question: "What is a variable?",
    answers: [
      { text: "A fixed value", correct: false },
      { text: "A container for storing data", correct: true },
      { text: "A loop", correct: false },
      { text: "A function", correct: false},
    ],
  },
   {
    question: "What is <b>debugging</b>?",
    answers: [
      { text: "Writing new code", correct: false },
      { text: "Running a program", correct: false },
      { text: "Removing errors from code", correct: true },
      { text: "Compiling code", correct: false},
    ],
  },
   {
    question: "Which of these is <b>NOT</b>  a programming paradigm?",
    answers: [
      { text: "Object-Oriented", correct: false },
      { text: "Functional ", correct: false },
      { text: "Procedural", correct: false },
      { text: "Decorative", correct: true},
    ],
  },
   {
    question: "Which tag is used to create a hyperlink?",
    answers: [
      { text: "< link >", correct: false },
      { text: "< heading >", correct: false },
      { text: "< href >", correct: false },
      { text: "< a >", correct: true},
    ],
  },
   {
    question: "What attribute specifies the image path?",
    answers: [
      { text: "alt", correct: false },
      { text: "href", correct: false },
      { text: "url", correct: false },
      { text: "src", correct: true},
    ],
  },
   {
    question: "Which tag creates a line break?",
    answers: [
      { text: "< lb >", correct: false },
      { text: "< br >", correct: true },
      { text: "< break >", correct: false },
      { text: "< hr >", correct: false},
    ],
  },
   {
    question: "Which tag is used to create a list with bullet points?",
    answers: [
      { text: "< ol >", correct: false },
      { text: "< li >", correct: false },
      { text: "< ul >", correct: true },
      { text: "< dl >", correct: false},
    ],
  },
   {
    question: "Which symbols is used for class selectors?",
    answers: [
      { text: "#", correct: false },
      { text: "*", correct: false },
      { text: ".", correct: true },
      { text: "@", correct: false},
    ],
  },
   {
    question: "What does <b>display:none;</b> do?",
    answers: [
      { text: "Hides elements completely", correct: true },
      { text: "Makes elements invisible but keeps space", correct: false },
      { text: "Moves element", correct: false },
      { text: "Resizez element", correct: false},
    ],
  },
   {
    question: "Which unit is relative to screen size?",
    answers: [
      { text: "px", correct: false },
      { text: "cm", correct: false },
      { text: "%", correct: true },
      { text: "mm", correct: false},
    ],
  },
   {
    question: "Which layout uses rows and columns?",
    answers: [
      { text: "Flex", correct: false },
      { text: "Grid", correct: true },
      { text: "Float", correct: false },
      { text: "Inline", correct: false},
    ],
  },
   {
    question: "Which property controls element stacking?",
    answers: [
      { text: "Position", correct: false },
      { text: "Float", correct: false },
      { text: "Z-index", correct: true },
      { text: "Display", correct: false},
    ],
  },
   {
    question: "Which position removes element from normal flow?",
    answers: [
      { text: "Static", correct: false },
      { text: "Absolute", correct: true },
      { text: "Relative", correct: false },
      { text: "Inline", correct: false},
    ],
  },
   {
    question: "What is an array?",
    answers: [
      { text: "A single value", correct: false },
      { text: "A function", correct: false },
      { text: "A collection of values", correct: true },
      { text: "A loop", correct: false},
    ],
  },
   {
    question: "Which loop runs at least once?",
    answers: [
      { text: "do...while", correct: true },
      { text: "while", correct: false },
      { text: "foreach", correct: false },
      { text: "for", correct: false},
    ],
  },
   {
    question: "What does <b>DOM</b> stand for?",
    answers: [
      { text: "Document Output Method", correct: false },
      { text: "Data Object Model", correct: false },
      { text: "Document Object Method", correct: false },
      { text: "Document Object Model", correct: true},
    ],
  },
   {
    question: "Which keyword stops a loop?",
    answers: [
      { text: "stop", correct: false },
      { text: "exit", correct: false },
      { text: "break", correct: true },
      { text: "end", correct: false},
    ],
  },
   {
    question: "Which Javascript method converts string to integer?",
    answers: [
      { text: " Number()", correct: false },
      { text: "parseInt()", correct: true },
      { text: "toString()", correct: false },
      { text: "Math.round", correct: false},
    ],
  },
   {
    question: "Which operator performs logical <b>AND</b>?",
    answers: [
      { text: "||", correct: false },
      { text: "!=", correct: false },
      { text: "&&", correct: true },
      { text: "==", correct: false},
    ],
  },
   {
    question: "What is the output of Boolean (0)?",
    answers: [
      { text: "true", correct: false },
      { text: "0", correct: false },
      { text: "false", correct: true },
      { text: "null", correct: false},
    ],
  },
   {
    question: "What does <b>overflow:hidden;</b> do?",
    answers: [
      { text: "Shows scrollbars", correct: false },
      { text: "Resizes content", correct: false },
      { text: "Hides overflowing content", correct: true },
      { text: "Clips text only", correct: false},
    ],
  },
   {
    question: "Which value makes an element flexible in Flexbox ?",
    answers: [
      { text: "Flex-grow", correct: false },
      { text: "display:flex", correct: true },
      { text: "flex-wrap", correct: false },
      { text: "align-items", correct: false},
    ],
  },
   {
    question: "Which property creates spaces outside an element?",
    answers: [
      { text: "padding", correct: false },
      { text: "border", correct: false },
      { text: "margin", correct: true },
      { text: "spacing", correct: false},
    ],
  },
   {
    question: "Which HTML attribute makes an input compulsory?",
    answers: [
      { text: "important", correct: false },
      { text: "must", correct: false },
      { text: "validate", correct: false },
      { text: "required", correct: true},
    ],
  },
   {
    question: "Which language is mainly used for webpages structure?",
    answers: [
      { text: "CSS", correct: false },
      { text: "HTML", correct: true },
      { text: "Python", correct: false },
      { text: "SQL", correct: false},
    ],
  },
   {
    question: "Which HTTP method sends data to server?",
    answers: [
      { text: "GET", correct: false },
      { text: "FETCH", correct: false },
      { text: "POST", correct: true },
      { text: "LOAD", correct: false},
    ],
  },
   {
    question: "What does <b>API</b> stand for?",
    answers: [
      { text: "Application Programming Interface", correct: true },
      { text: "Advanced Programming Input", correct: false },
      { text: "Application Process Interface", correct: false},
      { text: "Automated Program Instruction", correct: false},
    ],
  },
   {
    question: "Which files ignores files in Git?",
    answers: [
      { text: "ignore.txt", correct: false },
      { text: "gitignore", correct: true },
      { text: "skip.init", correct: false },
      { text: "ignoreinit", correct: false},
    ],
  },
   {
    question: "What is a repository?",
    answers: [
      { text: "A branch", correct: false },
      { text: "A server", correct: false },
      { text: "A project folder", correct: true },
      { text: "A Database", correct: false},
    ],
  },
   {
    question: "Which command copies a repository?",
    answers: [
      { text: "git fork", correct: false },
      { text: "git clone", correct: true },
      { text: "git copy", correct: false},
      { text: "git pull", correct: false},
    ],
  },
   {
    question: "What command uploads code to Github?",
    answers: [
      { text: "git init", correct: false },
      { text: "git clone", correct: false },
      { text: "git push", correct: true },
      { text: "git commit", correct: false},
    ],
  },
   {
    question: "Github is a _______ platform?",
    answers: [
      { text: "Programming Language", correct: false },
      { text: "Cloud storage", correct: false },
      { text: "Code hosting", correct: true },
      { text: "Complier", correct: false},
    ],
  },
   {
    question: "Git is used for ?",
    answers: [
      { text: "Designing", correct: false },
      { text: "Version control", correct: true },
      { text: "Hosting", correct: false },
      { text: "Styling", correct: false},
    ],
  },
   {
    question: "Which package manager comes with Node?",
    answers: [
      { text: "composer", correct: false },
      { text: "yarn", correct: false },
      { text: "npm", correct: true },
      { text: "pip", correct: false},
    ],
  },
   {
    question: "Node.js runs on which engine?",
    answers: [
      { text: "SpiderMonkey", correct: false },
      { text: "Chakra", correct: false },
      { text: "Java VM", correct: false },
      { text: "V8", correct: true},
    ],
  },
   {
    question: "Node.js runs for ______ development?",
    answers: [
      { text: "Frontend", correct: false },
      { text: "Mobile", correct: false },
      { text: "Backend", correct: true },
      { text: "Game", correct: false},
    ],
  },
   {
    question: "Which hook manages state?",
    answers: [
      { text: "useRef", correct: false },
      { text: "useState", correct: true },
      { text: "useEffect", correct: false },
      { text: "useContext", correct: false},
    ],
  },
   {
    question: "What is <b>JSX</b>?",
    answers: [
      { text: "JavaScript XML", correct: true },
      { text: "Java Syntax Extension", correct: false },
      { text: "JSON XML", correct: false },
      { text: "JavaScript Extra", correct: false},
    ],
  },
   {
    question: " React was developed by?",
    answers: [
      { text: "Google", correct: false },
      { text: "Facebook", correct: true },
      { text: "Microsoft", correct: false },
      { text: " Amazon", correct: false},
    ],
  },
   {
    question: "React is a _____ library?",
    answers: [
      { text: "Backend", correct: false },
      { text: "Database", correct: false },
      { text: "Fontend", correct: true },
      { text: "Styling", correct: false},
    ],
  },
   {
    question: "Javascript runs mainly on the _______ side?",
    answers: [
      { text: "Server", correct: false },
      { text: "Database", correct: false },
      { text: "Client", correct: true },
      { text: "Complier", correct: false},
    ],
  },

   {
    question: "Which method <b> converts JSON</b> to object?",
    answers: [
      { text: "JSON.convert()", correct: false },
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify", correct: false },
      { text: "JSON.object", correct: false},
    ],
  },


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers-button");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = Number(localStorage.getItem("quizIndex")) || 0;
let score = Number(localStorage.getItem("quizScore")) || 0;


function saveProgress() {
  localStorage.setItem("quizIndex", currentQuestionIndex);
  localStorage.setItem("quizScore", score);
}


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  localStorage.clear();
  nextButton.innerHTML = "Next";
  showQuestion();
}


function showQuestion() {
  resetState();

  if (currentQuestionIndex >= questions.length) {
    showScore();
    return;
  }

  let currentQuestion = questions[currentQuestionIndex];

  questionElement.innerHTML = `
    Question ${currentQuestionIndex + 1} of ${questions.length}<br>
    ${currentQuestion.question}
  `;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = "true";
    }

    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });

  saveProgress();
}

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

  saveProgress();
  nextButton.style.display = "block";
}


function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}


nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  saveProgress();
  showQuestion();
});

function showScore() {
  resetState();

  questionElement.innerHTML = `
    🎉 MaryamQuiz app Completed! <br><br>
    You scored <b>${score}</b> out of <b>${questions.length}</b>
  `;

  nextButton.innerHTML = "Restart Quiz";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}


showQuestion();