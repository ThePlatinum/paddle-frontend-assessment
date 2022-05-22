import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useState } from 'react'
import s from "./Github.module.css"

export default function GitHub() {

  let URL = 'https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc'
  const [repos, setRepos] = useState([]);

  useEffect(()=>{
    fetch(URL)
    .then(res=>res.json())
    .then(res=>{
      setRepos(res.items)
      console.log(repos);
    })
    .catch(e=>console.log(e))
  },[])

  useEffect(()=>{
    console.log(repos);
  },[repos])
  
  return (
    <div>
      <Head>
        <title>Trending Repos</title>
        <meta name="description" content="Most starred Github repos created in the last 30 days" />
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
          {repos?.map((repo, i)=>{
            return(
              <div className='py-3' key={i}>
                <div className={`${s.card} card d-flex `}>
                  <img src={repo.owner.avatar_url} width={150} height={150} />
                  <div className={`${s.card_body}`}>
                    <h4>{repo.name}</h4>
                    <p> {repo.full_name} </p>
                    <p> {repo.description} </p>
                    <div className={`${s.details} d-flex`}>
                      <div className="box star">
                        Stars: {repo.stargazers_count}
                      </div>
                      <div className="box issue">
                        Issues: {repo.open_issues_count}
                      </div>
                      <div className="since">
                        Submitted <b> {
                          Math.floor(( new Date().getTime() - new Date(repo.created_at).getTime() ) / (86400000))
                          } </b> days ago by <b> {repo.owner.login} </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
          })}

          <div className='py-5 text-center'>
          Loading...
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
