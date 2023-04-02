import Image from 'next/image'
import { useState } from 'react'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function Knausgaard() {
  const [showVideo, setShowVideo] = useState(false)

  const handleVideoClick = () => {
    setShowVideo(true)
  }
  return (
    <div className="overflow-hidden bg-[#7e92a575] py-10 font-encode md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* First section */}
        <AnimationOnScroll
          classNameInView="opacity-100 translate-y-0 transition duration-1000"
          classNameNotInView="opacity-0 translate-y-10"
        >
          <div className="relative mx-auto grid-cols-2 gap-y-16 gap-x-8 sm:gap-y-20 md:grid lg:mx-0 lg:max-w-none">
            {/* Mobile image */}
            <Image
              src="/images/pics/Erget.png"
              width={500}
              height={500}
              alt="Erget Products"
              className="h-auto w-auto rounded-xl shadow-xl md:hidden"
            />

            {/* Text content */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="flex h-auto flex-col justify-between text-center lg:max-w-lg">
                <div>
                  <h2 className="mt-2 break-words text-3xl font-bold tracking-widest text-[#333333] sm:text-3xl">
                    AUTHORIZED SERVICE <br /> FÜR EGRET
                  </h2>
                </div>
                <p className="text-md mt-6 leading-8 text-[#333333] md:text-lg">
                  Nach der erfolgreichen Teilnahme an der Produkt-, Service- und
                  Reparaturschulung in Hamburg gibt es bei uns in Heuchelheim
                  nun auch den Service für die E-SCooTER von unserem
                  langjährigen Partner EGRET. Auch Kunden die Ihren
                  &quot;EGRET&quot; nicht bei uns erworben haben, können sich
                  bei Problemen oder Fragen an uns wenden. Wir freuen uns sehr
                  über die noch engere Zusammenarbeit mit dem Unternehmen aus
                  Hamburg, der für höchste Qualitätsansprüche und Fahrzeuge der
                  Spitzenklasse steht.
                </p>
                <button className=" mt-3 rounded-xl border-b-4 border-[#35495e] bg-[#35495e] py-3 px-4 font-bold text-white transition hover:-translate-y-1 hover:opacity-90">
                  <a href="https://store.be-scooter.de/collections/egret">
                    Erget E-SCooTER IM &quot;SToRE ONLINE!&quot;
                  </a>
                </button>
              </div>
            </div>

            {/* Desktop image */}
            <div className="relative hidden h-auto w-auto md:block">
              <Image
                src="/images/pics/Erget.png"
                fill
                alt="Authorized Erget E-SCooTER Seller"
                className="h-auto w-auto rounded-xl shadow-xl"
              />
            </div>
          </div>
        </AnimationOnScroll>

        {/* Second section */}
        <AnimationOnScroll
          classNameInView="opacity-100 translate-y-0 transition duration-1000"
          classNameNotInView="opacity-0 translate-y-10"
        >
          <div className="mx-auto mt-28 grid-cols-2 gap-y-16 gap-x-8 pb-10 sm:gap-y-20 md:grid lg:mx-0 lg:max-w-none">
            {/* Video */}
            <div className="flex items-center justify-center pb-10">
              {!showVideo && (
                <div className="relative h-auto w-auto">
                  <Image
                    className="object-fit h-auto w-full rounded-3xl hover:shadow-2xl"
                    src="/images/pics/thumbnail4.png"
                    width={700}
                    height={700}
                    alt="Video Thumbnail"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <Image
                      src="/images/pics/playbutton.png"
                      height={100}
                      width={100}
                      alt="Play button"
                      className="cursor-pointer bg-transparent"
                      onClick={handleVideoClick}
                    />
                  </div>
                </div>
              )}

              {showVideo && (
                <div className="relative h-auto w-full">
                  <iframe
                    src="https://www.youtube.com/embed/UZ5eL_Vhhck"
                    allowFullScreen
                    className="h-[195px] w-full rounded-3xl hover:shadow-2xl md:h-[480px]"
                  ></iframe>
                </div>
              )}
            </div>

            {/* Text content */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="flex h-auto flex-col justify-between text-center">
                <div>
                  <h2 className="text-2xl font-bold tracking-widest text-[#333333]">
                    FEEL THE ENERGY.
                  </h2>
                  <h2 className="mt-4 text-3xl font-bold tracking-widest text-[#333333]">
                    VMAX AB SOFORT BEI BE-SCOOTER®
                  </h2>
                </div>
                <p className="text-md mt-6 leading-8 text-[#333333]">
                  Ein VMAX E-Scooter ist kein Produkt von der Stange. Die
                  Schweizer haben eine eigene ISO-zertifizierte
                  Produktionsstätte, wo die VMAX E-Scooter zusammengebaut
                  werden. Das Feedback von Kunden wird hier bei der Entwicklung
                  berücksichtigt. <br />
                  <br />
                  Wir sind stolz, mit VMAX einen weiteren Top-Hersteller der
                  E-Scooter Branche präsentieren zu können, der für höchste
                  Qualität und Wertigkeit steht. <br />
                  <br />
                  Die neuen Modelle, die Ende April und im Mai ausgeliefert
                  werden, können hier ab sofort bereits vorbestellt werden.
                </p>
                <button className=" mt-3 rounded-xl border-b-4 border-[#35495e] bg-[#35495e] py-3 px-4 font-bold text-white transition hover:-translate-y-1 hover:opacity-90">
                  <a href="https://store.be-scooter.de/products/vmax-die-vx2-serie-e-scooter?_pos=2&_sid=fa05ad123&_ss=r">
                    ZUR VX2 PRO SERIE
                  </a>
                </button>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  )
}
