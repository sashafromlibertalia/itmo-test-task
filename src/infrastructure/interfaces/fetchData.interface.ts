import { NewsModel } from "../dto/news.model";
import { FetchQuery } from "../dto/fetch.query";

export interface IFetcher {
    fetchData(url: string, query?: FetchQuery): Promise<NewsModel[]>
}