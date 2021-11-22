/**
 * createElemWithText \
 *  a. Receives up to 3 parameters \
 *  b. 1st parameter is the HTML element string name to be created (h1, p, button, etc) \
 *  c. Set a default value for the 1st parameter to “p” \
 *  d. 2nd parameter is the textContent of the element to be created \
 *  e. Default value of the 2nd parameter is “” \
 *  f. 3rd parameter is a className if one is to be applied (optional) \
 *  g. Use document.createElement() to create the requested HTML element \
 *  h. Set the other desired element attributes. \
 *  i. Return the created element.
 * 
 * @param {string} newElement Which element to create
 * @param {string} newTextContent 
 * @param {string} newClassName 
 * @returns HTMLElement
 */
const createElemWithText = (newElement = "p", newTextContent = "", newClassName = "") => {
  const newThing = document.createElement(newElement);
  newThing.textContent = newTextContent;
  newThing.className = newClassName;

  return newThing;
}

/**
 * createSelectOptions \
 *  a. Test users JSON data available here: https://jsonplaceholder.typicode.com/users \
 *  b. For testing (not in function) you may want to define users with the test data. \
 *  c. Receives users JSON data as a parameter \
 *  d. Returns undefined if no parameter received \
 *  e. Loops through the users data \
 *  f. Creates an option element for each user with document.createElement() \
 *  g. Assigns the user.id to the option.value \
 *  h. Assigns the user.name to the option.textContent \
 *  i. Return an array of options elements
 * 
 * @param {Object[]} userJsonData 
 * @returns Array
 */
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
