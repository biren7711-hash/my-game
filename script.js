let maxNumber = 10;
let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
let lives = 3;
let gameOver = false;
let randomNumber = Math.floor(Math.random() * 10) + 1;
let lives = 3;
let gameOver = false;

// Lấy điểm từ localStorage (nếu có)
let score = localStorage.getItem("score") 
    ? Number(localStorage.getItem("score")) 
    : 0;

document.getElementById("score").innerText = "🏆 Điểm: " + score;

// Bấm Enter để đoán
document.getElementById("guess").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

function checkGuess() {
    if (gameOver) return;

    let userGuess = Number(document.getElementById("guess").value);
    let result = document.getElementById("result");
    let livesText = document.getElementById("lives");

    if (!userGuess) {
        result.innerText = "⚠ Nhập số đi!";
        return;
    }

    if (userGuess === randomNumber) {
        result.innerText = "🎉 Bạn thắng!";
        document.body.style.backgroundColor = "green";

        score += 10;
        localStorage.setItem("score", score);
        document.getElementById("score").innerText = "🏆 Điểm: " + score;

        gameOver = true;
    } else {
        lives--;
        livesText.innerText = "❤️ Mạng còn lại: " + lives;

        if (lives === 0) {
            result.innerText = "💀 Bạn thua! Số đúng là " + randomNumber;
            document.body.style.backgroundColor = "darkred";
            gameOver = true;
        } else if (userGuess > randomNumber) {
            result.innerText = "📉 Quá lớn!";
        } else {
            result.innerText = "📈 Quá nhỏ!";
        }
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    lives = 3;
    gameOver = false;

    document.getElementById("result").innerText = "";
    document.getElementById("guess").value = "";
    document.getElementById("lives").innerText = "❤️ Mạng còn lại: 3";
    document.body.style.backgroundColor = "#222";

}
