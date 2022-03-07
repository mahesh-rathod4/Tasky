import {
    LOAD_USERS_ERROR,
    LOAD_USERS_LOADING,
    LOAD_USERS_SUCCESS,
  } from '../NewChat/action';
  
  const initialState = {
    data: [],
    loading: false,
    error: '',
  };
  
  export default function getUserReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD_USERS_LOADING: {
        return {
          ...state,
          loading: true,
          error: '',
        };
      }
      case LOAD_USERS_SUCCESS: {
        console.log(action);
        return {
          ...state,
          data: action.data,
          loading: false,
        };
      }
      case LOAD_USERS_ERROR: {
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      }
      default: {
        return state;
      }
    }
  }