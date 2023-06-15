var h1One = document.querySelector('#one')
var h1Two = document.querySelector('#two')
var h1Three = document.querySelector('#three')

h1One.addEventListener('mouseover', function(){
    h1One.textContent = 'MOuse over me'
    h1One.style.color = 'red'
})

h1One.addEventListener('mouseout', function(){
    h1One.textContent = 'Mouse Out'
    h1One.style.color = 'green'
})

h1Two.addEventListener('click', function(){
    h1One.textContent = 'Hover ME!'
    h1One.style.color = 'black'
    h1Two.textContent = 'Click ON'
    h1Two.style.color = 'green'
})

h1Three.addEventListener('dblclick', function(){
    h1Three.textContent = 'Double Clicked'
    h1Three.style.color = 'blue'
})