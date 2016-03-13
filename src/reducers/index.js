import { combineReducers } from 'redux'
import items from './items'
import visibilityFilter from './visibilityFilter'

const itemApp = combineReducers({
  items,
  visibilityFilter
})

export default itemApp
