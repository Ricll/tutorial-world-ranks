import Head from 'next/head'
import CountriesTable from '../components/CountriesTable/CountriesTable'
import Layout from '../components/Layout/Layout'
import SearchInput from '../components/SearchInput/SearchInput'
import styles from '../styles/Home.module.css'

export default function Home({ countries }) {
  
  return (
    <Layout>
      <div className={styles.counts}>
        Found {countries.length} countries
      </div>

      <SearchInput/>

      <CountriesTable countries={countries}/>

    </Layout>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("https://restcountries.eu/rest/v2/all")
  const countries = await response.json()
  
  return {
    props: {
      countries,
    }
  }
}