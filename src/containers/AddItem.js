import AddItemForm from '../components/AddItemForm'

import { connect } from 'react-redux'
import { addItem } from '../actions'


const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addItem(text))
    }
  }
}

let AddItem = connect(null, mapDispatchToProps)(AddItemForm)

export default AddItem
