#project relate to dom

#project link

#solution code 

#project 1

solution code

```javascript

const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

button.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(e){
console.log(e)
console.log(e.target)
if(e.target.id === 'grey'){
  body.style.backgroundColor = "grey"
}else if(e.target.id === 'white') {
  body.style.backgroundColor = "white"
}else if(e.target.id === 'blue') {
  body.style.backgroundColor = "blue"
}else if(e.target.id === 'yellow') {
  body.style.backgroundColor = "yellow"
}
  })
})
```

```javascript project 2 solution

const myForm = document.querySelector("form")


myForm.addEventListener("submit", function(e){
  e.preventDefault()

const height =  parseInt(document.querySelector("#height").value)
const weight =  parseInt(document.querySelector("#weight").value)
const results =  document.querySelector("#results")
const Msg =  document.querySelector("#Msg")
 

if(height === '' || height<0 || isNaN(height)){
results.innerHTML = `please give a valid height${height}`;
}else if(weight === '' || weight<0 || isNaN(weight)){
results.innerHTML = `please give a valid height${weight}`;
}else { 
 const bmi = (weight / ((height*height)/10000)).toFixed(2)
 results.innerHTML = `<span>${bmi}</span>`
 if(bmi<18.6){
  Msg.innerHTML = `<span> You are Under Weight</span>`
} else if(bmi>18.6 && bmi<=24.9){
  Msg.innerHTML = `<span> You are in a Normal range</span>`
}else if(bmi>24.9){
  Msg.innerHTML = `<span> You are Overweight</span>`
}
}
})

```

``` javascript my project 3 solution

const clock = document.getElementById('clock')

setInterval(function () {
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
```javascript project 4
let randomNumber = (parseInt(Math.random()*100+1))
const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')


const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
 const guess = parseInt(userinput.value)
 console.log(guess)
 validateGuess(guess)
  })
}
function validateGuess(guess){
if(isNaN(guess)){
  alert('please enter a valid number')
}else if(guess<1){
  alert('please enter a  number greater the 1')
}else if(guess>100){
  alert('please enter a  number less then 1')
}else{
  prevGuess.push(guess)
  if(numGuess === 11){
    displayGuess(guess)
    displayMessage(`game over, random number was ${randomNumber}`)
    endGame()
  }else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
}

function checkGuess(guess){
if(guess === randomNumber){
  displayMessage(`you gussed it right`)
  endGame()
}else if(guess<randomNumber){
  displayMessage(`Number is TOOO low`)
}else if(guess>randomNumber){
  displayMessage(`Number is TOOO High`)
}
}

function displayGuess(guess){
  userinput.value = ''
  guessslot.innerHTML += `${guess}    `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
const newGame = document.querySelector('#newGame')
newGame.addEventListener('click',function(e){
  randomNumber = (parseInt(Math.random()*100+1))
  prevGuess = []
  numGuess = 1
  guessslot.innerHTML = ''
  remaining.innerHTML = `${11-numGuess}`
  userinput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame = true
})
}


function endGame(){
  userinput.value = ''
  userinput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = '<h2 id="newGame">Start new Game</h2>';
  startOver.appendChild(p)
  playGame = false
  newGame()
}
```