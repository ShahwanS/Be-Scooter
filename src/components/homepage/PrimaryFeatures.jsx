import { Container } from '@/components/utilities/Container'
import { useState } from 'react'
import Image from 'next/image'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function PrimaryFeatures() {
  const [showVideo, setShowVideo] = useState(false)

  const handleVideoClick = () => {
    setShowVideo(true)
  }

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className=" relative  z-10 overflow-hidden bg-gradient-to-b from-blue-400 to-green-500 pt-20 pb-5 md:pb-16 "
    >
      <AnimationOnScroll
        classNameInView={'opacity-100 translate-y-0 transition duration-[1s]'}
        classNameNotInView={'opacity-0 translate-y-10'}
      >
        <Container className="relative">
          <div className="xl:max-w-none mx-auto max-w-6xl text-center font-encode">
            <h2 className="text-3xl  tracking-wide text-white sm:text-4xl md:text-5xl  ">
              BE-SCOOTER®
            </h2>
            <h2 className="text-3xl  tracking-normal text-white sm:text-4xl md:mt-3 md:text-5xl ">
              E-SCOOTER KAUFT MAN NICHT IRGENDWO!
            </h2>
            <p className="mt-6 text-lg tracking-tight text-blue-100 ">
              Warum? Das zeigen wir Euch in unserem neuen Film. Weiterhin gibt
              es einen Überblick über unser Angebot und die Leistungen und wir
              begleiten einen unserer Kunden auf dem Weg zur Arbeit mit seinem
              E-SCooTER. Viel Spaß und Film ab ...
            </p>
          </div>
        </Container>
      </AnimationOnScroll>

      <AnimationOnScroll
        classNameInView={
          'opacity-100 translate-y-0 transition duration-[2s] delay1-150'
        }
        classNameNotInView={'opacity-0 translate-y-10'}
      >
        <div className="mt-10 flex translate-y-10 items-center justify-center opacity-0 transition delay-200 duration-[2s] intersect:translate-y-0 intersect:opacity-100">
          {!showVideo && (
            <div className="relative h-80 w-80 md:h-[500px] md:w-[900px]">
              <Image
                className="h-full w-full rounded-3xl object-cover hover:shadow-2xl"
                src={'/images/pics/thumbnail.jpg'}
                alt="Be-Scooter shop"
                fill={true}
                priority={true}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <Image
                  src={'/images/pics/playbutton.png'}
                  height={100}
                  width={100}
                  alt="Play button"
                  className=" cursor-pointer bg-transparent"
                  onClick={handleVideoClick}
                />
              </div>
            </div>
          )}

          {showVideo && (
            <div className="relative h-80 w-80 md:h-[500px] md:w-[900px] ">
              <iframe
                src="https://www.youtube.com/embed/I63_LUhrq2c"
                allowFullScreen
                className="h-80 w-80 rounded-3xl hover:shadow-2xl md:h-[500px] md:w-[900px]"
              ></iframe>
            </div>
          )}
        </div>
      </AnimationOnScroll>

      <div className="xl:max-w-none mx-auto max-w-6xl text-center font-encode text-lg ">
        <AnimationOnScroll
          classNameInView={'opacity-100 translate-y-0 transition duration-[1s]'}
          classNameNotInView={'opacity-0 translate-y-10'}
        >
          <p className="text-bold m-6 translate-y-10 pt-5 text-lg tracking-tight text-[#FFFFFF] opacity-0 transition duration-1000 intersect:translate-y-0 intersect:opacity-100">
            Unser &quot;SToRE!&quot; in Heuchelheim wird zu 100 % mit ÖKO-STROM
            aus Hessen betrieben und wir verwenden bei der Reinigung unserer
            Fahrzeuge ausschließlich biologisch abbaubare Reinigungsmittel in zu
            100 % recycelten PET-Behältern. Diese Maßnahmen unterstreichen unser
            Verständnis für NACHHALTIGKEIT und UMWELTSCHUTZ. Wir sind
            leidenschaftlich darin, namhafte Marken zu führen und gleichzeitig
            innovative Lösungen zu entdecken, die noch keinen so bekannten Namen
            haben. Genau mit dieser Mischung möchten wir die URBANE MOBILITÄT in
            Zukunft mitgestalten und verändern. Wir bieten und stehen für:
          </p>
        </AnimationOnScroll>
        <div className="gap-1 rounded-3xl text-center md:grid md:grid-cols-3 ">
          <AnimationOnScroll
            classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 "
            classNameInView={
              'opacity-100 lg:translate-x-0 md:translate-y-0 transition duration-[1s] delay-100'
            }
            classNameNotInView={'opacity-0 lg:-translate-x-full'}
          >
            • Umweltfreundliche, zuverlässige und wiederaufladbare
            Mobilitätslösungen
          </AnimationOnScroll>
          <AnimationOnScroll
            classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 "
            classNameInView={
              'opacity-100 translate-x-0 transition duration-[1s] delay-200'
            }
            classNameNotInView={'opacity-0 md:-translate-x-full'}
          >
            • Zwei- und Dreiräder die für SPASS an der Bewegung und
            Beweglichkeit des ganzen Körpers stehen
          </AnimationOnScroll>
          <AnimationOnScroll
            classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 "
            classNameInView={
              'opacity-100 translate-x-0 transition duration-[1s] delay-300'
            }
            classNameNotInView={'opacity-0 md:-translate-x-full'}
          >
            • KUNDENWOHLFÜHLFAKTOR - durch unsere offene, freundliche und
            kundenorientierte Arbeitsweise und dem MEHR an SERVICE (was für uns
            Selbstverständlich ist) verfolgen wir stets das Ziel, das Sie sich
            als Kunde bei BE-SCooTER® wohl fühlen
          </AnimationOnScroll>
          <AnimationOnScroll
            classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 "
            classNameInView={
              'opacity-100 translate-x-0 transition duration-[1s] delay-100'
            }
            classNameNotInView={'opacity-0 lg:-translate-x-full'}
          >
            • Praktisches im Alltag erprobtes{' '}
            <a
              className="underline"
              rel="stylesheet"
              href="https://store.be-scooter.de/collections/e-scooter-zubehor"
            >
              Zubehör für E-SCooTER
            </a>{' '}
            , Fahrräder/eBikes und vielen anderen Fahrzeugen.
          </AnimationOnScroll>
          <AnimationOnScroll
            classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 "
            classNameInView={
              'opacity-100 translate-x-0 transition duration-[1s] delay-200'
            }
            classNameNotInView={'opacity-0 md:-translate-x-full'}
          >
            • Ersatzteilservice für all unsere geführten Marken
          </AnimationOnScroll>
          <AnimationOnScroll
            classnames="m-2 rounded-3xl border border-slate-200 text-[#FFFFFF]  tansparent p-4 "
            classNameInView={
              'opacity-100 translate-x-0 transition duration-[1s] delay-300'
            }
            classNameNotInView={'opacity-0 md:-translate-x-full'}
          >
            • auf Nachhaltigkeit ausgerichtete Produkte und Dienstleistungen
            gleichermaßen wie für Events und Touren im Freizeit-, Privat- oder
            BusinessBereich, die eine unbeschwerte tolle Zeit und Momente
            bieten, die nachhaltig begeistern.
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  )
}
