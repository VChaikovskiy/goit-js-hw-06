const formInput = document.querySelector('#name-input');
const formOutput = document.querySelector('#name-output');


formInput.addEventListener("input", (event) => {
  formOutput.textContent = event.currentTarget.value;
});

