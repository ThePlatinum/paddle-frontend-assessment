import Head from 'next/head'
import Image from 'next/image'
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
        <header className={`${s.header} d-flex py-3`}>
          <img src="/favicon.ico" alt="logo" width={60} height={60} />
          <div className={`nav ${s.nav}`}>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li className={`${s.btn}`}>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
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
