// Selector variables
var clearBtnEl = document.getElementById('clear');
var highscoresEl = document.getElementById('highscores');

// Retrieves highscores and sorts them based on the value of time left
var scores = JSON.parse(localStorage.getItem('scores')) || [];
scores.sort(function(a,b) {
return b.secondsLeft - a.secondsLeft;

} )
// Gets the score values from local storage and appends them to the page
for (var i=0; i < scores.length; i++) {
    var score = document.createElement('li');
    score.innerText = scores[i].initials + ' ' + scores[i].secondsLeft;
    score.classList.add('score-style');
    document.getElementById('highscores').appendChild(score);
}

// Clears the scores by replacing the values with an empty array, then removes the scores from the screen.
function clearScores() {
    localStorage.setItem('scores', JSON.stringify([]));
    highscoresEl.style.display = 'none';

    

}

// Clear button event listener
clearBtnEl.addEventListener('click', clearScores);