const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlinks and Text Markup Language", correct: false }
    ]
  },
  {
    question: "Which language is used for styling web pages?",
    answers: [
      { text: "CSS", correct: true },
      { text: "HTML", correct: false },
      { text: "Python", correct: false }
    ]
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<javascript>", correct: false }
    ]
  }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }
  nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionElement.innerText = '';
  answerButtons.innerHTML = '';
  nextButton.style.display = 'none';
  scoreContainer.classList.remove('hide');
  scoreElement.innerText = `${score} / ${questions.length}`;
}

startQuiz();
