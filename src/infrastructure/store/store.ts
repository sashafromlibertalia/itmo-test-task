import { applyMiddleware, combineReducers, createStore } from "redux";
import localeReducer from "./locale/localeReducer";
import newsReducer from "./news/newsReducer";
import thunk from "redux-thunk";

const appReducer = combineReducers({
    locale: localeReducer,
    news: newsReducer
})

export type AppState = ReturnType<typeof appReducer>

export const store = createStore(appReducer, applyMiddleware(thunk))
