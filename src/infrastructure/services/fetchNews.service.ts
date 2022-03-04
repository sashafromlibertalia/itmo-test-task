import { IFetcher } from "../interfaces/fetchData.interface";
import { NewsModel } from "../types/news.type";
import { FetchQuery } from "../dto/fetch.query";

export class FetchNewsService implements IFetcher {
    async fetchData(url: string, query?: FetchQuery): Promise<NewsModel[]> {
        // Converts query to pairs [[key, value]] and merges into single query string
        const queryString = `&${Object.entries(query || {}).map(value => `${value[0]}=${value[1]}`).join('&')}` || ""
        const response = await fetch(`${url}${queryString}`)

        return (await response.json()).news as NewsModel[]
    }
}