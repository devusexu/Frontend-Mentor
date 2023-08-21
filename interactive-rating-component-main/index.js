const inputs = document.querySelectorAll('input');
const survey = document.querySelector('.rating');
const rating =  document.querySelector('.thank-you div span');
const result = document.querySelector('.thank-you');
const form = document.querySelector('form');

// default checked value
let checked = document.querySelector('input:checked').value; 

form.addEventListener('submit', (event) => {
  event.preventDefault();
  result.className = "thank-you";
  survey.className = "inactive"
  rating.textContent = checked;
})

for(let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', (e) => {
    checked = e.target.value;
  })
}
