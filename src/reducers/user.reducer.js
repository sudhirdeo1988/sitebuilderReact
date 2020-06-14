import { USER_CONSTANTS } from "../utilities/constants";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        // --- Add JSON to store
        case USER_CONSTANTS.ADD: {
            fetch('http://localhost:3001/user/profile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(action.payload.data)
            }).then(response => response.json())
            .then(data => console.log(data));
            return {...action.payload.data};
        }
        default:
        return state;
    }
}