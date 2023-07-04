import { useEffect, useState, useRef } from 'react'
import InputField from '../homepage/InputField'
import TextareaField from '../homepage/TextareaField'
import intlTelInput from 'intl-tel-input'
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'

const ContactForm = () => {
  const phoneInput = useRef(null)
  const [phoneNumber, setPhoneNumber] = useState('+49')

  useEffect(() => {
    intlTelInput(phoneInput.current, {
      utilsScript:
        'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
    })
  }, [])

  const handlePhoneChange = (event) => {
    setPhoneNumber(event.target.value)
    setValues((values) => ({
      ...values,
      number: event.target.value,
    }))
  }

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    number: '',
    message: '',
  })

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <AnimationOnScroll
      classNameInView={'opacity-100 translate-x-0 transition duration-1000'}
      classNameNotInView={'opacity-0 translate-x-20 overflow-hidden'}
    >
      <div className="mt-8 w-full overflow-hidden bg-transparent md:ml-auto md:mt-0 md:flex md:w-full md:flex-col md:pl-10 lg:py-8 ">
        {' '}
        <h2 className="title-font mb-1 text-center font-bold text-white md:text-2xl md:text-black lg:text-3xl">
          BE-SCOOTER® ...FUNSPORT ERFAHREN!
        </h2>
        <p className="text-center leading-relaxed text-white md:mb-0 md:text-black lg:mb-10">
          Bitte zögern Sie nicht, uns zu kontaktieren, falls Sie Fragen oder
          Anliegen haben. Wir sind gerne für Sie da und helfen Ihnen weiter. Sie
          können uns entweder per E-Mail, Telefon oder über das Kontaktformular
          auf dieser Seite erreichen.
        </p>
        <h2 className="title-font py-3 px-1 text-left font-bold text-white md:text-2xl md:text-black lg:text-3xl">
          Kontakt uns :
        </h2>
        <form action="https://formsubmit.co/info@be-scooter.de" method="POST">
          <input
            type="hidden"
            name="_next"
            value="https://be-scooter-shahwans.vercel.app/Submit"
          />
          <input
            type="hidden"
            name="_blacklist"
            value="spammy pattern, banned term, phrase"
          ></input>

          <div>
            <label className="text-sm text-slate-200 md:text-black ">
              Name :
            </label>
            <InputField
              value={values.fullName}
              handleChange={handleChange}
              name="fullName"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="text-sm text-slate-200 md:text-black">
              E-Mail Adresse :
            </label>
            <InputField
              value={values.email}
              handleChange={handleChange}
              name="email"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="text-sm text-slate-200 md:text-black ">
              Telefonnnummer :
            </label>
            <input
              className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700  outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              ref={phoneInput}
              value={phoneNumber}
              onChange={(e) => {
                handlePhoneChange(e)
                handleChange(e)
              }}
              name="phone"
              type="tel"
            />
          </div>
          <div>
            <label className="text-sm text-slate-200 md:text-black">
              Nachricht :
            </label>
            <TextareaField
              value={values.message}
              handleChange={handleChange}
              placeholder="Nachricht"
              name="message"
            />
          </div>
          <button
            type="submit"
            className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
          >
            Absenden
          </button>
        </form>
        <p className="md:text-md mt-3 text-sm text-slate-200 md:text-gray-900">
          Ich habe die
          <a
            href="https://www.be-scooter.de/datenschutz/"
            className="mx-1 underline"
          >
            Datenschutzerklärung
          </a>
          zur Kenntnis genommen und erkläre mich damit einverstanden.
        </p>
      </div>
    </AnimationOnScroll>
  )
}

export default ContactForm
