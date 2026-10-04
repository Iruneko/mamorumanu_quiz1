document.addEventListener("DOMContentLoaded", function () {

  const quizData = [

    {
      question:
        "マモル・マヌーが好きだったのはどちら？",

      answers: [
        "犬",
        "猫",
        "鳥",
        "うさぎ",
        "ハムスター"
      ],

      correct: "猫"
    },


    {
      question:
        "マモル・マヌーが小さい頃、家族から呼ばれていたニックネームは？",

      answers: [
        "マーちゃん",
        "マモちゃん",
        "マー坊",
        "まーくん",
        "くんちゃん"
      ],

      correct: "くんちゃん"
    },


    {
      question:
        "大人になってから、家族から呼ばれていたニックネームは？",

      answers: [
        "けろちゃん",
        "マーちゃん",
        "マモちゃん",
        "まーくん",
        "くんちゃん"
      ],

      correct: "けろちゃん"
    },


    {
      question:
        "マモル・マヌーが好きだったビートルズの曲は？",

      answers: [
        "Yesterday",
        "Hey Jude",
        "Help!",
        "Let It Be",
        "Come Together"
      ],

      correct: "Let It Be"
    },


    {
      question:
        "カップス時代、マモル・マヌーが親戚の家によく居候していた場所は？",

      answers: [
        "元町",
        "山下公園",
        "三渓園",
        "本牧",
        "山手"
      ],

      correct: "三渓園"
    }

  ];


  const startScreen =
    document.getElementById("start-screen");

  const quizScreen =
    document.getElementById("quiz-screen");

  const resultScreen =
    document.getElementById("result-screen");


  const startBtn =
    document.getElementById("start-btn");

  const nextBtn =
    document.getElementById("next-btn");

  const restartBtn =
    document.getElementById("restart-btn");


  const questionNumber =
    document.getElementById("question-number");

  const scoreText =
    document.getElementById("score");

  const questionText =
    document.getElementById("question");

  const answerButtons =
    document.querySelectorAll(".answer-btn");

  const resultMessage =
    document.getElementById("result-message");


  const finalScore =
    document.getElementById("final-score");

  const finalMessage =
    document.getElementById("final-message");


  let currentQuestion = 0;

  let score = 0;


  function startQuiz() {

    currentQuestion = 0;

    score = 0;


    startScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    quizScreen.classList.add("active");


    showQuestion();
  }


  function showQuestion() {

    const currentQuiz =
      quizData[currentQuestion];


    questionNumber.textContent =
      `QUESTION ${currentQuestion + 1} / ${quizData.length}`;


    scoreText.textContent =
      `SCORE: ${score}`;


    questionText.textContent =
      currentQuiz.question;


    resultMessage.textContent = "";


    nextBtn.style.display = "none";


    answerButtons.forEach(function (button, index) {

      button.textContent =
        currentQuiz.answers[index];


      button.disabled = false;


      button.classList.remove("correct");

      button.classList.remove("wrong");


      button.onclick = function () {

        checkAnswer(
          button,
          currentQuiz.correct
        );

      };

    });

  }


  function checkAnswer(
    selectedButton,
    correctAnswer
  ) {

    answerButtons.forEach(function (button) {

      button.disabled = true;


      if (
        button.textContent === correctAnswer
      ) {

        button.classList.add("correct");

      }

    });


    if (
      selectedButton.textContent === correctAnswer
    ) {

      score++;


      scoreText.textContent =
        `SCORE: ${score}`;


      resultMessage.textContent =
        "🥁 正解です！";

    } else {

      selectedButton.classList.add("wrong");


      resultMessage.textContent =
        `正解は「${correctAnswer}」です。`;

    }


    nextBtn.style.display = "block";

  }


  function nextQuestion() {

    currentQuestion++;


    if (
      currentQuestion < quizData.length
    ) {

      showQuestion();

    } else {

      showResult();

    }

  }


  function showResult() {

    quizScreen.classList.remove("active");

    resultScreen.classList.add("active");


    finalScore.textContent =
      `${score} / ${quizData.length}`;


    if (score === 5) {

      finalMessage.textContent =
        "全問正解！ マモル・マヌーをよく知っていますね！";

    } else if (score >= 3) {

      finalMessage.textContent =
        "素晴らしい！ なかなかのマモル・マヌー通です！";

    } else {

      finalMessage.textContent =
        "チャレンジありがとうございました。ぜひもう一度挑戦してみてください！";

    }

  }


  startBtn.addEventListener(
    "click",
    startQuiz
  );


  nextBtn.addEventListener(
    "click",
    nextQuestion
  );


  restartBtn.addEventListener(
    "click",
    startQuiz
  );

});