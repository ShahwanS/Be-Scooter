import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <div
      className="bright flex min-h-screen items-center justify-center bg-cover bg-center font-encode"
      style={{ backgroundImage: `url(/images/pics/bikes.png)` }}
    >
      <div className="flex w-full flex-col justify-between  rounded-xl bg-gradient-to-b from-blue-400 to-green-500 p-8 shadow-md sm:h-[500px] sm:w-[500px]">
        <div className="text-center">
          <Image
            src="/images/pics/beScooter.png"
            alt="Logo"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <div className="text-center">
          <h1 className=" text-2xl font-bold text-gray-800">
            Nachricht erfolgreich übermittelt
          </h1>
          <p className="mt-4 text-center text-lg text-gray-900">
            Vielen Dank für Ihre Nachricht. Wir werden uns so bald wie möglich
            bei Ihnen melden.
          </p>
        </div>
        <div className="text-center">
          <Link
            href="/"
            className="mt-3 w-full rounded-xl border-b-4 border-[#35495e] bg-[#35495e] p-3 font-bold text-white transition hover:-translate-y-1 hover:opacity-90"
          >
            zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}
