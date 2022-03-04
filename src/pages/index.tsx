import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/modules/Main.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ITMO test task</title>
                <meta name="description" content="Built with love by @sashafromlibertalia"/>
            </Head>
            Hello
        </div>
    )
}

export default Home
