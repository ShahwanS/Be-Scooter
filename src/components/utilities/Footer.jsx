import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className=" h-auto border-gray-900 bg-gradient-to-br from-green-400 to-blue-400 p-4  font-encode">
      <div className="md:flex md:justify-center ">
        <div className="mb-6 flex flex-row justify-between  md:mb-0 ">
          <Link href="https://www.it-recht-kanzlei.de/">
            <Image
              className="mt-2 "
              src="https://www.it-recht-kanzlei.de/logo/Logo_Juristisch_betreut_durch_IT-Recht_Kanzlei.png?i=3b2f2-21a74-39c6-907c-1"
              alt="Vertreten durch die IT-Recht Kanzlei"
              width={120}
              height={120}
            />
          </Link>
          <Link href="#" aria-label="Home">
            <Image
              className="rounded-lg md:mx-20"
              src={'/images/pics/beScooter.png'}
              alt="My Image"
              width={250}
              height={250}
            />
          </Link>

          <Link href="#" aria-label="Home">
            <Image
              className=" rounded-lg"
              src={'/images/pics/fairness.jpg'}
              alt="My Image"
              width={85}
              height={85}
            />
          </Link>
        </div>
      </div>
      <hr className="mx-auto my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
      <div className="flex  items-center justify-center">
        <div className="mx-auto grid-cols-3 justify-center gap-6 text-center text-lg uppercase text-black md:grid md:gap-8">
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Resources</h2>
            <ul className=" text-gray-900 dark:text-gray-700">
              <li className="mb-4">
                <Link
                  href="/Career"
                  className="text-lg hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900 "
                >
                  Jobs
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="https://tailwindcss.com/"
                  className="text-lg hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900 "
                >
                  E-SCooTER REPARATUR
                </Link>
              </li>
              <li>
                <Link
                  href="https://store.be-scooter.de/"
                  className="text-lg hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900 "
                >
                  {' '}
                  &quot;SToRE Online!&quot;
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 mt-10 text-2xl font-semibold md:mt-0">
              Follow us
            </h2>
            <ul className="text-gray-900 dark:text-gray-700">
              <li className="mb-4">
                <a
                  href="https://www.facebook.com/bescooter.de/"
                  className="text-lg hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900 "
                >
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.youtube.com/channel/UCBbSWykgqvMCUOvSbtcqHOA?"
                  className="text-lg hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900 "
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/be_scooter_funsport/"
                  className="text-lg hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900 "
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 mt-10 text-2xl font-semibold md:mt-0">
              {' '}
              Legal
            </h2>
            <ul className="text-gray-900 dark:text-gray-700">
              <li className="mb-4">
                <Link
                  href="Infos#impressum"
                  className="text-lg hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900 "
                >
                  Impressum
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="Infos#Datenschutz"
                  className="text-lg hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900 "
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="Infos#Cookie-Einstellungen"
                  className="text-lg hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900 "
                >
                  Cookie-Einstellungen
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mx-auto my-6 border-gray-200 dark:border-gray-900 lg:my-8" />
      <div className="flex justify-center">
        <div className="flex flex-wrap items-center justify-center">
          <span className="dark:black text-center text-sm text-black">
            UST-ID.: DE815814992
          </span>
          <span className="dark:black w-full text-center text-sm text-black">
            © 2023{' '}
            <a href="https://www.be-scooter.de/" className="hover:underline">
              BE-SCooTER®
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex justify-center space-x-6 ">
            <a
              href="https://www.facebook.com/bescooter.de/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com/be_scooter_funsport/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCBbSWykgqvMCUOvSbtcqHOA?"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span className="sr-only">Youtube page</span>
            </a>

            <a
              href="https://store.be-scooter.de/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-10 w-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Website account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
