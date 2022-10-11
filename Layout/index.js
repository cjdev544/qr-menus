import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Central Food Menus</title>
        <meta name='description' content='menu QR de centralfoodnalaga' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        {children}
        <h3>aquis</h3>
      </main>
    </div>
  )
}
