import React from 'react';
import GridContainer from "./layout/GridContainer";
import Card from "../../components/Card/Card";
import CardSkeleton from "../../components/Card/skeleton/CardSkeleton";
import { useNewsFetcher } from "../../infrastructure/hooks/useNewsFetcher";

const CardGrid = () => {
    const { fetched, news } = useNewsFetcher()

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