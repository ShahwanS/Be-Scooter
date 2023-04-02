import 'focus-visible'
import '@/styles/tailwind.css'
import CookieConsent from 'react-cookie-consent'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Ich stimme zu"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        Diese Website verwendet Cookies, um Ihnen das beste Nutzererlebnis zu
        bieten. Cookies sind wie E-Scooter für das Internet - sie machen die
        Reise schneller und einfacher!
      </CookieConsent>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
