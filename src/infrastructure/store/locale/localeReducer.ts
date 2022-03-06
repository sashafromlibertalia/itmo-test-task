import { LanguagesEnum } from "../../dto/news.query";
import { Action, Actions } from "./actions";

export type DefaultLocaleState = {
    locale: LanguagesEnum
}

const initialState: DefaultLocaleState = {
    locale: LanguagesEnum.RUSSIAN
};

const localeReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.CHANGE_LOCALE:
            return { ...state, locale: action.payload }
        default:
            return { ...state }
    }
}

export default localeReducer