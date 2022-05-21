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

      <main className={`${s.main} main container`}>
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
        <footer className={`${s.footer} d-flex flex-column`}>
          <div className="socials">
            <a href="#"> <i className='bx bxl-youtube'></i> </a>
            <a href="#"> <i className='bx bxl-facebook'></i> </a>
            <a href="#"> <i className='bx bxl-linkedin'></i> </a>
            <a href="#"> <i className='bx bxl-instagram'></i> </a>
            <a href="#"> <i className='bx bxl-twitter'></i> </a>
          </div>
          <div className={`d-flex ${s.legals}`}>
            <a href="#">Terms of Services</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className={`${s.copyright}`}>
            Copywrite 2021 @ Peddle Technologies. All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}
