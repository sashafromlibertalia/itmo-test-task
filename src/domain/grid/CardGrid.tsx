import React, { useEffect, useState } from 'react';
import { NewsModel } from "../../infrastructure/models/news.model";
import GridContainer from "./layout/GridContainer";
import { FetchNewsService } from "../../infrastructure/services/fetchNews.service";
import { LanguagesEnum, NewsFetchQuery } from "../../infrastructure/dto/news.query";
import Card from "../../ui/Card/Card";

const CardGrid = () => {
    const URL = "https://news.itmo.ru/api/news/list/?ver=2.0"
    const fetchService = new FetchNewsService()
    const [cards, setCards] = useState<NewsModel[]>([])

    const fetchNews = async (): Promise<NewsModel[]> => {
        const TakeItemsPerPage = 9

        const query: NewsFetchQuery = {
            language_id: LanguagesEnum.RUSSIAN,
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
            {
                cards.map(card => {
                    return <Card key={card.id}
                        date={card.date}
                        id={card.id}
                        image_big={card.image_big}
                        title={card.title}
                        url={card.url}/>
                })
            }
        </GridContainer>
    );
};

export default CardGrid;