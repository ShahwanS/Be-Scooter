import Image from 'next/image'

export function SecondaryFeatures() {
  return (
    <section className=" relative flex flex-col items-center justify-center bg-[#8dd5e2] py-0 text-center font-encode text-gray-900 md:h-screen md:px-3">
      <div className=" top-0 left-0 h-full w-full overflow-hidden md:absolute">
        <Image
          className="w-full object-cover object-center brightness-50 md:mb-10 md:h-full md:w-full md:brightness-50"
          alt="E-SCooTER-PARKPLATZ für TRANSPORT by fraesfreude und BE-SCooTER®"
          src={'/images/store/E-SCooTER-PARKPLATZ.jpg'}
          fill
        />
      </div>
      <div className="video-content flex flex-col items-center justify-between space-y-11 p-2 text-white md:h-[60%]">
        <h1 className="text-md font-light md:text-7xl">
          E-SCooTER-PARKPLATZ für TRANSPORT by fraesfreude und BE-SCooTER®
        </h1>
        <h3 className="text-sm font-light md:text-4xl">
          Gemeinsam mit unserem Partner &quot;fraesfreude&quot;, bieten wir Euch
          nun den ersten Parkplatz für E-SCooTER und damit eine clevere und
          praktische Lösung bei der bekannten Herausforderung, den E-SCooTER
          sicher im Auto zu transportieren. <br /> funktional -
          ästhetisch - intelligent
        </h3>
        <button className="inline-flex w-[300px] justify-center rounded-lg border-0 bg-slate-200 py-1 px-6 text-sm text-black ring-1 ring-white hover:opacity-80 focus:outline-none md:w-1/3 md:bg-black md:py-2 md:text-2xl md:text-white">
          <a href="https://store.be-scooter.de/products/e-scooter-parkplatz-by-fraesfreude-und-be-scooter%C2%AE?_pos=1&_psq=parkplatz&_ss=e&_v=1.0">
            E-SCooTER-PARKPLATZ entdecken
          </a>
        </button>
      </div>
    </section>
  )
}
