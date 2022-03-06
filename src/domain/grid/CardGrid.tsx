import React, { useEffect, useMemo, useState } from 'react';
import GridContainer from "./layout/GridContainer";
import { FetchNewsService } from "../../infrastructure/services/fetchNews.service";
import { NewsFetchQuery } from "../../infrastructure/dto/news.query";
import Card from "../../components/Card/Card";
import CardSkeleton from "../../components/Card/skeleton/CardSkeleton";
import { useDispatch } from "react-redux";
import { Actions } from "../../infrastructure/store/news/actions";
import { useTypedSelector } from "../../infrastructure/hooks/useTypedSelector";

const CardGrid = () => {
    const API_URL = "https://news.itmo.ru/api/news/list/?ver=2.0"
    const TakeItemsPerPage = 9

    const [fetched, setFetched] = useState<boolean>(false)

    const dispatch = useDispatch()
    const { locale } = useTypedSelector(state => state.locale)
    const { news } = useTypedSelector(state => state.news)

    useEffect(() => {
        setFetched(false)

        const fetchService = new FetchNewsService()
        const query: NewsFetchQuery = {
            language_id: locale,
            per_page: TakeItemsPerPage,
            lead: true
        }

        // For skeleton demo
        setTimeout(async () => {
            await fetchService
                .fetchData(API_URL, query)
                .then(data => {
                    dispatch({
                        type: Actions.FETCH_NEWS,
                        payload: data
                    })
                    setFetched(true)
                })
                .catch((e) => {
                    console.error(e)
                })
        }, 1000)
    },[dispatch, locale])

    return (
        <GridContainer>
            {
                fetched ?
                    news.map((model, index) => {
                        return <Card key={index}
                            date={model.date}
                            id={model.id}
                            image_big={model.image_big}
                            title={model.title}
                            lead={model.lead}/>
                    }) : new Array(TakeItemsPerPage).fill(1).map((_, index) => {
                        return <CardSkeleton key={index}/>
                    })
            }
        </GridContainer>
    );
};

export default CardGrid;