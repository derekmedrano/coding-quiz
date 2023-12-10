// Global variables
var secondsLeft = 100;
var score = 0;

// Selector variables
var timerEl = document.getElementById('timer');
var startQuizButtonEl = document.getElementById('start-quiz');
var startQuizPromptEl = document.getElementById('quizStartPrompt');
var quizAnswersEl = document.getElementById('quizQuestions');
// var quizAnswersOpt = document.getElementById('quizAnswersOpt');

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft + " seconds remaining";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to end quiz and prompt highscore entry
        endQuiz();
      }
  
    }, 1000);
  }

  allQuizQuestions = {
    'Commonly used data types do NOT include_______' :['1. strings', '2. booleans', '3. alerts', '4. numbers', 2],

    'The condition in an if / else statement is enclosed within_______.' :['1. quotes', '2. curly brackets', '3. square brackets', '4. parentheses', 3],

    'Arrays in JavaScripts can be used to store _________' :['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above', 3],

    'String values must be enclosed within ___________ when being assigned to variables' :['1. curly brackets', '2. commas', '3. quotes', '4. parentheses', 0],

    'A very useful tool used during development and debugging for printing content to the debugger is:' :['1. JavaScript', '2. terminal/bash', '3. for loops', '4 console.log', 3]

  }

function loadQuizQuestion () {

}

function loadQuizAnswers () {

}

function startQuiz() {   
    console.log("start quiz test log");
    setTime();


    



}



function endQuiz() {
    console.log("end quiz test log");

}




//Event listeners
startQuizButtonEl.addEventListener("click", startQuiz);