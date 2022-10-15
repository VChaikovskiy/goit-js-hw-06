const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInputChange);
function onInputChange() {
    const fontSizeRange = Number(inputEl.value);
    textEl.style.fontSize = `${fontSizeRange}px`;
    console.log(fontSizeRange);
};

// console.log(fontSize);

// const textCont = textEl.textContent;
// const fontSize = `${inputEl.value}px`;