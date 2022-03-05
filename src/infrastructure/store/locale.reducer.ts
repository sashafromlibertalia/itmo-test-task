import { DefaultStateModel } from "./store.app.model";
import { LanguagesEnum } from "../dto/news.query";

type ActionType = {
    setNewLocale: LanguagesEnum
}

const initialState: DefaultStateModel = {
    locale: LanguagesEnum.RUSSIAN
};

export const localeReducer = (state = initialState, action: ActionType) => {
    state.locale = action.setNewLocale
    return state
}