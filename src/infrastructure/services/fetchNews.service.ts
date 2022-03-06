import { IFetcher } from "../interfaces/fetchData.interface";
import { NewsModel } from "../models/news.model";
import { FetchQuery } from "../dto/fetch.query";

export class FetchNewsService implements IFetcher {
    async fetchData(url: string, query?: FetchQuery): Promise<NewsModel[]> {
        const queryString = `&language_id=${query!.language_id}&per_page=${query!.per_page}&lead=${query!.lead}` || ""
        const response = await fetch(`${url}${queryString}`)

        return (await response.json()).news
    }
}