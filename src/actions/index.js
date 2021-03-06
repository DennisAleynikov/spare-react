//1. Takes the text from AddItem field and returns proper “Action” JSON to send to other components.
export const addItem = (text) => {
 return {
 type: 'ADD_ITEM',
 id: nextItemId++,
 text,  //<--ES6. same as text:text, in ES5
 completed: false //<-- initially this is set to false
 }
}

//2. Takes filter string and returns proper “Action” JSON object to send to other components.
export const setVisibilityFilter = (filter) => {
 return {
 type: 'SET_VISIBILITY_FILTER',
 filter
 }
}

//3. Takes Item’s id and returns proper “Action” JSON object to send to other components.
export const toggleItem = (id) => {
 return {
 type: 'TOGGLE_ITEM',
 id
 }
}
