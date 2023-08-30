const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const player1score = document.querySelector('.player1score');
const player2score = document.querySelector('.player2score');
const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
const agree = document.querySelector('.agree');
const gameHashiv = document.querySelector('.game-hashiv');

const gameScore = 100;
let hashiv1 = 0;
let hashiv2 = 0;
let hashiv = 0;
let flag = true;

function random() {
    return Math.floor(Math.random() * 11);
}

function restart() {
    hashiv1 = 0;
    hashiv2 = 0;
    hashiv = 0;
    player1.style.boxShadow =  '';
    player2.style.boxShadow =  '';
    player1score.innerHTML = '0';
    player2score.innerHTML = '0';
    score1.innerHTML = '';
    score2.innerHTML = '';
    gameHashiv.innerHTML = 'Again';
    gameHashiv.style.cursor = 'pointer';
    container.style.transform = 'translateY(40px)';
}

function checkWinner() {
    if (hashiv1 >= gameScore) {
        restart();
        h2.innerHTML = 'Player 1 Win';
    }
    if (hashiv2 >= gameScore) {
        restart(); 
        h2.innerHTML = 'Player 2 Win';
    }
}

player1.addEventListener('click', () => {
    if (flag === true) {
        let num  = random(); 
        score1.innerHTML = num;
    
        if (num !== 0) {
            hashiv +=  num;
            score2.innerHTML = '';
            player1.style.boxShadow =  '4px 4px 9px #ED5C4E';
        } else {
            flag = false;
            hashiv = 0;
            player1.style.boxShadow =  '';
            player2.style.boxShadow =  '4px 4px 9px #ED5C4E';
        }
    }
});

player2.addEventListener('click', () => {
    if (flag === false) {
        let num  = random();
        score2.innerHTML = num;
    
        if (num !== 0) {
            hashiv +=  num;
            score1.innerHTML = '';
            player2.style.boxShadow =  '4px 4px 9px #ED5C4E';
        } else {
            flag = true;
            hashiv = 0;
            player2.style.boxShadow =  '';
            player1.style.boxShadow =  '4px 4px 9px #ED5C4E';
        }
    }
});

agree.addEventListener('click', () => {
    if (flag === true) {
        hashiv1 += hashiv;
        hashiv = 0;
        player1score.innerHTML = hashiv1;
        player1.style.boxShadow =  '';
        player2.style.boxShadow =  '4px 4px 9px #ED5C4E';
        flag = false;
    } else {
        hashiv2 += hashiv;
        hashiv = 0;
        player2score.innerHTML = hashiv2;
        player2.style.boxShadow =  '';
        player1.style.boxShadow =  '4px 4px 9px #ED5C4E';
        flag = true;
    }
    checkWinner();
});

play.addEventListener('click', () => {
    gameRules.style.display = 'none';
    agree.style.opacity = '1';
});

gameHashiv.addEventListener('click', () => {
    gameHashiv.innerHTML = '100';
    container.style.transform = 'unset';
    h2.innerHTML = '';
})