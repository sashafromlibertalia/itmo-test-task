import { FetchNewsService } from "../../services/fetchNews.service";
import { Action, fetchNewsAction } from "./actions";
import { FetchQuery } from "../../dto/fetch.query";
import { Dispatch } from "react";

export const fetchNews = ({ url = "https://news.itmo.ru/api/news/list/?ver=2.0", query }: {url?: string, query?: FetchQuery}) => {
    const fetchService = new FetchNewsService()

    return async (dispatch: Dispatch<Action>) => {
        try {
            const data = await fetchService.fetchData(url, query)
            dispatch(fetchNewsAction(data))
        }
        catch (e) {
            console.error(e)
        }
    }
}