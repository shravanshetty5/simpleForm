const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  //check userName
  checkUsername(username);

  //check email
  checkEmail(email);

  //check password
  checkPassword(password);
  checkPassword2(password, password2);
});

function checkUsername(username) {
  //check required
  if (!isRequiredValid(username)) {
    showError(username, `${getFieldName(username)} is required`);
  } else if (!isMinLengthValid(username, 3)) {
    showError(
      username,
      `${getFieldName(username)} must be more than 3 characters`
    );
  } else if (!isMaxLengthValid(username, 15)) {
    showError(
      username,
      `${getFieldName(username)} must be less than 15 characters`
    );
  } else {
    showSuccess(username);
  }
}

function checkEmail(email) {
  if (!isRequiredValid(email)) {
    showError(email, `${getFieldName(email)} is required`);
  } else if (!isMinLengthValid(email, 6)) {
    showError(email, `${getFieldName(email)} must be more than 6 characters`);
  } else if (!isMaxLengthValid(email, 25)) {
    showError(email, `${getFieldName(email)} must be less than 25 characters`);
  } else if (!isEmailValid(email)) {
    showError(email, `not a valid email`);
  } else {
    showSuccess(email);
  }
}

function checkPassword(password) {
  if (!isRequiredValid(password)) {
    showError(password, `${getFieldName(password)} is required`);
  } else if (!isMinLengthValid(password, 6)) {
    showError(
      password,
      `${getFieldName(password)} must be more than 6 characters`
    );
  } else if (!isMaxLengthValid(password, 25)) {
    showError(
      password,
      `${getFieldName(password)} must be less than 25 characters`
    );
  } else {
    showSuccess(password);
  }
}

function checkPassword2(password, password2) {
  if (!isRequiredValid(password) && !isRequiredValid(password2)) {
    showError(password2, `${getFieldName(password)} is required`);
  } else if (!isPasswordMatching(password, password2)) {
    showError(password2, `${getFieldName(password)}'s must match`);
  } else {
    showSuccess(password2);
  }
}

function isPasswordMatching(password, password2) {
  return password.value === password2.value;
}

function isMinLengthValid(element, minLength) {
  if (element.value.trim().length > minLength) {
    return true;
  } else {
    return false;
  }
}

function isMaxLengthValid(element, maxLength) {
  if (element.value.trim().length < maxLength) {
    return true;
  } else {
    return false;
  }
}

function isEmailValid(email) {
  const value = email.value.trim();
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(`${value.toLowerCase()}`)) {
    return true;
  } else {
    return false;
  }
}

function getFieldName(element) {
  return element.id.charAt(0).toUpperCase() + element.id.slice(1).toLowerCase();
}

function isRequiredValid(element) {
  if (element.value.trim() === '') {
    return false;
  } else {
    return true;
  }
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
