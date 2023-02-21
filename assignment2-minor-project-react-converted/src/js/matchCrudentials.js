// ----------------------------- Match credentials function -----------------------------
const matchCredentials = (matchInputCredentials) => {
  let arr = Object.values(JSON.parse(localStorage.getItem("registeredUsersData")));
  console.log(arr);
  for (let i = 0; i < arr.length ; i++) {
    if (matchInputCredentials.username === arr[i].email || matchInputCredentials.username === arr[i].phoneNum) {
      if (matchInputCredentials.password === arr[i].password) {
        if (matchInputCredentials.securityKey === arr[i].securityKey) {
          return arr[i];
        }
      }
    }
  }
  return false;
};

export default matchCredentials;