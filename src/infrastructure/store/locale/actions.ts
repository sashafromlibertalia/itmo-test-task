import { LanguagesEnum } from "../../dto/news.query";

export type Action = {
    type: Actions,
    payload: LanguagesEnum
}

export const enum Actions {
    CHANGE_LOCALE = "CHANGE_LOCALE",
}