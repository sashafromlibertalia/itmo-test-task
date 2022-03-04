import {IFetcher} from "../interfaces/fetchData.interface";
import {NewsType} from "../../domain/news/news.type";
import {NewsFetchProps} from "../dto/news.props";

export class FetchNewsService implements IFetcher {
    constructor() {
    }

    async fetchData(url: string, props: NewsFetchProps): Promise<NewsType[] | void> {
        try {
            console.log(Object.entries(props))
            const response = await fetch(`${url}?`)
            const data = response.json()

            console.log(data, props)
        } catch (e) {
            console.error(e)
        }
    }
}