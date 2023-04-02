import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/jobs/Hero'
import { PrimaryFeautures } from '@/components/jobs/PrimaryFeatures'
import Head from 'next/head'

export default function Career() {
  return (
    <>
      <Head>
        <title>Jobs</title>
        <meta
          name="description"
          content="Entdecken Sie Ihre Karrieremöglichkeiten bei Be-SCooTER®! Wir sind ein führender Anbieter von Elektrorollern in Deutschland und suchen talentierte Mitarbeiter, die uns dabei helfen, unsere Vision zu verwirklichen. Informieren Sie sich über unsere aktuellen Stellenangebote und bewerben Sie sich noch heute bei Be-SCooTER®!"
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
        <PrimaryFeautures />
      </main>
      <Footer />
    </>
  )
}
