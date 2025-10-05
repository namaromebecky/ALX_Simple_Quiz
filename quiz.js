// Function Declaration
function checkAnswer() {
    // Step 1: Identify the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Get the feedback element
    const feedback = document.getElementById('feedback');

    // Step 4: Handle the case where no answer is selected
    if (!selectedOption) {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 5: Compare the user's answer with the correct one
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Step 6: Add event listener to the Submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
