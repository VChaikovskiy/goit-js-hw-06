const formInput = document.querySelector('#name-input');
const formOutput = document.querySelector('#name-output');


// formInput.addEventListener("input", (event) => {
//   formOutput.textContent = event.currentTarget.value;
// });

function changeNameIf(event) {
   if (event.currentTarget.value !== "") {
     formOutput.textContent = event.currentTarget.value;
   } else {
     formOutput.textContent = "Anonymous";
}
};

formInput.addEventListener('input', changeNameIf);