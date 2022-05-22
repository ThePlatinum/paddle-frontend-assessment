import Head from 'next/head'
import '../styles/globals.css'
import '../styles/responsive.css'
import s from '../styles/Home.module.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='container'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet" />
      </Head>

      <header className={`${s.header} d-flex py-3`}>
        <img src="/favicon.ico" alt="logo" width={50} height={50} />
        <div className={`nav ${s.nav}`}>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="/github">GitHub</a>
            </li>
            <li className={`${s.btn}`}>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>

      <Component {...pageProps} />
    </div>
  )
}
