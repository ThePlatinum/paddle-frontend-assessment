import Head from 'next/head'
import { useState } from 'react'
import s from '../styles/Home.module.css'

export default function Home() {

  const [Days, setDays] = useState(7)
  const [Hours, setHours] = useState(24)
  const [Minutes, setMinutes] = useState(0)
  const [Seconds, setSeconds] = useState(0)

  const times = [
    {
      time : Days,
      text : "Days"
    },
    {
      time : Hours,
      text : "Hours"
    },
    {
      time : Minutes,
      text : "Minutes"
    },
    {
      time : Seconds,
      text : "Seconds"
    },
  ]

  return (
    <div>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Something huge is coming soon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${s.main} main container`}>
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
              <li className={`${s.btn}`}>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </header>

        <div className={s.body}>
          
          <h1>
            SOMETHING AWESOME IS <br /> COMING SOON
          </h1>

          <p>
            Your all-in-one affliate marketing tracking software <b>tract</b>, 
            <b> automate</b> and <b>optimize</b> your campaigns.
          </p>

          <div className={`${s.timer} d-flex`}>
            {
              times.map(t=>{
                return(
                  <div className={`${s.timer__item} card`}>
                    <h3> {t.time} </h3>
                    <p> {t.text} </p>
                  </div>
                )
              })
            }
          </div>

          <div className={`${s.name} d-flex`}>
            <input type="text" name="firstname" id="firstname" placeholder='First Name.' />
            <input type="text" name="lastname" id="lastname" placeholder='Last Name.' />
          </div>

          <div className={`${s.email} d-flex`}>
            <input type="email" placeholder='Enter your email address'/>
            <input type="button" value="JOIN OUR WAITING LIST" className={`${s.btn}`} />
          </div>
          
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
