// Defining the checkAnswer function
function checkAnswer() {
    const correctAnswer = "4";

    // Retrieving the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Getting the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Adding an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
