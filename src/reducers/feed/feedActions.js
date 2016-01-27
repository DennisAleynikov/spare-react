/**
 * # feedActions.js
 *
 * The actions to support the splash screen
 */
'use strict';
/**
 * ## Imports
 *
 * The actions for the feed
 */
const {
  GET_FEED_REQUEST,
  GET_FEED_SUCCESS,
  GET_FEED_FAILURE,
} = require('../../lib/constants').default;

/**
 * BackendFactory - base class for server implementation
 * AppAuthToken for localStorage sessionToken access
 */
const BackendFactory = require('../../lib/BackendFactory').default;
const AppAuthToken = require('../../lib/AppAuthToken').default;

/**
 * ## retreiving profile actions
 */
export function getFeedRequest() {
  return {
    type: GET_FEED_REQUEST
  };
}
export function getFeedSuccess(json) {
  return {
    type: GET_FEED_SUCCESS,
    payload: json
  };
}
export function getFeedFailure(json) {
  return {
    type: GET_FEED_FAILURE,
    payload: json
  };
}
/**
 * ## State actions
 * controls which form is displayed to the user
 * as in login, register, logout or reset password
 */
export function getFeed(sessionToken, channel) {
  return dispatch => {
    dispatch(getFeedRequest());
    //store or get a sessionToken
    return new AppAuthToken().getSessionToken(sessionToken)
      .then((token) => {
        return BackendFactory(token).getFeed(channel);
      })
      .then((json) => {
          dispatch(getFeedSuccess(json));
      })
      .catch((error) => {
        dispatch(getFeedFailure(error));
      });
  };
}
