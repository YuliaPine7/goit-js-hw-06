let counterValue = 0;

const counterValueInterfaceDisplay = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');


incrementBtn.addEventListener('click', handleBtnClickIncrement);
decrementBtn.addEventListener('click', handleBtnClickDecrement);

function handleBtnClickIncrement(){
    counterValue += 1;
    counterValueInterfaceDisplay.textContent = counterValue;
}
function handleBtnClickDecrement(){
    counterValue -= 1;
    counterValueInterfaceDisplay.textContent = counterValue;
}
