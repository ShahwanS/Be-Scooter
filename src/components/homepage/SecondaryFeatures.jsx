import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import Image from 'next/image'

const sliderData = [
  {
    title: 'CRUSSIS: Komfort und Sicherheit durch wertigste Komponenten',
    description:
      'Ziel ist es, dass CRUSSIS-Produkte die bestmöglichen Fahreigenschaften bieten, weshalb sie immer präzise konstruiert und mit hochwertigen Komponenten ausgestattet sind und sein werden, um den Anforderungen des Sportreitens sowie des Ganztagesfahrens gerecht zu werden. Dabei muss es eine einfache, komfortable und sichere Fahrt bieten. Daher verwenden wir nur Markenkomponenten von Weltherstellern, die eine hohe Qualität und lange Lebensdauer garantieren.',
    buttonText: 'CRUISSIS JETZT ENTDECKEN!',
    buttonLink:
      'https://store.be-scooter.de/products/crussis-cobra-4-1-scooterbike?_pos=11&_sid=4078cab7c&_ss=r',
    imageSrc: '/images/pics/news1.png',
    imageAlt: 'Cruissis Scooterbikes',
  },
  {
    title: 'NEUE LIEFERUNG : Stunt-Scooter und Cityroller von Soke',
    description:
      'Rechtzeitig zum Weihnachtsgeschenke-Shoppen haben wir wieder viele Modelle der beliebten STUNTSCOOTER und CITYROLLER von SOKE vorrätig. Auch Ersatzteile von SOKE wie neue Rollen, Bremsen, Griffe oder GRIP-TAPES sind wieder in großer Auswahl vor Ort. Bei der Entwicklung der Marke SOKE war von Beginn an das Ziel, dass sie junge Rollerfahrer vom Erlernen der ersten Tricks bis zu den fortschrittlichsten Tricks begleitet. Mit SOKE werden Champions geboren.',
    buttonText: 'Soke SCooTERBIKES Entdecken',
    buttonLink: 'https://store.be-scooter.de/collections/soke',
    imageSrc: '/images/pics/news2.png',
    imageAlt: 'Stunt-Scooter Soke Cityroller',
  },
  {
    title: 'JEDOO EMOJI : Laufräder und Tretroller',
    description:
      '„Schick ein ❤️, wenn´s Spaß macht! Und ein 😈, wenn du vor Freude quietschst!“ Wir zischen ab. Kurze Bildergeschichten erzählen, wie ihr auf zwei Rädern die Zeiger jeder 🕒, besiegt, wenn ihr wie der ⚡ davonsaust, oder wie es euer Magen findet, wenn ihr euch in kurzer Zeit 🥐🍔 und 🍦 reinzieht. Strahlende Farben und Emoticons, das ist das unverwechselbare Design dieser Geräte, die Kinder mit Sicherheit raus an die ☀️ locken. Wenn die kleinen Fahrer dann von ihrem Tag berichten, sollten es viele 😍🔝👍🏻🌈geben.',
    buttonText: 'HIER GEHTS ZUM KACKHÄUFCHEN👍🏻',
    buttonLink:
      'https://store.be-scooter.de/products/yedoo-laufrad-tootoo-emoji?_pos=1&_psq=emoji%2B&_ss=e&_v=1.0',
    imageSrc: '/images/pics/news3.png',
    imageAlt: 'JEDOO EMOJI LAUFRÄDER',
  },
  {
    title: 'BE-SCooTER® 2023 Touren!',
    description:
      'Entdecke die Stadt mit unseren E-Scooter-Touren! 🛴💨 Wähle aus verschiedenen, spannenden Optionen, die für jeden Geschmack etwas bieten. 🎉 Buche jetzt und erlebe ein umweltfreundliches Abenteuer! 🌳🌍✨ Lass uns gemeinsam unvergessliche Erinnerungen schaffen! 🎊🛴🗺️ Steig auf, genieße die Fahrt und freu dich auf unvergessliche Momente! 🤩🌈',
    buttonText: 'JETZT BUCHEN 🛴💨',
    buttonLink: 'https://store.be-scooter.de/collections/touren-1',
    imageSrc: '/images/pics/tours.jpg',
    imageAlt: 'Be-SCooTER Touren',
  },
  {
    title: (
      <h2 className="pb-2 text-xs md:text-xl lg:text-4xl">
        MAXIMUS- <br /> DER STYLISCHE E-ROLLER FÜR ZWEI PERSONEN!
      </h2>
    ),
    description: (
      <p className="sm:text-xs md:text-[14.5px] md:leading-normal lg:p-5 lg:text-base">
        <strong className="font-bold">Sie haben die Auswahl:</strong>
        <br />
        45 km/h auf zwei Rädern oder doch lieber 25 km/h auf drei Rädern?
        <br />
        Verdoppeln Sie die Reichweite mit dem optionalen Zusatzakku für
        maximalen Fahrspaß!
        <br />
        <br />
        <strong className="font-bold">Einfach unbeschwert unterwegs!</strong>
        <br />
        Das stylische und leistungsstarke Maximus MX2 E-Mofa überzeugt nicht nur
        im sportlichen Design, sondern auch mit vielen weiteren beeindruckenden
        Features.
        <br />
        <br />
        <strong className="font-bold">Sportlich auf drei Rädern</strong>
        <br />
        Der Maximus MX3 ist ein wahrer Hingucker. Ein Must-have für alle, die
        ein praktisches, zuverlässiges, kosteneffizientes und umweltfreundliches
        Elektrofahrzeug suchen für bis zu zwei Personen!{' '}
      </p>
    ),
    buttonText: "MAXIMALE INFO'S ZUM MAXIMUS!",
    buttonLink:
      'https://store.be-scooter.de/products/maximus-e-scooter-mx2-45-45-km-h-60v-32-5ah-lithium-akku-3000-watt',
    imageSrc: '/images/pics/maximus.jpg',
    imageAlt: 'Maximus Scooter',
  },
  {
    title: 'WIR SIND OFFIZIELLER PARTNER VON JOBRAD®',
    description:
      'Informiert Euch jetzt bei uns im "SToRE ONLINE!" über das neue Angebot in Zusammenarbeit mit JOBRAD®. Über uns hast Du und Deine Arbeitskollegen/innen die Möglichkeit, unsere hochwertigen und stylischen SXT VELOX / SXT VELOX MAX als Job-ePedelec zu bestellen und dabei jede Menge zu sparen. ',
    buttonText: 'Mehr lesen',
    buttonLink: 'https://store.be-scooter.de/pages/jobrad',
    imageSrc: '/images/pics/jobrads.jpg',
    imageAlt: 'Jobrad be-scooter',
  },
]

export function SecondaryFeatures() {
  useEffect(() => {
    const swiperInstance = document.querySelector('.swiper-container').swiper
    const prevButton = document.querySelector('.custom-swiper-prev')
    const nextButton = document.querySelector('.custom-swiper-next')

    prevButton.addEventListener('click', () => {
      swiperInstance.slidePrev()
    })

    nextButton.addEventListener('click', () => {
      swiperInstance.slideNext()
    })

    return () => {
      prevButton.removeEventListener('click', swiperInstance.slidePrev)
      nextButton.removeEventListener('click', swiperInstance.slideNext)
    }
  }, [])

  return (
    <section className="section h-[900px] bg-[#7e92a575] pt-4 md:h-[750px] lg:h-[850px]">
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-container h-full font-encode"
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="z-0 px-5 pt-5 md:relative md:px-20 "
          >
            <div className="grid h-[800px] grid-rows-2 overflow-hidden rounded-3xl bg-gray-300 shadow-md hover:shadow-2xl md:h-[600px] md:grid-cols-2 md:grid-rows-none lg:h-[750px] lg:grid-cols-2">
              <div className="order-2 flex flex-col justify-between p-1 md:justify-between md:p-8">
                <div className="text-md text-center font-bold text-black  md:text-5xl">
                  {slide.title}
                </div>
                <div className="text-center text-[15px] text-[#333333] md:text-base lg:text-xl">
                  {slide.description}
                </div>
                <button
                  href={slide.buttonLink}
                  className="md:text-md mx-auto mt-3 w-full max-w-full self-start rounded-3xl bg-[#3A3A3A] p-2 text-sm font-bold text-white hover:bg-opacity-80 md:mt-5 md:max-w-[90%] lg:max-w-[80%] lg:text-lg"
                >
                  <a>{slide.buttonText}</a>
                </button>
              </div>
              {(index === 0 || index === 1 || index === 2) && (
                <div className="relative">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill={true}
                    className="absolute top-0 left-0 h-auto w-full object-cover md:h-full"
                  />
                </div>
              )}
              {(index === 3 || index === 4 || index === 5) && (
                <div className="relative">
                  <Image
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    fill={true}
                    className=" absolute top-0 left-0 h-auto w-full object-center md:h-full"
                  />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
        <button className="custom-swiper-prev absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 transform text-8xl font-bold text-black focus:outline-none md:block">
          &lsaquo;
        </button>
        <button className="custom-swiper-next absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 transform text-8xl font-bold text-black focus:outline-none md:block">
          &rsaquo;
        </button>
      </Swiper>
    </section>
  )
}
