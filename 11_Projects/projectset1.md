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

## Project 2 - 