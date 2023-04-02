import Image from 'next/image'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function Opentimes() {
  return (
    <section className="body-font bg-gradient-to-b from-blue-400 to-green-500 font-encode">
      <div className="mx-auto flex flex-col items-center justify-center px-5 py-10 md:container md:py-10">
        <div className="w-full text-center lg:w-2/3">
          <AnimationOnScroll
            classNameInView={
              'opacity-100 translate-y-0 transition duration-[1s]'
            }
            classNameNotInView={'opacity-0 translate-y-10'}
          >
            <h1 className="title-font leading-wide mb-4 whitespace-nowrap text-5xl font-semibold text-gray-900 sm:text-3xl md:mt-5">
              LIEBE KUNDEN ...
            </h1>
            <p className="mb-8  text-[17px] leading-[32px] ">
              ... wir bitten Sie/Euch in den kommenden Wochen um Verständnis,
              wenn es zu längeren Reaktionszeiten kommt. Wir bitten Sie/Euch uns
              weiterhin Ihr/Euer vollstes Vertrauen zu schenken und möglichst
              von Rückfragen zur Auslieferung bestellter Fahrzeuge oder
              aktuellem Stand der Reparatur Arbeiten abzusehen. Wir werden
              Sie/Euch sobald uns neue Informationen zur Verfügung stehen bzw.
              Reparaturen abgeschlossen sind sofort eine entsprechende
              Information an Sie/Euch weitergeben. Durch die bestehenden und
              nicht kleiner werdenden Schwierigkeiten in der Logistik- und
              Versandbranche kommt es leider zu absolut bisher nicht gekannten
              Folgeproblemen was die Produktion/Herstellung/Fertigstellung und
              Auslieferung von Waren, Ersatzteilen und E-Scooter betrifft. Wir
              sind im ständigen Austausch mit unseren Geschäftspartnern und
              unternehmen alles, was uns möglich ist, Ihre/Eure Wünsche
              schnellstmöglich und nach wie vor, in dem für uns nicht
              diskutierbaren Qualitäts- und Sicherheitsstandart zu erbringen.
              Danke für Ihr/Euer Verständnis, die Geduld und die Treue, die es
              in diesen Zeiten manchmal erfordert.
            </p>

            <p className="mb-8 text-lg leading-relaxed ">
              ... weitere Termine sind nach Vereinbarung selbstverständlich
              möglich.
            </p>
          </AnimationOnScroll>
          <AnimationOnScroll
            classNameInView={
              'opacity-100 translate-y-0 transition duration-[1s]'
            }
            classNameNotInView={'opacity-0 translate-y-10'}
          >
            <Image
              className="mx-auto mb-10 w-full rounded object-cover object-center md:w-5/6 lg:w-3/6"
              alt="Öffnen Zeit Be-Scooter®"
              src={'/images/store/opentimes.png'}
              width={500}
              height={500}
            />
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  )
}
