import { PAGE_CONSTANTS } from "../utilities/constants";

// ------------ Add List ---------------
export function addJSONtoStore(data) {
    return { type: PAGE_CONSTANTS.ADD, payload: { data } };
}