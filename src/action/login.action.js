import { LOGIN_CONSTANTS } from "../utilities/constants";

// ------------ Add New User ---------------
export function checkLogin(data) {
    return { type: LOGIN_CONSTANTS.ADD, payload: { data } };
}