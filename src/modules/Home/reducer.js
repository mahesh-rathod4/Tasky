const initialState = {
  name: "",
  members: [],
};

function saveGroupReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
      case 'SAVE_GROUP_DETAIL':
          console.log(action);
        return {...state, group: action.group};
      default:
        return state;
    }
  }
  
  export default saveGroupReducer;