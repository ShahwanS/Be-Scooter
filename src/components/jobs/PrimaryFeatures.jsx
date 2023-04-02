import Image from 'next/image'

import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function PrimaryFeautures() {
  return (
    <>
    <div className="relative mt-0 flex h-[120px] w-full  items-center justify-center bg-gradient-to-b from-blue-400 to-green-500 brightness-[0.9] md:h-[170px] lg:h-[100px] "/>
    <div className="overflow-hidden bg-[#7e92a575] pb-5 font-encode  md:py-24">
       
      <div className="mx-auto max-w-7xl px-0 lg:px-8 ">
     
        <AnimationOnScroll
          classNameInView={'opacity-100 translate-y-0 transition duration-[1s]'}
          classNameNotInView={'opacity-0 translate-y-10'}
        >
          <div className="mx-auto grid-cols-2 gap-y-16 gap-x-8 sm:gap-y-20 md:grid lg:mx-0 lg:max-w-none">
            <Image
              src={'/images/jobs/jobs2.jpg'}
              width={700}
              height={700}
              alt="Product screenshot"
              className="object-cover  shadow-xl  md:hidden lg:ml-auto"
              priority
            />
            <div className="lg:pr-8 lg:pt-4">
              <div className="h-auto flex-col justify-between text-center  md:flex lg:max-w-lg">
                <div>
                  <h2 className=" text-grey-500 mt-5 break-words text-2xl font-bold tracking-widest md:text-3xl">
                    ❗ WIR SUCHEN DICH ❗
                  </h2>
                  <p className="text-md text-grey-200 mt-6 leading-8 md:text-lg">
                    Zur weiteren Verstärkung unseres Teams suchen wir aktuell ab
                    SOFORT
                  </p>
                  <h2 className=" text-grey-500  mt-2 text-2xl font-bold  tracking-widest">
                    Promoter und Servicekräfte (m, w, d) Verkäufer/in Aushilfe/n
                    im &quot;SToRE!&quot; Mitarbeiter/in für die Reparatur von
                    E-SCooTERN
                  </h2>
                </div>
                <p className="text-md text-grey-200 mt-7 leading-8 md:text-lg">
                  Wir verleihen und verkaufen elektrounterstützte Tretroller /
                  E-SCooTER von den weltweit führenden Unternehmen im Bereich
                  zweirädriger Elektromobilität. Weiterhin sind wir auf Touren
                  und Events rund um Elektrokleinstfahrzeuge spezialisiert. Auch
                  in diesen Bereichen können zukünftig die Aufgabenfelder Deiner
                  Tätigkeit angesiedelt sein. Die aktuellen Stellen sind
                  zunächst auf 450 € - Basis / Aushilfsbasis bzw. auf Basis
                  „Vorübergehende Beschäftigung“ geplant (die Beschäftigung ist
                  auf drei Monate oder auf 70 Arbeitstage im Kalenderjahr im
                  Voraus begrenzt).
                </p>
              </div>
            </div>
            <div className="relative hidden md:block md:h-[650px] md:w-[750]">
              <Image
                src={'/images/jobs/jobs2.jpg'}
                alt="Product screenshot"
                className="rounded-xl object-cover shadow-xl lg:ml-auto "
                fill
              />
            </div>
          </div>
        </AnimationOnScroll>

        <div className="mt-28 border-b border-slate-500 "></div>

        <div className="mx-auto flex flex-col justify-center text-center md:container">
          <AnimationOnScroll
            classNameInView={
              'opacity-100 translate-y-0 transition duration-[1s]'
            }
            classNameNotInView={'opacity-0 -translate-y-10'}
          >
            <div className="flex flex-wrap justify-center pt-10  ">
              <div className="text-grey-200 mt-2 break-words text-lg  font-bold tracking-normal md:text-3xl">
                <h2 className="text-center">Du bist :</h2>
                <h2 className="text-left">
                  ✅ pünktlich und verantwortungsbewusst
                </h2>
                <h2 className="text-left">
                  ✅ aufgeschlossen und kontaktfreudig
                </h2>
                <h2 className="text-left">
                  ✅ arbeitest gerne mit und für Menschen?
                </h2>
              </div>
            </div>

            <p className=" text-grey-200 mt-14 flex flex-col text-center text-lg leading-8 ">
              Du hast ein gepflegtes und sicheres Auftreten und die Bereitschaft
              am Wochenende zu arbeiten? Wenn Du auch noch einen gültigen
              Autoführerschein besitzt und mindestens 18 Jahre alt bist, dann
              bewirb Dich bei uns!
            </p>

            <div className=" text-grey-200 mt-14 flex flex-row text-center text-lg leading-8">
              <p>
                Dich erwartet ein{' '}
                <span className="font-bold">
                  hochmotiviertes, kollegiales und engagiertes Team
                </span>{' '}
                eines seit 2019 am Markt platzierten Unternehmens - welches das
                Ziel hat, unsere Kunden für unsere Fahrzeugen und Angeboten zu
                begeistern. Frischluft ist in der Frühlings- und Sommerzeit auch
                garantiert, da je nach Aufgabengebiet der Einsatz auch im Freien
                stattfinden kann (beispielsweise als TourGuide bei unseren
                geführten Touren).
              </p>
            </div>
          </AnimationOnScroll>
          <div className=" text-grey-200 mt-14 text-center text-lg leading-8 ">
            <span className="text-xl font-bold">BEWIRB DICH BEI UNS </span>
            <p>
              <br />
              eines seit 2019 am Markt platzierten Unternehmens - welches das
              Ziel hat, unsere Kunden für unsere Fahrzeugen und Angeboten zu
              begeistern. Frischluft ist in der Frühlings- und Sommerzeit auch
              garantiert, da je nach Aufgabengebiet der Einsatz auch im Freien
              stattfinden kann (beispielsweise als TourGuide bei unseren
              geführten Touren).
            </p>
          </div>

          <div className="space-between mt-10 grid rounded-xl bg-gradient-to-tr from-blue-300 via-green-300 to-purple-300 bg-contain  py-6 shadow-md">
            <div className=" px-6">
              <h2 className="title-font text-xl font-semibold tracking-widest text-gray-900">
                ADDRESSE
              </h2>

              <a href="geo:50.551983,8.704167?q=Rodheimer+Str.+126,+35452+Heuchelheim">
                <p className="mt-1 text-lg">
                  Rodheimer Str. 126, 35452 Heuchelheim
                </p>
              </a>
            </div>
            <div className=" mt-4 px-6 lg:mt-0">
              <h2 className="title-font text-xl font-semibold tracking-widest text-gray-900">
                Bewerbungen per 📧 an
              </h2>
              <a
                href="mailto:bjoernseibert@be-scooter.de"
                className="text-lg leading-relaxed"
              >
                bjoernseibert@be-scooter.de
              </a>

              <h2 className="title-font mt-4 text-xl font-semibold tracking-widest text-gray-900">
                TELEFON
              </h2>
              <a href="tel:064193923404">
                <p className="text-lg leading-relaxed">☎ 0641 - 93923404</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
