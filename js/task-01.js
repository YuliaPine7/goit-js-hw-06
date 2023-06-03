const listEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${listEl.length}`);

const returnListValues = (list) => {
    list.forEach(item => {
        console.log(`Category: ${item.firstElementChild.textContent}`)
        console.log(`Elements: ${item.querySelectorAll('li').length}`)
         }
      )
}
returnListValues(listEl);





