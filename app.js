let gameSeq = [];
let userSeq = [];
let scorebored = [];

let btns = ['yellow', 'red', 'purple', 'green'];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is Started ");
        started = true;
        levelup();
    }
})
function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let ranbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq)
    gameflash(ranbtn);


}
function checkAns(idx) {


    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup(), 1000);

        }
    }
    else {
        h2.innerHTML = `Game Over! <b> your score is ${level} </b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)


        scorebored.push(level);
        let highestScore = 0;
        for (let i = 0; i < scorebored.length; i++) {
            if (scorebored[i] > highestScore) {
                highestScore = scorebored[i];
            }
            else {
                highestScore = highestScore;
            }
        }

        h2.innerText = `highest Score : ${highestScore} \n your Score: ${level}.Press any key to start`
        reset();


    }
}

function btnpress() {

    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}