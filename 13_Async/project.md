# Async Project 

# Solution Code

## Project 6 - Ultimate Color 
```Javascript
// Generate the random color
const randomColor =  function(){
  const hex = '0123456789ABCDEF';
  let color = '#';

  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color
}
let interval;

document.querySelector('#start').addEventListener('click', function(){
  if(!interval){
    interval = setInterval(function(){
      document.body.style.backgroundColor = randomColor()
    }, 1000);
  }
})

document.querySelector('#stop').addEventListener('click', function(){
  clearInterval(interval)
  console.log("Stopped!")
  interval = null
})

```

# Project 5 - Keyboard
```Javascript
// Generate the keys and their code with magic

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class = 'color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div> 
  `
})

```