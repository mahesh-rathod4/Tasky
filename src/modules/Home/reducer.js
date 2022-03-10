import GroupResponseModel from "../../models/GroupResponseModel";

const initialState = {
  group: {GroupResponseModel}
};

function saveGroupReducer(state = initialState, action) {
    switch (action.type) {
      case 'SAVE_GROUP_DETAIL':
        return {...state, group: action.payload.group};
      default:
        return state;
    }
  }
  
  export default saveGroupReducer;