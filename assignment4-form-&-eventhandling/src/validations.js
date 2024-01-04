  // ----------------------------- Name Validation -----------------------------
export const validateName = (nameEntered) => {
    let validRegex = /^([A-Za-z]{1,} [A-za-z]{1,})$/g;
    if (nameEntered.match(validRegex)) {
      return true;
    }
    return false;
  };

  // ----------------------------- Phone Validation -----------------------------
  export const validatePhone = (phoneEntered) => {
    let validRegex = /^([0-9]{10})$/;
    if (phoneEntered.match(validRegex)) {
      return true;
    }
    return false;
  };

  // ----------------------------- State Validation -----------------------------
  export const validateState = (stateEntered) => {
    let validRegex = /^([A-Za-z]\w+)$/;

    if (stateEntered.match(validRegex)) {
      return true;
    }
    return false;
  };

  // ----------------------------- Address Validation -----------------------------
  export const validateAddress = (addressEntered) => {
    let validRegex = /^[A-Za-z,. ]{1,}$/;

    if (addressEntered.match(validRegex)) {
      return true;
    }
    return false;
  };
