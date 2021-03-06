import React from 'react-native'

import AddItem from '../containers/AddItem'
import VisibleItemFeed from '../containers/VisibleItemFeed'

const {
  StyleSheet,
  View,
} = React

const App = () => (
  <View style={styles.container}>
    <AddItem />
    <VisibleItemFeed />
  </View>
)

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default App
