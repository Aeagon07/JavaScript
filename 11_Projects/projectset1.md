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