import { PAGE_CONSTANTS } from "../utilities/constants";

export const pageJSONReducer = (state = {}, action) => {
    switch (action.type) {
        // --- Add JSON to store
        case PAGE_CONSTANTS.ADD: {
            const backup = {...state};
            return {backup, ...action.payload.data};
        }
        default:
        return state;
    
    }
}