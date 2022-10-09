const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients')
const listElemAdd = [];

ingredients.forEach(ingredient => {
  const siteNavItem = document.createElement('li');
  siteNavItem.classList.add('item');
  siteNavItem.textContent = ingredient;
  listElemAdd.push(siteNavItem);
});

listEl.append(...listElemAdd);

console.log(listEl);
