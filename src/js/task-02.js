const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const createIngredientsList = list => {
    return list.map(item => {
      const ingerientsItem = document.createElement('li');
      ingerientsItem.textContent = item;
      ingerientsItem.classList.add('item');
      return ingerientsItem;
  })
}
ingredientsEl.append(...createIngredientsList(ingredients));
