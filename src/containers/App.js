import { connect } from 'react-redux'
import { toggleItem } from '../reducers/item/itemActions'
import ItemFeed from '../components/ItemFeed'

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_COMPLETED':
      return items.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.items, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(toggleItem(id))
    }
  }
}

const VisibleItemFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemFeed)

export default VisibleItemFeed
  /**
   * Display the ```Tabbar``` if we're logged in
  render () {
    let component = <View style={styles.container}>
      <Tabbar />
    </View>
    return (
      component
    );
  }
});

 * Connect the properties

export default connect(mapStateToProps, mapDispatchToProps)(App);
*/
