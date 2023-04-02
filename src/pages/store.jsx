import Head from 'next/head'
import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/store/Hero'
import { Opentimes } from '@/components/store/Opentimes'
import { PrimaryFeatures } from '@/components/store/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/store/SecondaryFeatures'

export default function store() {
  return (
    <>
      <Head>
        <title>&quot;SToRE&quot; Heuchelheim</title>
        <meta
          name="description"
          content="Entdecken Sie unser breites Sortiment an Elektro-Scootern im Online-Shop oder besuchen Sie unsere Filiale vor Ort. Wir bieten eine große Auswahl an Scootern für jeden Bedarf und Geschmack. Profitieren Sie von unserer langjährigen Erfahrung und unserem kompetenten Service. Jetzt bei Be-SCooTER® informieren und bestellen."
        />
        <meta
          name=":image"
          property="og:image"
          content="/images/Be-Scooter.png"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Opentimes />
        <PrimaryFeatures />
        <SecondaryFeatures />
      </main>
      <Footer />
    </>
  )
}
