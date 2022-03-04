import React, { useEffect, useState } from 'react';
import { NewsModel } from "../../infrastructure/types/news.type";
import GridContainer from "./layout/GridContainer";
import { FetchNewsService } from "../../infrastructure/services/fetchNews.service";

const CardGrid = () => {
    const URL = "https://news.itmo.ru/api/news/list/?ver=2.0"
    const fetchService = new FetchNewsService()
    const [cards, setCards] = useState<NewsModel[]>([])

    const fetchNews = async () => {
        await fetchService.fetchData(URL)
    }

    useEffect(() => {
        fetchNews()
            .then(data => {
                setCards(data!)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])

    return (
        <GridContainer>
            Тут карточки
        </GridContainer>
    );
};

export default CardGrid;