/**
 * # Tabbar.js
 *
 * This class provides basic navigation between the home and the
 * profile only if the user is logged in
 */
'use strict';
/**
*
* ## Imports
*
* React
*/
import React,
{
  StyleSheet,
  ScrollView,
  Text,
  View
}
from 'react-native';

/**
 * A tab bar that switches between scenes, written in JS for cross-platform support
 */
// import TabNavigator from 'react-native-tab-navigator';
import ScrollableTabView from 'react-native-scrollable-tab-view';
/**
 * Font awesome icon
 */
import Icon from 'react-native-vector-icons/FontAwesome';
/**
 * project imports
 */
import Login from '../containers/Login';
import Feed from './Feed';
import Profile from '../containers/Profile';

/**
 * ## Styles
 */
var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
  },
  header: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  mark: {
    width: 150,
    height: 150
  }
});

let Tabbar = React.createClass({
    /**
     * ## Tabbar class
     *
     * getInitialState set the tab to home
     */
  getInitialState() {
    return {
      selectedTab: 1 // Should be dead code
    };
  },
  /**
   * ### render
   * Display tabs for channels, starting with the feed going more
   * specific to the right and profile to the left
   *
   */
  render() {
    return (
      <ScrollableTabView style={styles.container} initialPage={this.state.selectedTab}>
        <View tabLabel='ME' style={styles.container}>
          <Login />
        </View>
        <View tabLabel='EAT' style={styles.container}>
          <Feed channel={'home'}/>
        </View>
        <View tabLabel='SHELF' style={styles.container}>
          <Feed channel={'shelf'}/>
        </View>
        <ScrollView tabLabel='CHARGE' style={styles.container}>
          <Feed channel={'charge'}/>
        </ScrollView>
        <ScrollView tabLabel='LISTEN' style={styles.container}>
          <Feed channel={'listen'}/>
        </ScrollView>
      </ScrollableTabView>
    )
  }
});

export default Tabbar;
