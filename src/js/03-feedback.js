const throttle = require('lodash.throttle');

const LOCAL_KEY = 'feedback-form-state';

const feedback_form = document.querySelector('.feedback-form');
const emailInput = feedback_form.querySelector('input[name="email"]');
const messageInput = feedback_form.querySelector('textarea[name="message"]');

feedback_form.addEventListener('input', throttle(saveFormState, 500));

window.addEventListener('DOMContentLoaded', fillFormFields());

feedback_form.addEventListener('submit', clearFormState);

function saveFormState() {
  const objectData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  localStorage.setItem(LOCAL_KEY, JSON.stringify(objectData));
}

function fillFormFields() {
  const savedState = localStorage.getItem(LOCAL_KEY);

  if (savedState) {
    const { email, message } = JSON.parse(savedState);
    emailInput.value = email;
    messageInput.value = message;
  }
}

function clearFormState(event) {
  event.preventDefault();

  const objectData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.removeItem(LOCAL_KEY);
  emailInput.value = '';
  messageInput.value = '';

  console.log('Form submitted:', objectData);
}
