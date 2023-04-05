import Image from 'next/image'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function Hero() {
  return (
    <div className="h-full overflow-hidden bg-[#7e92a575] font-encode md:flex md:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mt-10 block items-center justify-center md:hidden ">
          <Image
            src={'/images/events/Fahrstunde.jpg'}
            alt="Product screenshot"
            className="rounded-xl object-contain  lg:ml-auto "
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="mx-auto grid-cols-2 gap-y-16 gap-x-8 sm:gap-y-20 md:mt-20 md:grid">
          <div className="lg:pr-8 lg:pt-4">
            <div className="mt-7 flex flex-grow flex-col justify-between text-center md:mt-0 ">
              <div>
                <h2 className="break-words text-3xl font-normal tracking-widest text-[#333333]">
                  BE-SCOOTER® -
                </h2>
                <h2 className="mt-2 break-words text-2xl font-bold tracking-widest text-[#333333]">
                  FAHRSICHERHEITSTRAINING „BASIC“ MIT EINEM E-SCOOTER
                </h2>
              </div>
              <p className="text-md mt-5 leading-8 text-[#333333] md:mt-2 md:text-lg">
                Das Ziel ist es, das Sicherheitsgefühl beim Führen von
                elektrounterstützten Fahrzeugen zu erhöhen und für die neue
                Fortbewegungsmöglichkeit der kommenden Jahre: ELEKTROMOBILITÄT
                zu sensibilisieren! <br /> In 60 Minuten erläutern wir das
                Basiswissen zu den Voraussetzungen und Regeln der Teilnahme am
                Straßenverkehr, informieren über Wartung und Pflege des
                Fahrzeuges / Akku und weiterhin gibt es eine
                Sicherheitsempfehlung und natürlich Zeit für individuelle
                Fragen.
              </p>
              <a
                href="https://store.be-scooter.de/products/fahrsicherheitstraining-basic-mit-einem-e-scooter?_pos=1&_psq=fahrsicher&_ss=e&_v=1.0"
                className="mt-5 inline-flex w-full justify-center rounded border-2 border-white bg-black  py-4 px-6 text-lg   text-white transition duration-500 ease-in-out hover:opacity-90 focus:outline-none md:mt-5 md:py-2 lg:mt-auto "
              >
                Fahrsicherheitstraining Online Buchen
              </a>
            </div>
          </div>
          <div className="relative mt-1 hidden items-center justify-center md:block md:h-auto md:w-auto">
            <Image
              src={'/images/events/Fahrstunde.jpg'}
              alt="Fahrsicherheitstraining"
              className="rounded-xl object-contain  lg:ml-auto"
              fill
            />
          </div>
        </div>

        <div className="mt-14 border-2 border-transparent bg-gradient-to-b from-blue-400 to-green-500 p-1" />

        <AnimationOnScroll
          classNameInView={'opacity-100 translate-y-0 transition duration-1000'}
          classNameNotInView={'opacity-0 translate-y-10'}
        >
          <div className="mx-auto mt-16 gap-y-16 gap-x-8 sm:gap-y-20 md:grid md:grid-cols-2 ">
            <div className="relative flex flex-grow items-center justify-center ">
              <Image
                src={'/images/events/birthdayCruise.jpg'}
                alt="BirthdayCruise"
                className="rounded-xl object-cover shadow-xl md:h-auto md:w-auto"
                width={900}
                height={900}
              />
            </div>
            <div className="lg:pr-8 lg:pt-4">
              <div className=" flex flex-grow flex-col justify-between text-center  ">
                <div>
                  <h2 className="break-words text-3xl font-bold tracking-widest text-[#333333]  sm:mt-10 md:mt-0">
                    &quot;... BIRTHDAY CRUISEN!&quot; - Die
                    Geburtstags-(TOR)TOUR
                  </h2>
                </div>
                <p className="text-md mt-6 leading-8 text-[#333333] md:text-lg">
                  DU FEIERST DEMNÄCHST DEINEN 14. (15.,16.,17.,18.,19.,20. oder
                  21.) GEBURTSTAG UND WILLST MIT DEINEN FREUNDEN MAL WAS GANZ
                  NEUES ERLEBEN? DANN SOLLTEST DU DIR UNSER HIGHLIGHT FÜR EURE
                  ELEKTROUNTERSTÜTZTE GEBURTSTAGS-PARTY FÜR ALLE VON 14 - 21
                  JAHREN SICHERN. Erlebe endlich wieder FRISCHLUFT und entdecke
                  unsere Heimat beim elektrounterstützten Tretrollern! Unter
                  Anleitung und mit Begleitung eines TOURGUIDE von BE-SCooTER®,
                  heisst es dann gemeinsam FUN und MOMENTE erleben, die Dich und
                  Deine Freunde nachhaltig begeistern werden. Sei Dir sicher von
                  diesem Event, wird man noch lange sprechen! Wir nennen es ganz
                  lässig: &quot;...BIRTHDAY CRUISEN!&quot;
                </p>
                <a
                  href="https://store.be-scooter.de/collections/e-scooter-events/products/hollyday-cruise-one-summer-2020"
                  className="mb-5 mt-5 inline-flex w-full justify-center rounded border-2 border-white bg-black py-4 px-6 text-lg text-white transition duration-500 ease-in-out hover:opacity-90 focus:outline-none md:mt-7 md:py-3 lg:mt-9"
                >
                  Jetzt Online Buchen
                </a>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  )
}
