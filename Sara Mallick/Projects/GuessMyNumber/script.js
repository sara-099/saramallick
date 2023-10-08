'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent)
let highScore = Number(document.querySelector('.highscore').textContent)

document.querySelector('.check').addEventListener('click', function () {
    const userVal = Number(document.querySelector('.guess').value)

    // Check if No entry
    if (!userVal) {
        document.querySelector('.message').textContent = 'No Number'
    } else if (userVal !== guessNumber) {
        if (score) {
            document.querySelector('.message').textContent = userVal > guessNumber ? 'Too High!' : 'Too Low!'
            score -= 1
            document.querySelector('.score').textContent = score
        } else {
            document.querySelector('.message').textContent = 'You lost the game!'
        }
    } else {
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('.number').textContent = guessNumber
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    guessNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.message').textContent = 'Start guessing....'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
});