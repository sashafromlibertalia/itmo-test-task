import React from 'react';
import Image from 'next/image'
import CardContainer from "./layout/CardContainer";
import ImageContainer from "./layout/ImageContainer";
import CardBody from "./layout/CardBody";
import { CardProps } from "./card.props";
import styles from '../../../styles/modules/Main.module.css'
import Link from 'next/link'

const Card = (props: CardProps) => {
    const MaximumCharactersToDisplay = 148

    const formattedDate = new Date(props.date).toLocaleDateString("ru", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }) || "С датой что-то грустное случилось"

    const formattedTitle = () => {
        const text = props.title

        return text.length > MaximumCharactersToDisplay
            ? `${text.slice(0, MaximumCharactersToDisplay - 3)}...`
            : text
    }

    return (
        <Link href={`/news/${props.id}`} passHref>
            <CardContainer>
                <ImageContainer>
                    <Image src={props.image_big} alt="news-cover" layout="fill" objectFit="cover"/>
                </ImageContainer>
                <CardBody>
                    <p className={styles.secondaryText}>{formattedDate}</p>
                    <h4 className={`${styles.textColor} ${styles.cardTitle}`}>{formattedTitle()}</h4>
                </CardBody>
            </CardContainer>
        </Link>
    );
};

export default Card;