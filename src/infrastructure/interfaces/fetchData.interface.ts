import { NewsModel } from "../types/news.type";
import { FetchQuery } from "../dto/fetch.dto";

export interface IFetcher {
    fetchData(url: string, query?: FetchQuery): Promise<NewsModel[] | void>
}