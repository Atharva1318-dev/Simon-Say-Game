let gameSeq = [];
let userSeq = [];
let highestScore = 0;
let btns = ["green", "yellow", "blue", "red"];
let started = false;
let level = 0;
let h4 = document.querySelector("h4");
let allBtn = document.querySelectorAll(".btn");
document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 570);
}
function levelUp() {
    userSeq = [];
    level++;
    h4.innerHTML = `Level ${level}`;
    let ranIdx = Math.floor(Math.random() * 4);
    let ranColor = btns[ranIdx];
    gameSeq.push(ranColor);
    console.log(gameSeq);
    let ranBtn = document.querySelector(`.${ranColor}`);
    flash(ranBtn);
};
for (btn of allBtn) {
    btn.addEventListener("click", btnPress);
};
function checkAns(idx) {
    console.log("Current level is", level);
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1100);
        }
    }
    else {
        if (level > highestScore) {
            highestScore = level;
        }
        h4.innerHTML = `Game Over! Your score was ${level}<br>Your highest score is ${highestScore}<br>Press any key to restart`;
        console.log("game over");
        reset();
    }
};
function btnPress() {
    let btn = this;
    userSeq.push(btn.getAttribute('id'));
    flash(btn);
    checkAns(userSeq.length - 1);
};
function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(function () {
        body.style.backgroundColor = "";
    }, 400);
};