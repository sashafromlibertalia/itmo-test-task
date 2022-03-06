import { NewsModel } from "../../models/news.model";
import { Action, Actions } from "./actions";

export type DefaultNewsState = {
    news: NewsModel[]
}

const initialState: DefaultNewsState = {
    news: []
};

const newsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case Actions.FETCH_NEWS:
            return { ...state, news: action.payload }
        default:
            return { ...state }
    }
}

export default newsReducer