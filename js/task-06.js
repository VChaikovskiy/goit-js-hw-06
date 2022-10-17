const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onBlurInput);

function onBlurInput (event) {
    if (event.currentTarget.value.length == inputEl.dataset.length){
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    };
    return inputEl;
};

console.log(onBlurInput);