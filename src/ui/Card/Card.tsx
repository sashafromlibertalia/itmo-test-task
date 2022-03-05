import React from 'react';
import Image from 'next/image'
import CardContainer from "./layout/CardContainer";
import ImageContainer from "./layout/ImageContainer";
import CardBody from "./layout/CardBody";
import { CardProps } from "./card.props";

const Card = (props: CardProps) => {
    return (
        <CardContainer>
            <ImageContainer>
                <Image src={props.image_big}
                    alt="news-cover" layout="fill" objectFit="cover"/>
            </ImageContainer>
            <CardBody>

            </CardBody>
        </CardContainer>
    );
};

export default Card;