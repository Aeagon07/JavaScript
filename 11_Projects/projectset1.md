# Project Realated to DOM

## Project Link
[click here]()

# Solution Code

## Project 1 - Colour Changer

```javascript
const buttons = document.querySelectorAll('.button')
console.log(buttons) // Create the node list of the elements in button id

const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
    // console.log(e)
    // console.log(e.target) // Jo hame button print kar ke mil raha tha wo bus jis colour pe click kar ke uska span mil jata hai..
    const color = e.target.id
    switch (color) {
      case 'grey': 
        body.style.backgroundColor = color
        break;
      case 'blue':
        body.style.backgroundColor = color
        break;
      case 'white':
        body.style.backgroundColor = color
        break;
      case 'yellow':
        body.style.backgroundColor = color
        break;
    }
  })
})
```

## Project 2 - BMI Calculator
```javascript
const form = document.querySelector('form')
//  No - Because you don't want value store is empty when page loads, that's why after click it store them
// const height = parseInt(document.querySelector('#height').v

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const res = document.querySelector('#results')

  // some checks
  if(height === '' || height < 0 || isNaN(height)){
    res.innerHTML = "Please give a valid height"
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    res.innerHTML = "Please give a valid weight"
  }else {
    const formula = (weight / ((height*height)/10000)).toFixed(2)
    res.innerHTML = `<span>${formula}</span>`
  }
})
```

## Project 3 - Digital Clock
```javascript
const clock = document.getElementById('clock')

// let date = new Date()
// console.log(date.toLocaleString())

// But hame baar baar refresh na karna padhe page ko ye continuosly mere ko time deta rahe.. 

// There is small method that control all javascripts events
// It useful when you gave a method and wnat to repeate after some interval of time 
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)
```

## Project 4 - Guess a Number
```javascript
let number = parseInt(Math.random() * 100 + 1);
// console.log(number)

const user = document.querySelector('#guessField')
const submit = document.querySelector('#subt') 

const guessNumber = document.querySelector('.guesses')
const guessRem = document.querySelector('.lastResult')

const direction = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

// How we gone do that, user see the previous prediction with showing him a array
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(user.value)
    validGuess(guess)
  })
}

function validGuess(guess){
  // It just check the value is bet 1 to 100 or not
  if(isNaN(guess) || guess < 1 || guess > 100){
    alert(`Please Enter Valid Number! Your ${guess} is not Valid`)
  }else {
    prevGuess.push(guess);
    if(numGuess > 10){
      displayGuess(guess)
      displayMessage(`Game Over!! Random Number was ${number}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  // checks weather the value is high, low or equal
  if(guess === number){
    displayMessage(`You Guessed it right!`)
    endGame()
  }else if(guess < number){
    displayMessage(`Number is TOO Low`)
  }else if(guess > number){
    displayMessage(`Number is TOO High`)
  }
}

function displayMessage(message){
  // Gives you message
  direction.innerHTML = `<h3>${message}</h3>`  

}

function displayGuess(guess){
  // values cleaning, guess array and reminaning updation
  // Cleaning
  user.value = ''
  guessNumber.innerHTML += `${guess}, `
  numGuess++;
  guessRem.innerHTML = `${11 - numGuess}`
}

function endGame(){
  user.value = ''
  user.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id= "newGame"> Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    number = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1;
    guessNumber.innerHTML = ''
    guessRem.innerHTML = `${11 - numGuess}`
    user.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  })
}
```