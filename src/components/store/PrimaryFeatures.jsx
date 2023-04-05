import Image from 'next/image'

export function PrimaryFeatures() {
  return (
    <section className="relative flex h-[400px]  flex-col items-center justify-center py-0 px-3 text-center font-encode text-white md:h-screen">
      <div className="video-docker absolute top-0 left-0 h-full w-full overflow-hidden">
        <iframe
          className="absolute hidden min-h-full min-w-full scale-125 object-cover md:block"
          src="https://www.youtube-nocookie.com/embed/Grcq0AnidMo?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1&playsinline=1&playlist=Grcq0AnidMo&vq"
          repeat="true"
          width="100%"
          height="100%"
        ></iframe>

        <Image
          className="h-full w-full  object-cover object-center brightness-50 md:hidden"
          alt="Erget Scooter"
          src={'/images/store/SXT.jpg'}
          fill={true}
        />
      </div>

      <div className="video-content flex flex-col items-center justify-between space-y-11 md:h-[60%]">
        <h1 className="text-lg font-light md:text-7xl">SXT Buddy Pro eKFV</h1>
        <h3 className="text-sm font-light md:py-5 md:text-3xl lg:text-4xl">
          Bei der Konzeptionierung diesen Modells hat der hersteller versucht
          sämtliche Werte bestmöglich auszureizen, was sich bei den technischen
          Werten beeindruckend bemerkbar macht – selbstverständlich alles im
          Rahmen der Möglichkeiten innerhalb der eKFV Zulassung / ABE Erteilung.
        </h3>
        <a
          href="https://store.be-scooter.de/collections/frontpage/products/sxt-buddy-pro-ekfv"
          className="inline-flex justify-center rounded-lg border-0 bg-slate-200 py-1 px-6 text-sm text-black ring-1 ring-white hover:opacity-80 focus:outline-none md:w-1/3 md:bg-black md:py-2 md:text-2xl md:text-white"
        >
          Hol Dir jetzt den Buddy Pro eKFV !
        </a>
      </div>
    </section>
  )
}
