import { LanguagesEnum } from "../../dto/news.query";

export type Action = {
    type: Actions,
    payload: LanguagesEnum
}

export const enum Actions {
    CHANGE_LOCALE = "CHANGE_LOCALE",
}

export const changeLocaleAction = (payload: LanguagesEnum) => ({ type: Actions.CHANGE_LOCALE, payload: payload })