import Head from 'next/head'
import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/ueber-uns/Hero'
import { PrimaryFeatures } from '@/components/ueber-uns/PrimaryFeatures'

export default function Ueberuns() {
  return (
    <>
      <Head>
        <title>Ueber uns</title>
        <meta
          name="description"
          content="Be-SCooTER® ist ein aufstrebendes Unternehmen, das sich auf die Herstellung und den Verkauf von qualitativ hochwertigen Elektro-Scootern spezialisiert hat. Erfahren Sie mehr über unser Team und unsere Mission, die umweltfreundliche Mobilität zugänglicher zu machen. Besuchen Sie uns jetzt auf unserer 'Über Uns' Seite!"
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
        <PrimaryFeatures />
      </main>
      <Footer />
    </>
  )
}
