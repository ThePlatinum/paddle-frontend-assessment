import Head from 'next/head'
import '../styles/globals.css'
import '../styles/responsive.css'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
