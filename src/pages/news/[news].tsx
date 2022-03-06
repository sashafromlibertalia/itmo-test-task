import React, { useEffect, useState } from 'react';
import Header from "../../../src/domain/header/Header"
import styles from "../../../styles/modules/Main.module.css"
import { useRouter } from "next/router";
import { useTypedSelector } from "../../infrastructure/hooks/useTypedSelector";
import { fetchNews } from "../../infrastructure/store/news/fetchNews";
import { useDispatch } from "react-redux";
import animations from "../../../styles/modules/Animation.module.css";

const News = () => {
    const router = useRouter()
    const [fetched, setFetched] = useState<boolean>(false)

    const dispatch = useDispatch()
    const { news } = useTypedSelector(state => state.news)

    const id = router.query.news
    const currentNews = news.find(item => item.id.toString() === id)
    const { locale } = useTypedSelector(state => state.locale)

    useEffect(() => {
        if (!news.length) {
            setFetched(false)

            setTimeout(async () => {
                await dispatch(fetchNews({
                    query: {
                        language_id: locale
                    }
                }))
                setFetched(true)
            }, 1000)
            return
        }

        setFetched(true)
    },[dispatch, locale, news])


    if (!currentNews && fetched) return ( <>
        <Header/>
        <div className={styles.container}>
            <h1 className={`${styles.title} ${styles.textColor}`}>Такой новости нет</h1>
        </div>
    </>)

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