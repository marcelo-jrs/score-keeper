const chooseButton = document.querySelector('.choose');
const list = document.querySelector('.list');
const buttonLoop = document.querySelector('.hardReset');

chooseButton.addEventListener('click', () => {
    list.style.display = 'block';
    chooseButton.style.display = 'none';
})

const scoreDiv = document.querySelector('.scoreDiv');
const image = document.querySelector('img');
const buttonDiv = document.querySelector('.buttonDiv');
const tennisButton = document.querySelector('.tennis');

tennisButton.addEventListener('click', () => {
    image.src ='images/image-tennis.jpg';
    list.style.display = 'none';
    scoreDiv.style.display = 'block';
    buttonDiv.style.pointerEvents = 'all';
    buttonLoop.style.display = 'block';
})

const soccerButton = document.querySelector('.soccer');

soccerButton.addEventListener('click', () => {
    image.src ='images/image-soccer.jpg';
    list.style.display = 'none';
    scoreDiv.style.display = 'block';
    buttonDiv.style.pointerEvents = 'all';
    buttonLoop.style.display = 'block';
})


const pingPongButton = document.querySelector('.pingPong');

pingPongButton.addEventListener('click', () => {
    image.src ='images/image-pingPong.jpg';
    list.style.display = 'none';
    scoreDiv.style.display = 'block';
    buttonDiv.style.pointerEvents = 'all';
    buttonLoop.style.display = 'block';
})

const videoGameButton = document.querySelector('.videoGame');

videoGameButton.addEventListener('click', () => {
    image.src ='images/image-videoGame.jpg';
    list.style.display = 'none';
    scoreDiv.style.display = 'block';
    buttonDiv.style.pointerEvents = 'all';
    buttonLoop.style.display = 'block';
})

const basketballButton = document.querySelector('.basketball');

basketballButton.addEventListener('click', () => {
    image.src ='images/image-basketball.jpg';
    list.style.display = 'none';
    scoreDiv.style.display = 'block';
    buttonDiv.style.pointerEvents = 'all';
    buttonLoop.style.display = 'block';
})

const playerOneButton = document.querySelector('.playerOne');
const playerOneDisplay = document.querySelector('.playerOneScore');
let p1Score = 0

playerOneButton.addEventListener('click', () => {
    p1Score += 1;
    playerOneDisplay.innerText = p1Score;
})

const playerTwoButton = document.querySelector('.playerTwo');
const playerTwoDisplay = document.querySelector('.playerTwoScore');
let p2Score = 0

playerTwoButton.addEventListener('click', () => {
    p2Score += 1;
    playerTwoDisplay.innerText = p2Score;
})

const resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    playerOneDisplay.innerText = p1Score;
    playerTwoDisplay.innerText = p2Score;
})

buttonLoop.addEventListener('click', () => {
    chooseButton.style.display = 'block';
    scoreDiv.style.display = 'none';
    buttonDiv.style.pointerEvents = 'none';
    buttonLoop.style.display = 'none';
})
