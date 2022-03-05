import { DefaultStateModel } from "./store.model";
import { LanguagesEnum } from "../dto/news.query";
import { Actions } from "./actions";

const initialState: DefaultStateModel = {
    locale: LanguagesEnum.RUSSIAN
};

export type Action = {
    type: Actions,
    payload: LanguagesEnum
}

export const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.CHANGE_LOCALE:
            return { ...state, locale: action.payload }
        default:
            return { ...state }
    }
}