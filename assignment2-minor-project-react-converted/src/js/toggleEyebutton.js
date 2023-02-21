const toggleEyeButton = (e) => {
  e.preventDefault();
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }

  if (document.querySelectorAll("#eyeButton > ion-icon")[0].name === "eye-outline") {
    document.querySelectorAll("#eyeButton > ion-icon")[0].name = "eye-off-outline";
  } else {
    document.querySelectorAll("#eyeButton > ion-icon")[0].name = "eye-outline";
  }
}

export default toggleEyeButton;