const refs = {
    input: document.querySelector('#name-input'),
    greeting: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange)

function onInputChange(event){
    event.currentTarget.value === ""
    ? refs.greeting.textContent = "Anonymous"
    : refs.greeting.textContent = event.currentTarget.value;  
}