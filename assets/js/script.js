// Global variables
var secondsLeft = 100;
var score = 0;

// Selector variables
var timerEl = document.getElementById('timer');
var startQuizButtonEl = document.getElementById('start-quiz');
var startQuizPromptEl = document.getElementById('quizStartPrompt');

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


function startQuiz() {   
    console.log("start quiz test log");
    setTime();

    



}

function endQuiz() {
    console.log("end quiz test log");

}




//Event listeners
startQuizButtonEl.addEventListener("click", startQuiz);