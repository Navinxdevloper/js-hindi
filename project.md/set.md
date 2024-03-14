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
