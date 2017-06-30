import {
    AUTHENTICATED,
    SIGN_OUT,
} from '../constants/actionTypes'

const initialState = {
    authenticated: false,
};

function companyState(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATED:
            return {
                ...state,
                authenticated: true,
            };
        case SIGN_OUT:
            return {
                ...state,
                authenticated: false,
            };
        default:
            return state
    }
}

export default companyState