// Quiz questions
const quizData = [
    {question: "17 + 25 =", answer: 42 },
    {question: "48 - 23 =", answer: 25 },
    {question: "14 x 13 =", answer: 182 },
    {question: "33 + 47 =", answer: 80 },
    {question: "96 - 57 =", answer: 39 },
    {question: "23 x 19 =", answer: 437 },
    {question: "135 ÷ 15 =", answer: 9 },
    {question: "57 + 68 =", answer: 125 },
    {question: "82 - 39 =", answer: 43 },
    {question: "28 x 16 =", answer: 448 },
    {question: "144 ÷ 12 =", answer: 12 },
    {question: "72 ÷ 8 =", answer: 9 },
    {question: "93 + 57 =", answer: 150 },
    {question: "127 - 84 =", answer: 43 },
    {question: "36 x 28 =", answer: 1008 },
    {question: "324 ÷ 9 =", answer: 36 },
    {question: "72 + 89 =", answer: 161 },
    {question: "178 - 63 =", answer: 115 },
    {question: "47 x 39 =", answer: 1833 },
    {question: "924 ÷ 11 =", answer: 84 },
    {question: "108 + 73 =", answer: 181 },
    {question: "237 - 146 =", answer: 91 },
    {question: "58 x 39 =", answer: 2262 },
    {question: "1794 ÷ 18 =", answer: 99 },
    {question: "247 + 136 =", answer: 383 },
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = [];

// Function to load question onto the page
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answerElement = document.getElementById("answer");
    const resultElement = document.getElementById("result");

    // Display the current question
    questionElement.innerText = quizData[currentQuestion].question;

    // Clear previous answer and result
    answerElement.value = "";
    resultElement.innerText = "";
}

// Call loadQuestion function when the page loads to display the first question
window.onload = loadQuestion;

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    const resultElement = document.getElementById("result");
    
    if (!isNaN(userAnswer)) {
        if (userAnswer === quizData[currentQuestion].answer) {
            resultElement.innerText = "Correct!";
        } else {
            resultElement.innerText = "Wrong!";
        }
    } else {
        resultElement.innerText = "Please enter a valid number.";
        return; 
    }

    // Display the result for a moment before proceeding to the next question
    setTimeout(function() {
        resultElement.innerText = ""; 
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else { 
            // Quiz completed, display correct and incorrect answers
            document.getElementById("question").innerText = "Quiz completed!";
            document.getElementById("answer").style.display = "none";
            resultElement.innerText = "Well done! Total correct answers: " + correctAnswers;
            if (incorrectAnswers.length > 0) {
                resultElement.innerHTML += "<br><br>Incorrect answers:<br>";
                incorrectAnswers.forEach(function(item) {
                    resultElement.innerHTML += item.question + " Correct answer: " + item.correctAnswer + ", Your answer: " + item.userAnswer + "<br>";
                });
            }
        }
    }, 1500);
}