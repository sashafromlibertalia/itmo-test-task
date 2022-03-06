import { IFetcher } from "../interfaces/fetchData.interface";
import { NewsModel } from "../dto/news.model";
import { FetchQuery } from "../dto/fetch.query";

export class FetchNewsService implements IFetcher {
    async fetchData(url: string, query?: FetchQuery): Promise<NewsModel[]> {
        const queryString = `&language_id=${query?.language_id || 1}&per_page=${query?.per_page || 9}&lead=${query?.lead || true}` || ""
        const response = await fetch(`${url}${queryString}`)

        return (await response.json()).news
    }
}