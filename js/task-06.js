const input = document.querySelector('#validation-input');
const inputLength = Number(input.dataset.length);

input.addEventListener('blur', onBlurChange);

function onBlurChange(event){
    if (event.currentTarget.value.length === inputLength){
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}