// ----------------------------- Email Validation -----------------------------
export const validateEmail = (emailEntered) => {
  let validRegex = /([A-Za-z0-9]\w+)([@])([a-z]\w+)(\.[a-z]{3})/;

  if (!emailEntered.match(validRegex)) {
    alert("Invalid email address!");
    return false;
  }
  return true;
};

// ----------------------------- Username Validation -----------------------------
export const validateUsername = (usernameEntered) => {
  let validRegexEmail = /([A-Za-z0-9]\w+)([@])([a-z]\w+)(\.[a-z]{3})/;
  let validRegexPhoneNumber = /[0-9]{10}/;
  if (!usernameEntered.match(validRegexEmail) && !usernameEntered.match(validRegexPhoneNumber)) {
    alert("Invalid Username!");
    return false;
  }
  return true;
};

// ----------------------------- Name Validation -----------------------------
export const validateName = (nameEntered) => {
  let validRegex = /([A-Za-z]\w+) ([A-Za-z]\w+)/;

  if (!nameEntered.match(validRegex)) {
    alert("Invalid Name!");
    return false;
  }
  return true;
};

// ----------------------------- Phone Validation -----------------------------
export const validatePhone = (phoneEntered) => {
  let validRegex = /[0-9]{10}/;

  if (!phoneEntered.match(validRegex)) {
    alert("Invalid Phone Number!");
    return false;
  }
  return true;
};

// ----------------------------- Password Validation -----------------------------
export const validatePassword = (passwordEntered) => {
  let validRegex = /[A-Za-z0-9!@#%&'_]{8,}/;

  if (!passwordEntered.match(validRegex)) {
    alert("Invalid Password!");
    return false;
  }
  return true;
};

// ----------------------------- Security Key Validation -----------------------------
export const validateSecurityKey = (securityKeyEntered) => {
  let validRegex = /[0-9@#%&*!]{6,10}/;
  if (!securityKeyEntered.match(validRegex)) {
    alert("Invalid Security Key!");
    return false;
  }
  return true;
};
