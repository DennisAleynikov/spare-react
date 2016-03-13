import React from 'react'
import Footer from './Footer'
import AddItem from '../containers/AddItem'
import VisibleItemFeed from '../containers/VisibleItemFeed'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
