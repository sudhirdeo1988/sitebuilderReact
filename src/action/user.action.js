import { USER_CONSTANTS } from "../utilities/constants";

// ------------ Add New User ---------------
export function addNewUser(data) {
    return { type: USER_CONSTANTS.ADD, payload: { data } };
}