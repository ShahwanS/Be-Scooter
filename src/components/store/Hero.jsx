import Image from 'next/image'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function Hero() {
  return (
    <section className="body-font bg-[#7e92a575] font-encode md:h-[833px]">
      <div className="mx-auto flex flex-col items-center justify-center px-5 py-7  md:container">
        <h1 className="title-font leading-wide mb-5 text-center text-4xl font-bold text-gray-900 md:text-3xl lg:mb-8 lg:text-4xl">
          JETZT VIRTUELLES SHOPPING IM BE-SCOOTER® &quot;STORE!&quot; IN
          HEUCHELHEIM.
        </h1>
        <Image
          width={500}
          height={500}
          alt="Be-Scooter Store"
          src={'/images/store/beScooterStore.png'}
          className="mb-10 rounded object-cover object-center md:w-[360px] lg:w-[445px] "
          priority
        />
        <div className="w-full text-center lg:w-2/3">
          <AnimationOnScroll
            classNameInView={
              'opacity-100 translate-y-0 transition duration-[1s]'
            }
            classNameNotInView={'opacity-0 translate-y-10'}
          >
            <p className="mb-8 text-lg leading-relaxed">
              Unser neuer Service bietet Euch die Möglichkeit, von zu Hause aus
              in aller Ruhe durch unseren &quot;SToRE!&quot; zu schlendern und
              einen großen Teil unseres Angebotes genau zu begutachten. Viel
              Spaß beim virtuellen Besuch in unserem &quot;SToRE!&quot;.
            </p>

            <div className="flex justify-center">
              <a
                href="https://my.matterport.com/show/?m=Bqq8LBrojFY"
                className="inline-flex w-9/12 justify-center rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
              >
                Virtuelle Ansicht Shopping
              </a>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  )
}
