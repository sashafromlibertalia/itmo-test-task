import React, { useEffect, useState } from 'react';
import { NewsModel } from "../../infrastructure/models/news.model";
import GridContainer from "./layout/GridContainer";
import { FetchNewsService } from "../../infrastructure/services/fetchNews.service";
import { LanguagesEnum, NewsFetchQuery } from "../../infrastructure/dto/news.query";
import Card from "../../components/Card/Card";
import CardSkeleton from "../../components/Card/skeleton/CardSkeleton";
import { DefaultStateModel } from "../../infrastructure/store/store.model";
import { useSelector } from "react-redux";

const CardGrid = () => {
    const URL = "https://news.itmo.ru/api/news/list/?ver=2.0"
    const fetchService = new FetchNewsService()
    const [cards, setCards] = useState<NewsModel[]>([])
    const [fetched, setFetched] = useState<boolean>(false)

    const locale = useSelector<DefaultStateModel>(state => state.locale) as LanguagesEnum

    const fetchNews = async (): Promise<NewsModel[]> => {
        const TakeItemsPerPage = 9

        const query: NewsFetchQuery = {
            language_id: locale,
            per_page: TakeItemsPerPage
        }

        return await fetchService.fetchData(URL, query)
    }

    useEffect(() => {
        setFetched(false)

        // For skeleton demo
        setTimeout(() => {
            fetchNews()
                .then(data => {
                    setCards(data!)
                    setFetched(true)
                })
                .catch((e) => {
                    console.error(e)
                })
        }, 1000)
    }, [])

    return (
        <GridContainer>
            {
                fetched ?
                    cards.map((card, index) => {
                        return <Card key={index}
                            date={card.date}
                            id={card.id || 0} isFetched={fetched}
                            image_big={card.image_big}
                            title={card.title}
                            url={card.url}/>
                    }) : new Array(9).fill(1).map((_, index) => {
                        return <CardSkeleton key={index}/>
                    })
            }
        </GridContainer>
    );
};

export default CardGrid;