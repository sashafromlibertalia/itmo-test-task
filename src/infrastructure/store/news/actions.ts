import { NewsModel } from "../../dto/news.model";

export type Action = {
    type: Actions,
    payload: NewsModel[]
}

export const enum Actions {
    FETCH_NEWS = "FETCH_NEWS",
}

export const fetchNewsAction = (payload: NewsModel[]) => ({ type: Actions.FETCH_NEWS, payload: payload })