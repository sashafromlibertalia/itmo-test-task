import { IFetcher } from "../interfaces/fetchData.interface";
import { NewsModel } from "../types/news.type";
import { FetchQuery } from "../dto/fetch.dto";

export class FetchNewsService implements IFetcher {
    async fetchData(url: string, query?: FetchQuery): Promise<NewsModel[] | void> {
        try {
            if (query) console.log(Object.entries(query))
            const response = await fetch(`${url}?`)
            const data = response.json()

            console.log(data, query)
        } catch (e) {
            console.error(e)
        }
    }
}