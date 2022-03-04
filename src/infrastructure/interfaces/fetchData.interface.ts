import {NewsType} from "../../domain/news/news.type";
import {NewsFetchProps} from "../dto/news.props";

export interface IFetcher {
    fetchData(url: string, props?: NewsFetchProps): Promise<NewsType[] | void>
}