
// create variables
let p1Score = document.querySelector('#p1Score');
let p2Score = document.querySelector('#p2Score');
let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let restart = document.querySelector('#reset');
let lavel = document.querySelector('#lavel');
let h3 = document.querySelector('h3');

// variables internally
let p2number = 0;
let p1number = 0;
let winningScore = 3;
let isGameOver = false;

// play to selection 
lavel.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

// player one button
p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1number += 1;
        if (p1number == winningScore) {
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
            p1Score.classList.add('winner');
            p2Score.classList.add('loser');
            h3.innerHTML = 'Player One is Winner';
        }
        p1Score.textContent = p1number;
    }
});

// player two button 
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2number += 1;
        if (p2number == winningScore) {
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
            p2Score.classList.add('winner');
            p1Score.classList.add('loser');
            h3.innerHTML = 'Player Two is Winner';
        }
        p2Score.textContent = p2number;
    }
});

// click on reset 
restart.addEventListener('click', reset)

// reset function declearation 
function reset() {
    isGameOver = false;
    p1number = 0;
    p2number = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Score.textContent = '0';
    p2Score.textContent = '0';
    p1Score.classList.remove('winner', 'loser');
    p2Score.classList.remove('winner', 'loser');
    h3.innerHTML = "";
}