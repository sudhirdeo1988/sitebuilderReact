import { LOGIN_CONSTANTS } from "../utilities/constants";

export const checkLoginReducer = (state = {}, action) => {
    switch (action.type) {
        // --- Add JSON to store
        case LOGIN_CONSTANTS.ADD: {
            return {...action.payload.data};
        }
        default:
        return state;
    }
}