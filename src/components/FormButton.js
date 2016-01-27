/**
* # FormButton.js
*
* Display a button that responds to onPress and is colored appropriately
*/
'use strict';
/**
 * ## Imports
 *
 * React
 */
const  React = require('react-native');
const
{
  StyleSheet,
  View
} = React;

/**
 * The platform neutral button
 */
const  Button = require('apsl-react-native-button');

/**
 * ## Styles
 */
var styles = StyleSheet.create({
  signin: {
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    backgroundColor: '#FEFEFE',
    borderColor:  '#111111',
    borderRadius: 0,
    borderWidth: 4
  }

});

var FormButton = React.createClass({
  /**
   * ### render
   *
   * Display the Button
   */
  render() {
    return (
      <View style={styles.signin}>
        <Button style={styles.button}
            isDisabled={this.props.isDisabled}
            onPress={this.props.onPress}
        >
          {this.props.buttonText}
        </Button>
      </View>
    );
  }
});

module.exports = FormButton;
