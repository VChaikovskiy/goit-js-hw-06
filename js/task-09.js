const btnRef = document.querySelector(".change-color");
const bodyStyle = document.querySelector("body");
const colorRef = document.querySelector(".color");

function getRandomHexColor(event) {
  const newColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0);
  bodyStyle.style.background = newColor;
  colorRef.textContent = newColor;
  console.dir(newColor);
  // return newColor;
}

btnRef.addEventListener("click", getRandomHexColor);
