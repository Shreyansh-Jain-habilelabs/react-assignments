const removeLastElement = (userInput) => {
  const bkspArray = [...userInput];
  bkspArray.splice(bkspArray.length-1,1);
  return bkspArray.join("");
}

export default removeLastElement;