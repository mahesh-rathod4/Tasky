export const LOAD_USERS_LOADING = 'LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'LOAD_USERS_ERROR';

export const loadUsers = () => dispatch => {
  dispatch({type: LOAD_USERS_LOADING});
};