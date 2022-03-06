import React from 'react';
import Header from "../../../src/domain/header/Header"
import styles from "../../../styles/modules/Main.module.css"
import { useRouter } from "next/router";
import { useTypedSelector } from "../../infrastructure/hooks/useTypedSelector";

const News = () => {
    const router = useRouter()
    const id = router.query.news

    const { news } = useTypedSelector(state => state.news)
    const currentNews = news.find(item => item.id.toString() === id)

    if (!currentNews) return ( <>
        <Header/>
        <div className={styles.container}>
            <h1 className={`${styles.title} ${styles.textColor}`}>Такой новости нет</h1>
        </div>
    </>)

    return (
        <>
            <Header/>
            <div className={styles.container}>
                <h1 className={`${styles.title} ${styles.textColor}`}>Новость #{id}</h1>
                <div dangerouslySetInnerHTML={{ __html: currentNews.lead }}/>
            </div>
        </>
    );
};

export default News;