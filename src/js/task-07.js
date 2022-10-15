const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const textCont = textEl.textContent;
const fontSize = `${inputEl.value}px`;

inputEl.addEventListener('input', onInputChange);
function onInputChange() {
    const fontSizeRange = Number(inputEl.value);
    textEl.style.fontSize = `${fontSizeRange}px`;
    console.log(fontSizeRange);
};

console.log(fontSize);
