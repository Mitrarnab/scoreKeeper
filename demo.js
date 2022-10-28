
// create variables
let p1 = {
    score: document.querySelector('#p1Score'),
    button: document.querySelector('#p1Button'),
    number: 0,
    name: "Player One"
}


let p2 = {
    score: document.querySelector('#p2Score'),
    button: document.querySelector('#p2Button'),
    number: 0,
    name: "Player Two"
}

let restart = document.querySelector('#reset');
let lavel = document.querySelector('#lavel');
let h3 = document.querySelector('h3');



// variables internally
let winningScore = 3;
let isGameOver = false;



// reset function declearation 
function reset() {
    isGameOver = false;
    p1.number = 0;
    p2.number = 0;
    p1.button.disabled = false;
    p2.button.disabled = false;
    p1.score.textContent = '0';
    p2.score.textContent = '0';
    p1.score.classList.remove('winner', 'loser');
    p2.score.classList.remove('winner', 'loser');
    h3.innerHTML = "";
}



// function for update score 
function scoreUpdate(player, opponent) {
    if (!isGameOver) {
        player.number += 1;
        if (player.number == winningScore) {
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.score.classList.add('winner');
            opponent.score.classList.add('loser');
            h3.innerHTML = player.name + " " + 'is Winner';
        }
        player.score.textContent = player.number;
    }
}



// play to selection 
lavel.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

// player one button
p1.button.addEventListener('click', function () {
    scoreUpdate(p1, p2)
});

// player two button 
p2.button.addEventListener('click', function () {
    scoreUpdate(p2, p1)
});

// click on reset 
restart.addEventListener('click', reset)

