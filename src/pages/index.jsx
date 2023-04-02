import Head from 'next/head'
import { Sponsors } from '@/components/homepage/Sponsors'
import { Faqs } from '@/components/homepage/Faqs'
import { Footer } from '@/components/utilities/Footer'
import { Header } from '@/components/utilities/Header'
import { Hero } from '@/components/homepage/Hero'
import { Knausgaard } from '@/components/homepage/Knausgaard'
import { PrimaryFeatures } from '@/components/homepage/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/homepage/SecondaryFeatures'
import { Testimonials } from '@/components/homepage/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Be-SCooTER®</title>
        <meta
          name="description"
          content="Willkommen bei Be-ScooTER®! Entdecken Sie die Zukunft der Mobilität mit Be-SCooTER®. Unsere Elektroroller bieten eine umweltfreundliche und effiziente Möglichkeit, sich in der Stadt fortzubewegen. Erfahren Sie mehr über unsere Produkte und bestellen Sie noch heute Ihren Be-SCooTER®. Jetzt auf unserer Website informieren!"
        />
        <meta
          name=":image"
          property="og:image"
          content="/images/Be-Scooter.png"
        />
        <meta
          name=":image"
          property="discord:image"
          content="/images/Be-Scooter.png"
        />
        <meta
          name=":image"
          property="whatsapp:image"
          content="/images/Be-Scooter.png"
        />
        <meta
          name=":image"
          property="instagram:image"
          content="/images/Be-Scooter.png"
        />
        <meta
          property="og:Be-Scooter"
          content="BE-SCooTER®  E-SCooTER kauft man nicht irgendwo!"
        />
        <meta name="url" property="url" content="https://Be-Scooter.de/" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Testimonials />
        <Knausgaard />
        <Faqs />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
