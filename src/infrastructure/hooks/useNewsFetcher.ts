import { useTypedSelector } from "./useTypedSelector";
import { fetchNews } from "../store/news/fetchNews";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useNewsFetcher = () => {
    const [fetched, setFetched] = useState<boolean>(false)

    const dispatch = useDispatch()
    const { locale } = useTypedSelector(state => state.locale)
    const { news } = useTypedSelector(state => state.news)

    useEffect(() => {
        setFetched(false)

        setTimeout(async () => {
            await dispatch(fetchNews({
                query: {
                    language_id: locale
                }
            }))
            setFetched(true)
        }, 1000)
    },[dispatch, locale])

    return {news, fetched}
}