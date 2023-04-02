import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/leihen/Hero'
import { PrimaryFeatures } from '@/components/leihen/PrimaryFeatures'
import Head from 'next/head'
export default function Escooterleihen() {
  return (
    <>
      <Head>
        <title>E-SCooTER leihen</title>
        <meta
          name="description"
          content="Entdecken Sie die bequemste und umweltfreundlichste Art, die Stadt zu erkunden! Mit Be-SCooTER® können Sie hochwertige Elektroroller mieten und flexibel durch die Stadt fahren. Reservieren Sie jetzt Ihren Roller online und genießen Sie eine bequeme, schnelle und nachhaltige Fortbewegung. Be-SCooTER® - Ihre erste Wahl für Roller-Verleih in Deutschland."
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
