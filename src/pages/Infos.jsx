import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/info/Hero'
import Head from 'next/head'

export default function Info() {
  return (
    <>
      <Head>
        <title>Information</title>
        <meta
          name="description"
          content="Willkommen bei  Be-SCooTER®! Hier finden Sie alle wichtigen Informationen zu unseren Nutzungsbedingungen, Datenschutzrichtlinien und Cookies. Erfahren Sie mehr über die sichere und nachhaltige Mobilität mit unseren Elektrorollern und wie wir Ihre Daten schützen. Besuchen Sie uns jetzt auf der Legal- und Cookies-Seite von  Be-SCooTER®."
        ></meta>
        <meta
          name=":image"
          property="og:image"
          content="/images/Be-Scooter.png"
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
