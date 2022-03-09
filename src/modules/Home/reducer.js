
const initialState = {
  group: {}
};

function saveGroupReducer(state = initialState, action) {
    switch (action.type) {
      case 'SAVE_GROUP_DETAIL':
          console.log(action.payload.group);
        return {...state, group: action.payload.group};
      default:
        return state;
    }
  }
  
  export default saveGroupReducer;