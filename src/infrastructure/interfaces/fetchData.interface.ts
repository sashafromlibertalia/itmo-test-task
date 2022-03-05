import { NewsModel } from "../models/news.model";
import { FetchQuery } from "../dto/fetch.query";

export interface IFetcher {
    fetchData(url: string, query?: FetchQuery): Promise<NewsModel[] | void>
}