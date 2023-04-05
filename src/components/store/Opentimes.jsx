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
              wir möchten Sie darüber informieren, dass es in den letzten Wochen
              aufgrund von Problemen an unserer Telefonanlage zu einer
              schlechteren Erreichbarkeit unseres Kundenservice gekommen ist.
              Wir möchten uns aufrichtig für die längeren Reaktionszeiten
              entschuldigen, die dadurch entstanden sind. Wir möchten Ihnen
              jedoch versichern, dass wir das Problem zwischenzeitlich
              lokalisiert haben und mit Hochdruck an einer abschließenden Lösung
              arbeiten. Wir sind uns bewusst, wie wichtig eine zuverlässige
              Erreichbarkeit unseres Kundenservice für Sie ist und tun alles, um
              Ihnen in Zukunft wieder den gewohnten Service bieten zu können.
              Sollten Sie uns momentan telefonisch nicht erreichen können,
              bitten wir Sie, uns gerne auch per E-Mail oder über unser
              Kontaktformular auf unserer Website zu kontaktieren. Wir möchten
              Sie jedoch darauf hinweisen, dass es aktuell zu erhöhten Anfragen
              kommt, wodurch es zu etwas längeren Wartezeiten kommen kann. Wir
              bitten Sie hierfür um Ihr Verständnis und Ihre Geduld. <br /> Eine
              gute Zeit wünscht Euch, <br /> Euer BE-SCooTER Team
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
