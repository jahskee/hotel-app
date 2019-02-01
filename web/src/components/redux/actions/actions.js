/* jshint esversion: 6 */

/* ------ User Session Actions ------*/
export const UPDATE_USER_SESSION = 'UPDATE_USER_SESSION';
export const updateUserSession = userSession => ({
  type: UPDATE_USER_SESSION,
  payload: userSession,
});

