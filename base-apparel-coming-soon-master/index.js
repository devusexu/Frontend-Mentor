const form = document.querySelector('form');
const email = document.querySelector('input');
const errorIcon = document.querySelector('.errorIcon');
const errorMsg = document.querySelector('.errorMsg');


form.addEventListener('submit', (event) => {
  if(!email.validity.valid) {
    event.preventDefault();

    errorIcon.style.visibility = 'visible';
    email.style.border = '0';
    email.style.outline = '2px solid var(--soft-red)';

    if(email.validity.valueMissing) {
      errorMsg.textContent = "Email address can not be empty";
    }
    if(email.validity.typeMismatch) {
      errorMsg.textContent = "Please provide a valid email";
    }
  } 
})