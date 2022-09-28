const container = document.getElementById('container');

const header = document.createElement('h1');
header.classList.add('result-header');
container.appendChild(header);

const userScore = localStorage.getItem('userScore');
const redScore = localStorage.getItem('redScore');

const finalScore = document.createElement('p');
finalScore.innerHTML = `The file score is: ${userScore} - ${redScore}`;
finalScore.classList.add('final-score');
container.appendChild(finalScore);

const createGift = () => {
    const giftDescription = document.createElement('h4');
    giftDescription.classList.add('gift-description');

    giftDescription.innerHTML = 'Click the gift icon to open your gift';

    const gift = document.createElement('img');
    gift.src = 'images/gift.png';
    gift.classList.add('gift');

    gift.addEventListener('click', () => {
        window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
    })

    const giftContainer = document.createElement('div');
    giftContainer.appendChild(giftDescription);
    giftContainer.appendChild(gift);
    container.appendChild(giftContainer);
}

const creatSadFace = () => {
    const sadFaceImage = document.createElement('img');
    sadFaceImage.src = 'images/sadFace.png';
    sadFaceImage.classList.add('sad-face-image');

    const sadFaceContainer = document.createElement('div');
    sadFaceContainer.appendChild(sadFaceImage);
    container.appendChild(sadFaceContainer);
}

if (userScore < redScore) {
    header.innerHTML = 'Congratulations, you beat Red!';
    createGift();
} else {
    header.innerHTML = 'You lost to Red!';
    creatSadFace();
}

const playAgain = document.createElement('a');
playAgain.href = 'game.html';
playAgain.innerHTML = 'Play again';
playAgain.classList.add('play-again');
container.appendChild(playAgain);




