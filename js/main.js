const createElemWithText = (newElement = "p", newTextContent = "", newClassName = "") => {
  const newThing = document.createElement(newElement);
  newThing.textContent = newTextContent;
  newThing.className = newClassName;

  return newThing;
}

const createSelectOptions = (userJsonData = null) => {
  if (!userJsonData) {
    return undefined;
  }
  if (Array.isArray(userJsonData) === false) {
    userJsonData = [userJsonData];
  }
  
  const optionsArr = [];
  for (let i = 0; i < userJsonData.length; i++) {
    const user = userJsonData[i];
    const optionElement = document.createElement("option");
    optionElement.value = user.id;
    optionElement.textContent = user.name;
    optionsArr.push(optionElement);
  };

  return optionsArr;
}
