import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/modules/Main.module.css'
import Header from "../domain/header/Header";
import CardGrid from "../domain/grid/CardGrid";
import { LanguagesEnum } from "../infrastructure/dto/news.query";
import { useTypedSelector } from "../infrastructure/hooks/useTypedSelector";

const Home: NextPage = () => {
    const { locale } = useTypedSelector(state => state.locale)

    const title = () => {
        return locale === LanguagesEnum.RUSSIAN ? "Новости и события" : "News and events"
    }

    return (
        <div>
            <Head>
                <title>ITMO test task</title>
                <meta name="theme" content="white"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Built with love by @sashafromlibertalia"/>
            </Head>
            <Header/>
            <div className={styles.container}>
                <h1 className={`${styles.title} ${styles.textColor}`}>{title()}</h1>
                <CardGrid/>
            </div>
        </div>
    )
}

export default Home
