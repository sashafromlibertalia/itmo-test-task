import React from 'react';
import Header from "../../../src/domain/header/Header"
import styles from "../../../styles/modules/Main.module.css"
import { useRouter } from "next/router";
import animations from "../../../styles/modules/Animation.module.css";
import { useNewsFetcher } from "../../infrastructure/hooks/useNewsFetcher";

const News = () => {
    const router = useRouter()
    const { fetched, news } = useNewsFetcher()

    const id = router.query.news
    const currentNews = news.find(item => item.id.toString() === id)

    if (!currentNews && fetched)
        return (
            <>
                <Header/>
                <div className={styles.container}>
                    <h1 className={`${styles.title} ${styles.textColor}`}>Такой новости нет</h1>
                </div>
            </>
        )

    return (
        <>
            <Header/>
            <div className={styles.container}>
                <h1 className={`${styles.title} ${styles.textColor} ${fetched ? "" : animations.skeleton}`}>Новость #{id}</h1>
                {
                    fetched ? <div dangerouslySetInnerHTML={{ __html: currentNews!.lead }}/> : null
                }
            </div>
        </>
    );
};

export default News;