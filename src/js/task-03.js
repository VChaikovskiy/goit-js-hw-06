const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];



const imagesHtml = images.map(image => {
  return `
  <li class="card">
    <img class="img" src="${image.url}" alt="${image.alt}"
  </li>
  `
}).join("");

const galleryEl = document.querySelector('.gallery')

galleryEl.insertAdjacentHTML('afterbegin', imagesHtml);



console.log()








// const galleryArray = [];
// images.forEach(image => {
//   const galleryItem = document.createElement('li');
//   const photoEl = document.createElement('img');
//   galleryItem.classList.add('card');
//   photoEl.scr = image.url;
//   photoEl.alt = image.alt;
//   galleryItem.append(photoEl);
//   galleryArray.push(galleryItem);

 
// })
// galleryEl.append(...galleryArray);
// // galleryEl.insertAdjacentHTML('afterbegin', galleryArray);

// console.log(galleryArray);
// console.log(galleryEl);
