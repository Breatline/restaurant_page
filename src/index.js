import './style.css'
const element = document.createElement('div')

function component(){
    element.innerHTML = "Hello";
    element.classList.add('hello');
    return element
}

document.body.appendChild(component())