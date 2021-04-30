var p1button = document.getElementById("p1");
var p2button = document.querySelector("#p2");
var p1dis = document.querySelector("#p1display");
var p2dis = document.getElementById("p2display");
var final = document.querySelector("#finalscore");
var reset = document.getElementById("reset");
var numInput = document.querySelector("input");
var finalDisplay = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1button.addEventListener("click", function () {
    if (!gameOver) {
        p1score++;
        if (p1score === winningScore) {
            p1dis.classList.add("winner");
            gameOver = true;
        }
        p1dis.textContent = p1score;
    }
    
});

p2button.addEventListener("click", function () {
    if (!gameOver) {
        p2score++;
        if (p2score === winningScore) {
            gameOver = true;
            p2dis.classList.add("winner");
        }
        p2dis.textContent = p2score;
    }
});

function resetAll() {
    p1score = 0;
    p2score = 0;
    p1dis.textContent = p1score;
    p2dis.textContent = p2score;
    p1dis.classList.remove("winner");
    p2dis.classList.remove("winner");
    gameOver = false;
}

reset.addEventListener("click", function() {
    resetAll();
});

function reset() {
    p1score = 0;
    p2score = 0;
    p1dis.textContent = p1score;
    p2dis.textContent = p2score;
    p1dis.classList.remove("winner");
    p2dis.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function() {
    finalDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    resetAll();
})
