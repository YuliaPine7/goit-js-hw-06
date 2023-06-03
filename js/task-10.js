let boxes = document.querySelector('#boxes');

const numberOfBoxesToAdd = document.querySelector('#controls > input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount){

  amount = numberOfBoxesToAdd.value;

  let divHTML = '';
  let boxSize = 30;

  for(let i = 1; i <= amount; i+=1){
    const oneDiv =  `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
    boxSize += 10;
    divHTML += oneDiv;
  }
  
  boxes.innerHTML = divHTML;
}

function destroyBoxes(){
  boxes.innerHTML = '';
  numberOfBoxesToAdd.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}