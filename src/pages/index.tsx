import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/modules/Main.module.css'
import Header from "../domain/header/Header";
import CardGrid from "../domain/grid/CardGrid";
import { Provider } from "react-redux";
import { store } from "../infrastructure/store/store";


const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>ITMO test task</title>
                <meta name="theme" content="white"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Built with love by @sashafromlibertalia"/>
            </Head>
            <Provider store={store}>
                <Header/>
                <div className={styles.container}>
                    <h1 className={`${styles.title} ${styles.textColor}`}>Новости и события</h1>
                    <CardGrid/>
                </div>
            </Provider>
        </div>
    )
}

export default Home
