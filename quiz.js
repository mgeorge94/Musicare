const startBtn = document.querySelector('#startQuiz-btn');
const nextBtn = document.querySelector('.next-btn');
const seeResultBtn = document.querySelector('#quizResultsBtn');
const questionContainer = document.querySelector('#questions-container');
const answerBtn = document.querySelector('.answer-btn');
const quizTimeoutBar = document.querySelector('.quiz-timeout-bar');
const quizContainer = document.querySelector('.quiz-container');
let shuffledQuestions;
let currentQuestionIndex;
const rules = document.querySelector('.quiz-rules');
let gameDiscount = false;
let questionCount = 2;

startBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', (event) => {
  window.clearTimeout(wait);
  event.preventDefault();
  currentQuestionIndex++;
  restartAnimation();
  quizTimeoutBar.style.display = 'flex';
  upQuestionCount();
  // isLastQuestion();
  setNextQuestion();
});
seeResultBtn.addEventListener('click', showResults);
let questionElement = document.querySelector('#question');
let answerBtnElement = document.querySelector('#answer-buttons');
let correctAnswers = 0;
//array of question objects
const questions = [
  {
    question:
      '_ este un gen de muzică academică de formă amplă, destinat unui colectiv mare de interpreți, pentru diferite instrumente',
    answers: [
      { text: 'Jazz-ul', correct: false },
      { text: 'Folclorul', correct: false },
      { text: 'Doina', correct: false },
      { text: 'Simfonia', correct: true },
    ],
  },
  {
    question:
      'Care dintre cele enumerate mai jos este un gen de muzică instrumentală întemeiat pe teme de proveniență populară, de cele mai multe ori cu caracter contrastant.',
    answers: [
      { text: 'Rapsodia', correct: true },
      { text: 'Serenada', correct: false },
      { text: 'Sonata', correct: false },
      { text: 'Doina', correct: false },
    ],
  },
  {
    question: 'Ce este oratoriul?',
    answers: [
      { text: 'O  creație la baza căreia este pus principiul dialogării dintre solist și orchestră.', correct: false },
      { text: 'Reprezintă o creație de proporții pentru cor, soliști-vocaliști și orchestră.', correct: true },
      { text: 'O expresie concludentă a dramaturgiei muzicale.', correct: false },
      { text: 'Piesa solistică vocală prin care personajul își exprimă trăirile interioare.', correct: false },
    ],
  },
  {
    question: 'Care dintre tempo-urile menționate mai jos fac parte din categoria de tempo-uri repezi?',
    answers: [
      { text: 'Largo, lento, adagio.', correct: false },
      { text: 'Andante, andantino, moderato, allegretto', correct: false },
      { text: 'Allegro, vivace, allegretto, presto', correct: false },
      { text: 'Allegro, presto, vivace, prestissimo', correct: true },
    ],
  },
  {
    question: 'Dinamica muzicală are legătura cu _ .',

    answers: [
      { text: 'timbrul', correct: false },
      { text: 'tempo-ul', correct: false },
      { text: 'nuanțele', correct: true },
      { text: 'pauza', correct: false },
    ],
  },
  {
    question: 'Elementul de bază al lucrărilor muzicale, ce constă Într-o expunere de sunete la o singură voce este.',
    answers: [
      { text: 'Ritmul', correct: false },
      { text: 'Tempo-ul', correct: false },
      { text: 'Melodia', correct: true },
      { text: 'Armonia', correct: false },
    ],
  },
  {
    question: 'Ce este un menuet?',
    answers: [
      { text: 'Dans popular vechi francez cu mișcări line și grațioase.', correct: true },
      { text: 'Dans național polonez în tempo moderat.', correct: false },
      {
        text: 'Joc popular, executat în cerc, care se rupe în mai multe cercuri, ce se rotesc într-un ritm progresiv accelerat.',
        correct: false,
      },
      { text: 'Vechi dans spaniol cu mișcări lente și caracter solemn.', correct: false },
    ],
  },
  {
    question: 'Care dintre cele de mai jos marchează încheierea unei compoziții muzicale?',
    answers: [
      { text: 'Accent', correct: false },
      { text: 'Codă', correct: true },
      { text: 'Acord', correct: false },
      { text: 'Blues', correct: false },
    ],
  },
  {
    question: '_ este un procedeu de modificare a structurii muzicale din punct de vedere armonic, melodic și ritmic',
    answers: [
      { text: 'Variațiunea', correct: true },
      { text: 'Repetiția', correct: false },
      { text: 'Repriza', correct: false },
      { text: 'Contrastul', correct: false },
    ],
  },

  {
    question: 'Ce reprezintă notația  pressez din partitură',
    answers: [
      { text: 'Mai tare', correct: true },
      { text: 'Mai repede', correct: false },
      { text: 'Mai accentuat', correct: false },
      { text: 'Toate cele de mai sus', correct: false },
    ],
  },
];

//functions
function startGame() {
  startBtn.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  questionContainer.classList.remove('hide');
  rules.classList.add('hide');
  currentQuestionIndex = 0;
  quizTimeoutBar.classList.add('active');
  //make questions apear in random order

  setNextQuestion();
}
//function that restarts the animation

function restartAnimation() {
  quizTimeoutBar.classList.remove('active');
  void quizTimeoutBar.offsetWidth;
  quizTimeoutBar.classList.add('active');
}
function upQuestionCount() {
  document.querySelector('.questionCount').innerText = `Întrebarea ${questionCount} :`;
  questionCount++;
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('answer-btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerBtnElement.appendChild(button);
    set30SecTimeout(button);
  });
}
function resetState() {
  nextBtn.classList.add('hide');

  while (answerBtnElement.firstElementChild) {
    answerBtnElement.removeChild(answerBtnElement.firstChild);
  }
}
function selectAnswer(event) {
  const selectedButton = event.target;

  const correct = selectedButton.dataset.correct;
  Array.from(answerBtnElement.children).forEach((button) => {
    setStatusState(button, correct);
    checkIfCorrect(correct);
  });
  isLastQuestion();
}
//see if is the last question
function isLastQuestion() {
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove('hide');
    quizTimeoutBar.style.display = 'flex';
  } else {
    seeResultBtn.classList.remove('hide');
    clearTimeout(wait);
    quizTimeoutBar.style.display = 'none';
  }
}
function setStatusState(element, correct) {
  clearStatusClass(element);

  if (element.hasAttribute('data-correct')) {
    element.classList.add('correct');
  }

  element.addEventListener('click', checkIfCorrect);
}
function checkIfCorrect(element) {
  if (element) {
    correctAnswers = correctAnswers + 1 / 4;
  } else return;
}
//clean results
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
let wait = null;
// set 30 seconds timeout
function set30SecTimeout(button) {
  setTimeout(function () {
    button.setAttribute('disabled', 'true');
  }, 30000);
  if (wait) {
    clearTimeout(wait);
    wait = null;
  }
  wait = setTimeout(function () {
    isLastQuestion();
  }, 30000);
}
//results
function showResults() {
  resetState();
  questionElement.classList.add('hide');
  seeResultBtn.classList.add('hide');
  document.querySelector('.quiz-results').classList.remove('hide');
  document.querySelector('.left-results').classList.remove('hide');

  document.querySelector('#number-of-correct-answers').innerText = `Numărul de răspunsuri corecte: ${correctAnswers}`;
  document.querySelector('.questionCount').classList.add('hide');

  if (correctAnswers >= questions.length - 1) {
    document.querySelectorAll('.discount-game').forEach(function (instrument) {
      //make discount stiker show
      instrument.style.display = 'block';
      //apply discount
      gameDiscount = true;
      cleanInstruments();

      paintInstruments(allInstruments, gameDiscount);
      addDiscountToForms(gameDiscount);
    });
    document.querySelector('.right-results').classList.remove('hide');
    startConfetti();
  }
  quizTimeoutBar.classList.add('hide');
  nextBtn.classList.add('hide');
  seeResultBtn.classList.add('hide');
}
const addDiscountToForms = (gameDiscount) => {
  if (gameDiscount === true) {
    document.querySelector('#contact-form-discount').classList.remove('hide');
  }
};

const showQuiz = () => {
  document.querySelector('#brand-name').addEventListener('click', () => {
    document.querySelector('.quiz-container').style.display = 'block';
    pageScroll(500);
    hideAboutUs();
    hideGrid();

    hideGrid();
    hideFaq();
    hideAboutUs();
    hideSlides();
    hideCheckoutForm();
    hideContactForm();
    removeInstrumentActiveClass();
    hideAllRepairableInstruments();
  });
};
const hideQuiz = () => {
  document.querySelector('.quiz-container').style.display = 'none';
};
