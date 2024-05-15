const KYE_STORAGE = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
// const formData = { email: '', message: '' };

formEl.addEventListener('submit', evt => {
  evt.preventDefault();

  const formData = new FormData(formEl);

  const userData = {
    email: formData.get('email').trim(),
    message: formData.get('message').trim(),
  };
  if (userData.email === '' || userData.message === '') {
    alert('Fill please all fields');
  }
  console.log(userData);

  localStorage.removeItem(KYE_STORAGE);

  evt.target.reset();
});

formEl.addEventListener('input', evt => {
  const formData = new FormData(formEl);

  const userData = {
    email: formData.get('email').trim(),
    message: formData.get('message').trim(),
  };
  saveToLS(KYE_STORAGE, userData);
});

function saveForm() {
  const data = loadFromLS(KYE_STORAGE) || {};

  formEl.elements.email.value = data.email || '';

  formEl.elements.message.value = data.message || '';
}
saveForm();

//!===================================================
function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key) {
  const data = localStorage.getItem(key);
  try {
    const result = JSON.parse(data);
    return result;
  } catch (err) {
    return data;
  }
}
