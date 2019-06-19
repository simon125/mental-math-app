export const validatePhraseLength = (phrase, minLength = 3, maxLength = 10) => {
  const status = { isValid: true, message: "" };
  if (phrase.trim() === "" || phrase.trim().length < minLength) {
    status.isValid = false;
    status.message = `Field should has at least ${minLength} chars`;
  }
  if (phrase.trim().length > maxLength) {
    status.isValid = false;
    status.message = `Field should has maximum ${maxLength} chars`;
  }
  return status;
};

export const validateEmail = email => {
  const status = { isValid: "", message: "" };
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  status.isValid = re.test(String(email).toLowerCase());
  status.message = status.isValid ? "" : "Email is not correct!";
  return status;
};

export const validatePasswords = (password, repeatedPassword) => {
  const status = { isValid: true, message: "" };
  if (password.trim() === repeatedPassword.trim()) {
    status.isValid = false;
    status.message = "Passwords are not the same!";
  }
  if (password.trim().length < 4 || repeatedPassword.trim().length < 4) {
    status.isValid = false;
    status.message = "Password should has at least 4 chars!";
  }

  return status;
};
