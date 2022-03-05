import { NewsModel } from "../../infrastructure/models/news.model";

export type CardProps = NewsModel & {
    isFetched: boolean
}