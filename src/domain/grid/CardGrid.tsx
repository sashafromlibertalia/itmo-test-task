import React, { useEffect, useState } from 'react';
import { NewsModel } from "../../infrastructure/types/news.type";
import GridContainer from "./layout/GridContainer";
import { FetchNewsService } from "../../infrastructure/services/fetchNews.service";
import { LanguagesEnum, NewsFetchQuery } from "../../infrastructure/dto/news.dto";

const CardGrid = () => {
    const URL = "https://news.itmo.ru/api/news/list/?ver=2.0"
    const fetchService = new FetchNewsService()
    const [cards, setCards] = useState<NewsModel[]>([])

    const fetchNews = async (): Promise<NewsModel[]> => {
        const TakeItemsPerPage = 9

        const query: NewsFetchQuery = {
            language_id: LanguagesEnum.ENGLISH,
            per_page: TakeItemsPerPage
        }

        return await fetchService.fetchData(URL, query)
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