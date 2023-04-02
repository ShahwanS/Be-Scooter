import 'intl-tel-input/build/css/intlTelInput.css'
import ContactForm from '../homepage/ContactForm'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

export function Faqs() {
  return (
    <section
      id="kontakt"
      className="body-font brightness_[0.95] relative overflow-hidden bg-opacity-90 bg-[url('/images/background-auth.png')] bg-cover font-encode text-gray-600"
    >
      <div className="mx-auto px-5 py-5 md:grid md:grid-cols-2 md:py-20">
        <AnimationOnScroll
          classNameInView="opacity-100 transform transition-all duration-500 ease-in-out"
          classNameNotInView="opacity-0 transform translate3d(-20px, 0, 0)"
        >
          <div className="relative items-end justify-start rounded-lg bg-gray-300 p-10 md:flex md:h-[620px] md:w-full md:flex-col lg:h-[720px]">
            <iframe
              className="grayscale-20 contrast-60 absolute inset-0 h-full w-full opacity-50 filter"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40535.961992898876!2d8.618078193528083!3d50.58070350022497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc5d92577d2761%3A0x46980a3067659349!2sBE-SCooTER%20...FUNsport%20erFAHREN*21!5e0!3m2!1sen!2sde!4v1677988427154!5m2!1sen!2sde"
            ></iframe>

            <div className="flex flex-wrap rounded bg-white py-6 shadow-md md:absolute">
              <div className="px-6 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  ADDRESS
                </h2>
                <a href="geo:50.551983,8.704167?q=Rodheimer+Str.+126,+35452+Heuchelheim">
                  <p className="mt-1 text-lg">
                    Rodheimer Str. 126, 35452 Heuchelheim
                  </p>
                </a>
              </div>
              <div className="mt-4 px-6 lg:mt-0 lg:w-1/2">
                <h2 className="title-font text-xs font-semibold tracking-widest text-gray-900">
                  EMAIL
                </h2>
                <a
                  href="mailto:info@be-scooter.de"
                  className="leading-relaxed text-indigo-500"
                >
                  info@be-scooter.de
                </a>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  TELEFON
                </h2>
                <a href="tel:+49 641 93923404">
                  <p className="leading-relaxed">+49 641 93923404</p>
                </a>
                <h2 className="title-font mt-4 text-xs font-semibold tracking-widest text-gray-900">
                  MOBIL
                </h2>
                <a href="tel:+49 176 51567370">
                  <p className="leading-relaxed">+49 176 51567370</p>
                </a>
              </div>
            </div>
          </div>
        </AnimationOnScroll>

        <div className="mb-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
