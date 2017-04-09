import * as types from '../actions/actionTypes';
import initialStore from '../common/initialStore';

let userReducer = (state = initialStore.user, action) => {
    switch (action.type) {
        case types.SAVE_USER_INFO:
            return {
                ...state,
                ...action.userInfo
            }
        default:
            return state;
    }
}

export default userReducer;
