/**
 * # itemActions.js
 *
 * The actions to support the splash screen
 */
'use strict';
/**
 * ## Imports
 *
 * The actions for splash screen
 */
const {
  ADD_ITEM,
  SET_VISIBILITY_FILTER,
  TOGGLE_ITEM,

  SPLASH_WANT_REQUEST,
  SPLASH_WANT_SUCCESS,
  SPLASH_WANT_FAILURE,

  SPLASH_GIVE_REQUEST,
  SPLASH_GIVE_SUCCESS,
  SPLASH_GIVE_FAILURE
} = require('../../lib/constants').default;

/**
 * BackendFactory - base class for server implementation
 * AppAuthToken for localStorage sessionToken access
 */
const BackendFactory = require('../../lib/BackendFactory').default;
const AppAuthToken = require('../../lib/AppAuthToken').default;


//1. Takes the text from AddTodo field and returns proper “Action” JSON to send to other components.
export const addItem = (text) => {
 return {
 type: ‘ADD_ITEM’,
 id: nextItemId++,
 text,  //<--ES6. same as text:text, in ES5
 completed: false //<-- initially this is set to false
 }
}

//2. Takes filter string and returns proper “Action” JSON object to send to other components.
export const setVisibilityFilter = (filter) => {
 return {
 type: ‘SET_VISIBILITY_FILTER’,
 filter
 }
}

//3. Takes Todo item’s id and returns proper “Action” JSON object to send to other components.
export const toggleTodo = (id) => {
 return {
 type: ‘TOGGLE_ITEM’,
 id
 }
}
