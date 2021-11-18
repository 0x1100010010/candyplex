import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Header} from '../components/header'
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';


const Home: NextPage = () => {
  return (
    <RecoilRoot>
      <div className={styles.container} data-theme="bumblebee">
        <Head>
          <title>Candyplex</title>
          <meta name="description" content="Candy Machine + Metaplex" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="my-3">
          <Header></Header>
        </div>
        <main className={styles.main} >


          <h1 className={styles.title}>
            Welcome to <a href="https://github.com/bashforger/candyplex">Candyplex</a>
          </h1>

          <div>

          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </RecoilRoot>
  )
}

export default Home
