import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const feedbackForm = document.querySelector('.feedback-form');

populateFormSubmit();
feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(onTakeInputValue, 500));

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value.trim() === '' || message.value === '') {
    return alert(
      'All fields must be feeld. Thank you!)'
    );
  }
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  // formData = {};
}

function onTakeInputValue(event) {
  formData[event.target.name] = event.target.value.trim();
  const formDataJson = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJson);
}

function populateFormSubmit() {
  let savedMessageJSON = localStorage.getItem(STORAGE_KEY);
  try {
    if (savedMessageJSON) {
      savedMessageJSON = JSON.parse(savedMessageJSON);
      Object.entries(savedMessageJSON).forEach(
        ([key, value]) => {formData[key] = value;
          feedbackForm[key].value = value}
      ); 
    }
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
