const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
let errorMsg;
let errorIcon;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  for (let i = 0; i < inputs.length; i++) {
    errorMsg = document.querySelector(`.${inputs[i].parentElement.className} > .errorMsg`);
    errorIcon = document.querySelector(`.${inputs[i].parentElement.className} > .errorIcon`);

    if (!inputs[i].validity.valid) {
      errorIcon.style['visibility'] = 'visible';
      inputs[i].className = 'error';

      if (inputs[i].validity.valueMissing) {
        errorMsg.textContent = `${inputs[i].getAttribute('aria-label')} cannot be empty`;
      } else if (inputs[i].validity.typeMismatch) {
        errorMsg.textContent = `Looks like this is not an email`;
        inputs[i].style['color'] = 'var(--red)';
      }
    } else {
      errorIcon.style['visibility'] = 'hidden';
      errorMsg.textContent = '';
      inputs[i].className = '';
      inputs[i].style['color'] = 'var(--dark-blue)';
    }
  }
});