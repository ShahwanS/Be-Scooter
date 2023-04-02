import Image from 'next/image'

export function SecondaryFeatures() {
  return (
    <section className=" relative flex flex-col items-center justify-center bg-[#8dd5e2] py-0 text-center font-encode text-gray-900 md:h-screen md:px-3">
      <div className=" top-0 left-0 h-full w-full overflow-hidden md:absolute">
        <Image
          className="w-full object-cover object-center brightness-50 md:mb-10 md:h-full md:w-full md:opacity-70 md:brightness-50"
          alt="Segway Scooters"
          src={'/images/store/yedoo_auto_x2.jpg'}
          fill
        />
      </div>
      <div className="video-content flex flex-col items-center justify-between space-y-11 p-2 text-white md:h-[60%]">
        <h1 className="text-md font-light md:text-7xl">
          SXT Scooters - SXT Buddy Pro eKFV
        </h1>
        <h3 className="text-sm font-light md:text-4xl">
          Die Motorleistung des Egret Pro setzt neue Maßstäbe: 27 Nm sorgen für
          eine noch kraftvollere Beschleunigung und eine beeindruckende
          Performance auch bei Steigung oder höherer Zuladung. Teste dieses
          Kraftpaket bei uns im &quot;SToRE!&quot; in Heuchelheim. Natürlich ist
          der PRO bei uns als Fachhändler von EGRET auch noch verfügbar.
        </h3>
        <button className="inline-flex w-[300px] justify-center rounded-lg border-0 bg-slate-200 py-1 px-6 text-sm text-black ring-1 ring-white hover:opacity-80 focus:outline-none md:w-1/3 md:bg-black md:py-2 md:text-2xl md:text-white">
          <a href="https://store.be-scooter.de/search?q=yedoo&options%5Bprefix%5D=last">
            Yedoo Tretroller, Laufräder und Zubehör entdecken
          </a>
        </button>
      </div>
    </section>
  )
}
