import Head from 'next/head'
import s from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Something huge is coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main container">
        <header className={s.header}>
          Header
        </header>
        <div className={s.body}>
        main body
        </div>
        <footer className={s.footer}>
          footer
        </footer>
      </main>
    </div>
  )
}
