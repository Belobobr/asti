import {AUTHENTICATED} from "../constants/actionTypes";

const initialState = {
    id: null,
};

function userState(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATED: {
            return {
                id: action.userId
            };
        }
        default:
            return state
    }
}

export default userState