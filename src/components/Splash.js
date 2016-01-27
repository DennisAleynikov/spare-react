/**
 * # Splash.js
 *
 * This component provides an interface for a new user be introduced
 * to the app and are invited to post some stuff of their own.
 * It too is a container so there is boilerplate from Redux similar to
 * ```App``` and ```Login```
 */
'use strict';
/**
* ## Imports
*
* Redux
*/
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Parse from 'parse/react-native';
import ParseReact from 'parse-react/react-native';
import Swiper from 'react-native-swiper';

/**
 * The actions we need
 */
import * as feedActions from '../reducers/profile/profileActions';
import * as globalActions from '../reducers/global/globalActions';

/**
 * Immutable Map
 */
import {Map} from 'immutable';

/**
 * The ErrorAlert will display any and all errors
 */
// import ErrorAlert from '../components/ErrorAlert';
/**
 * The FormButton will respond to the press
 */
import FormButton from '../components/FormButton';
/**
 * The Header will display a Image and support Hot Loading
 */
import Header from '../components/Header';

/**
 * The itemCheckbox will display the state of the email verified
 */
// import ItemCheckbox from '../components/ItemCheckbox';
/**
 * The necessary React components
 */
import React,
{
  Component,
  StyleSheet,
  Text,
  View
}
from 'react-native';

/**
* The form processing component
*/
// import t from 'tcomb-form-native';

// let Form = t.form.Form;

/**
 * ## Styles
 */
var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444444',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paginationStyle: {
    color: '#fff'
  }
})

// var styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//     flex: 1,
//     backgroundColor: 'transparent'
//   },
//   inputs: {
//     marginTop: 10,
//     marginBottom: 10,
//     marginLeft: 10,
//     marginRight: 10
//   }
// });

/**
* ## Redux boilerplate
*/
const actions = [
  feedActions,
  globalActions
];

function mapStateToProps(state) {
  return {
      ...state
  };
}

function mapDispatchToProps(dispatch) {
  const creators = Map()
          .merge(...actions)
          .filter(value => typeof value === 'function')
          .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}


class Splash extends Component {
  /**
   * ## Feed class
   * Set the initial state and prepare the errorAlert
   */
  constructor(props) {
    super(props);
    // this.errorAlert = new ErrorAlert();
    this.state = {
      formValues: {
        username: '',
        email: ''
      }
    };
  }
  /**
   * ### onChange
   *
   * When any fields change in the form, fire this action so they can
   * be validated.
   *
   */
  onChange(value) {
    this.props.actions.onProfileFormFieldChange(value);
    this.setState({value});
  }
  /**
   * ### componentWillReceiveProps
   *
   * Since the Forms are looking at the state for the values of the
   * fields, when we we need to set them
   */
  componentWillReceiveProps(props) {
    this.setState({
      formValues: {
        username: props.profile.form.fields.username,
        email: props.profile.form.fields.email
      }
    });

  }
  /**
   * ### componentDidMount
   *
   * During Hot Loading, when the component mounts due the state
   * immediately being in a "logged in" state, we need to just set the
   * form fields.  Otherwise, we need to go fetch the fields
   */
  componentDidMount() {
    if (this.props.profile.form.fields.username == '' && this.props.profile.form.fields.email == '') {
      this.props.actions.getProfile(this.props.global.currentUser);
    } else {
      this.setState({
        formValues: {
          username: this.props.profile.form.fields.username,
          email: this.props.profile.form.fields.email
        }
      });
    }
  }

  /**
   * ### render
   * display the form wrapped with the header and button
   */
  render() {
    // this.errorAlert.checkError(this.props.profile.form.error);

    let self = this;

    // let ProfileForm = t.struct({
    //   username: t.String,
    //   email: t.String
    // });
    /**
     * Set up the field definitions.  If we're fetching, the fields
     * are disabled.
     */
    let options = {
      auto: 'placeholders',
      fields: {
        username: {
          label: 'Username',
          maxLength: 12,
          editable: !this.props.profile.form.isFetching,
          hasError: this.props.profile.form.fields.usernameHasError,
          error: 'Must have 6-12 characters and/or numbers'
        },
        email: {
          label: 'Email',
          keyboardType: 'email-address',
          editable: !this.props.profile.form.isFetching,
          hasError: this.props.profile.form.fields.emailHasError,
          error: 'Please enter valid email'
        }
      }
    };

    /**
     * When the button is pressed, send the users info including the
     * ```currrentUser``` object as it contains the sessionToken and
     * user objectId which Parse.com requires
     */
    let profileButtonText = 'Update Profile';
    let onButtonPress = () => {
      this.props.actions.updateProfile(
        this.props.profile.form.originalProfile.objectId,
        this.props.profile.form.fields.username,
        this.props.profile.form.fields.email,
        this.props.global.currentUser);
    };
    /**
     * Wrap the form with the header and button.  The header props are
     * mostly for support of Hot reloading. See the docs for Header
     * for more info.
     */
    return (
      <Swiper style={styles.wrapper}
              showsButtons={true}
              loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Welcome!</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Be part of a great place.</Text>
        </View>
        <View style={styles.slide3}>
          <FormButton
              onPress={onButtonPress.bind(self)}
              buttonText={'Get started'}/>
        </View>
      </Swiper>
      // <View style={styles.container}>
      //   <Header isFetching={this.props.profile.form.isFetching}
      //           showState={this.props.global.showState}
      //           currentState={this.props.global.currentState}
      //           onGetState={this.props.actions.getState}
      //           onSetState={this.props.actions.setState}
      //   />
      //   <View style={styles.inputs}>
      //     <Form
      //         ref="form"
      //         type={ProfileForm}
      //         options={options}
      //         value={this.state.formValues}
      //         onChange={this.onChange.bind(self)}
      //     />
      //     <ItemCheckbox text="Email verified (display only)"
      //                   disabled={true}
      //                   checked={this.props.profile.form.fields.emailVerified}
      //     />
      //   </View>
      //
      //   <FormButton
      //       isDisabled={!this.props.profile.form.isValid || this.props.profile.form.isFetching}
      //       onPress={onButtonPress.bind(self)}
      //       buttonText={profileButtonText}/>
      //
      //
      // </View>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
