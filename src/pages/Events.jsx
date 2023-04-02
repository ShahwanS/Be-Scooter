import { Header } from '@/components/utilities/Header'
import { Footer } from '@/components/utilities/Footer'
import { Hero } from '@/components/events/Hero'
import Head from 'next/head'
export default function Events() {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="Entdecken Sie die neuesten Veranstaltungen von Be-SCooTER® - Ihrem zuverlässigen Partner für elektrische Roller. Erleben Sie mit uns unvergessliche Fahrten und lernen Sie Gleichgesinnte kennen. Besuchen Sie jetzt unsere Events-Seite und seien Sie Teil unserer Community!"
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
