import Head from 'next/head';
import Image from 'next/image';
import styles from './Layout.module.css';

const Layout = ({children, title="World Ranks"}) => {
  return (
    <div className={styles.container}>
      <Head>
          <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <header className={styles.header}>
     <Image src="/Logo.svg" width={175} height={24} />

      </header>
     
      <main className={styles.main}>
     
      {children}
     
      </main>

      <footer className={styles.footer}>
     Rickll @ ricllima@hotmail.com
      </footer>
    </div>
  )
}

export default Layout;