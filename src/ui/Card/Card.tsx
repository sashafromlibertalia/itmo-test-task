import React from 'react';
import Image from 'next/image'
import CardContainer from "./layout/CardContainer";
import ImageContainer from "./layout/ImageContainer";
import CardBody from "./layout/CardBody";
import { CardProps } from "./card.props";
import styles from '../../../styles/modules/Main.module.css'

const Card = (props: CardProps) => {
    const formattedDate = new Date(props.date).toLocaleDateString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    return (
        <CardContainer>
            <ImageContainer>
                <Image src={props.image_big}
                    alt="news-cover" layout="fill" objectFit="cover"/>
            </ImageContainer>
            <CardBody>
                <p className={styles.secondaryTextColor}>{formattedDate}</p>
                <h4 className={`${styles.textColor} ${styles.cardTitle}`}>{props.title}</h4>
            </CardBody>
        </CardContainer>
    );
};

export default Card;