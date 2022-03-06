import React, { useEffect, useState } from 'react';
import GridContainer from "./layout/GridContainer";
import Card from "../../components/Card/Card";
import CardSkeleton from "../../components/Card/skeleton/CardSkeleton";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../infrastructure/hooks/useTypedSelector";
import { fetchNews } from "../../infrastructure/store/news/fetchNews";

const CardGrid = () => {
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
                    }) : new Array(9).fill(1).map((_, index) => {
                        return <CardSkeleton key={index}/>
                    })
            }
        </GridContainer>
    );
};

export default CardGrid;