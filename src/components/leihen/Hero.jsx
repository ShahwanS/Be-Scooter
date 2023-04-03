import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-0 px-3 text-center  font-encode text-white md:h-screen">
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
        <Image
          className="h-full w-full object-cover  object-center brightness-50 md:mb-10  md:object-cover"
          alt="Scooter leihen"
          src={'/images/leihen/leihen.jpeg'}
          fill
          priority
          loading="eager"
        />
      </div>
      <div className="video-content md:mt-15 my-3 space-y-2 md:w-[800px]">
        <h1 className="break-word font-bold lg:text-2xl">
          TU ES EINFACH - ER WIRD AUCH DICH BEGEISTERN!{' '}
        </h1>
        <h3 className="font-semi-bold text-lg tracking-wide lg:text-3xl">
          <br />
          Teste jetzt einen PREMIUM E-SCooTER aus unsere BE-SCooTER®
          Verleihflotte. <br />
          <br />
          Faire Bedingungen und ein E-SCooTER der hält, was er verspricht. Ganz
          egal ob für den nächsten Urlaub, für einen Test in deinem persönlichen
          Alltag, als Alternative zum Auto oder einfach nur zum cruisen durch
          unsere großartige Heimat - auch dich wird der elektrounterstütze
          Tretroller begeistern.
        </h3>
      </div>
      <a
        href="https://forms.gle/XNveAPxiATQkUXxbA"
        className="video-content mt-5 mb-5 inline-flex justify-center rounded border-2 border-white bg-black py-4 px-6 text-sm  text-white transition duration-500 ease-in-out hover:scale-110 hover:opacity-90 focus:outline-none md:mt-10 md:w-1/3 md:py-4  md:text-lg"
      >
        JETZT LEIHEN
      </a>
    </section>
  )
}
