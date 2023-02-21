  // ------------------------- Generating the Security Code -------------------------

  // document.querySelector(".securityKeyGeneratorBox > button").click(function (e) 
  export const generateSecurityKey = (e) => {
    e.preventDefault();
    document.getElementById("#securityKey").focus();

    let numberCharacters = "1234567890";
    let specialCharacters = "@#%&*!";

    let code = "";
    let length = Math.floor(Math.random() * 5) + 6;
    let presentCodeLength = length;

    for (let i = 0; i < length; i++) {
      code += numberCharacters.charAt(Math.floor(Math.random() * numberCharacters.length));
      presentCodeLength--;
      if (!presentCodeLength) {
        break;
      }
      code += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
      presentCodeLength--;
      if (!presentCodeLength) {
        break;
      }
    }

    // ----------------------------- Mixing the Code -----------------------------

    let arr = code.split("");

    for (let i = 0; i < arr.length; ++i) {
      let j = Math.floor(Math.random() * arr.length); // Get random of [0, n-1]
      let temp = arr[i]; // Swap arr[i] and arr[j]
      arr[i] = arr[j];
      arr[j] = temp;
    }

    code = arr.join("");

    document.getElementById("#securityKey").attr("value", code);
    document.getElementById("#securityKey").focus();
  }