const createElemWithText = (newElement = "p", newTextContent = "", newClassName = "") => {
  const newThing = document.createElement(newElement);
  newThing.textContent = newTextContent;
  newThing.className = newClassName;

  return newThing;
}

