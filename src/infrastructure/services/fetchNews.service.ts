import { IFetcher } from "../interfaces/fetchData.interface";
import { NewsModel } from "../types/news.type";
import { FetchQuery } from "../dto/fetch.dto";

export class FetchNewsService implements IFetcher {
    async fetchData(url: string, query?: FetchQuery): Promise<NewsModel[]> {
        if (query) console.log(Object.entries(query))
        const response = await fetch(`${url}`)

        return (await response.json()).news as NewsModel[]
    }
}