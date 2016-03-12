/**
 * # profileReducer.js
 *
 * The reducer user profile actions
 */
'use strict';

/**
 * ## Imports
 *
 * fieldValidation for validating the fields
 * formValidation for setting the form's valid flag
 */
const fieldValidation = require('../../lib/fieldValidation').default;
const formValidation = require('./profileFormValidation').default;

/**
 * ## Actions
 *
 */
const {
  ADD_ITEM,
  TOGGLE_ITEM,
  SET_VISIBILITY_FILTER
} = require('../../lib/constants').default;

const item = (state, action) => {
  switch (action.type) {
     case ‘ADD_ITEM’:
      return […state,{id: action.id, text: action.text,
              completed:false}]

     case ‘TOGGLE_ITEM’:
        return state.map(item =>
                if (todo.id !== action.id) {
                  return item
                }
                 return Object.assign({},
                    item, {completed: !item.completed})
            )

      case ‘SET_VISIBILITY_FILTER’: {
       return action.filter
      }

     default:
      return state
    }
}
