// Global variables
var secondsLeft = 100;
var score = 0;
var questionNumber = 0;


// Selector variables
var startQuizButtonEl = document.getElementById('start-quiz');
var startQuizPromptEl = document.getElementById('quizStartPrompt');
var quizContainer = document.querySelector("#quizBox");
var timerEl = document.getElementById('timer');
var checkerEl = document.getElementById('checkerDisplay');

var quizAnswersEl = document.getElementById('quizQuestions');

// Sets timer in header, ends quiz once time reaches 0
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds remaining";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to end quiz and prompt highscore entry
      endQuiz();
    }

  }, 1000);
}

// Questions are all stored in an object, properties given to each
allQuizQuestions = [
  {
    question: 'Commonly used data types do NOT include_______',
    options: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
    correct: 2,
  },
  {
    question: 'The condition in an if / else statement is enclosed within_______.',
    options: ['1. quotes', '2. curly brackets', '3. square brackets', '4. parentheses'],
    correct: 3,
  },
  {
    question: 'Arrays in JavaScripts can be used to store _________',
    options: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
    correct: 3,
  },
  {
    question: 'String values must be enclosed within ___________ when being assigned to variables',
    options: ['1. curly brackets', '2. commas', '3. quotes', '4. parentheses'],
    correct: 0,
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    options: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4 console.log'],
    correct: 3,
  }

]


function startQuiz() {
  console.log("start quiz test log");
  // Removes Quiz Start prompt and displays the quiz in a block, time starts once quiz is loaded
  startQuizPromptEl.style.display = "none";
  quizContainer.style.display = "block";
  setTime();

  addQuestion();


}

//Prints the questions to the page
function addQuestion() {
  console.log("question test");

  quizAnswersEl.textContent = allQuizQuestions[questionNumber].question;

  // Selector variable given to each button, then gets display on the page
  for (var i = 0; i <= 3; i++) {
    var answerEl = document.getElementById('ansBtn' + i);
    answerEl.textContent = allQuizQuestions[questionNumber].options[i];
    answerEl.addEventListener("click", checker);


  }

}

// This function checks the user's selected answers and determines whether or not the answer was correct or incorrect
// An event is used here as we need to verify the user's input
// If the user is correct the score is increased and 'Correct!' is displayed
// If the user is incorrect the score remains the same, time is lost, and 'Incorrect' is displayed
function checker(event) {
  event.preventDefault();
  console.log('checker test');

  // if answer is correct display 'Correct!' in checkerEl
  //else display 'Incorrect! in checkerEl and decrease time by 15 seconds
  //then move to next question
  if (allQuizQuestions[questionNumber].correct == event.target.value) {
    checkerDisplay.textContent = 'Correct!';
  
  } else {
    checkerDisplay.textContent = 'Incorrect!';
    secondsLeft = secondsLeft - 15;
  }







}

//Ends the quiz, function is ran when the timer reaches 0
function endQuiz() {
  console.log("end quiz test log");

}




//Event listeners
startQuizButtonEl.addEventListener("click", startQuiz);