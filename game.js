const user = document.getElementById('user');
const redScore = document.getElementById('red-score');
const userScore = document.getElementById('user-score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const roundInfo = document.getElementById('round-info');
const redPicked = document.getElementById('red-picked');
const roundResult = document.getElementById('round-result');

// Sets the username of the user. 
user.innerHTML = localStorage.getItem('player');

function getRedChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choicePicker = Math.floor(Math.random() * 3);
    return choices[choicePicker];
}

function getResult(userChoice) {
    const redChoice = getRedChoice();
    const checkResult =  redChoice + userChoice;
    switch (checkResult) {
        case 'scissorspaper':
        case 'paperrock':
        case 'rockscissors':
            updateScore(redScore)
            displayRoundInfo(redChoice, 'You lost!')
            break;
        case 'paperscissors':
        case 'rockpaper':
        case 'scissorsrock':
            updateScore(userScore)
            displayRoundInfo(redChoice, 'You win!')
            break;
        case 'paperpaper':
        case 'rockrock':
        case 'scissorsscissors':
            displayRoundInfo(redChoice, 'It\'s a draw')
            break;
    }
}

function updateScore(player) {
    player.innerHTML = parseInt(player.innerHTML) + 1;

    if (player.innerHTML == 10) {
        localStorage.setItem('userScore', userScore.innerHTML);
        localStorage.setItem('redScore', redScore.innerHTML);
    
        window.location.href = 'gameResult.html';  
    }
}

function displayRoundInfo(redChoice, result) {
    roundInfo.style.display = 'block';
    redPicked.textContent = redChoice;
    roundResult.textContent = result;
}

function playRound() {
    rock.addEventListener('click', ()  => {
        getResult('rock');
    })
    paper.addEventListener('click', () => {
        getResult('paper');
    })
    scissors.addEventListener('click', () => {
        getResult('scissors');
    })
}

playRound();


