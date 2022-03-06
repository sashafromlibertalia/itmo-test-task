import { NewsModel } from "../../models/news.model";

export type Action = {
    type: Actions,
    payload: NewsModel[]
}

export const enum Actions {
    FETCH_NEWS = "FETCH_NEWS",
}