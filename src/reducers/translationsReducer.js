import emptyInitialState from "../store/initialState";
import { TRANSLATION_CONSTANTS } from "../utilities/constants";
import translations from '../pageJSON/translations.json';

export const translationReducer = (state = emptyInitialState.translations, action) => {
  switch (action.type) {
    case TRANSLATION_CONSTANTS.ADD.TRANSLATION:
      return { ...translations };
    default:
      return state;
  }
};
