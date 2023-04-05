import 'focus-visible'
import '@/styles/tailwind.css'
import CookieConsent from 'react-cookie-consent'
import { Analytics } from '@vercel/analytics/react'
import CookiePreferencesPopup from '@/components/utilities/CookiePreferencesPopup'
import React, { useState, useRef } from 'react'

export default function App({ Component, pageProps }) {
  const [showPreferencesPopup, setShowPreferencesPopup] = useState(false);
  const [shouldAccept, setShouldAccept] = useState(false);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);

  const handleSavePreferences = (preferences) => {
    // Save preferences using cookies or any other storage method
    console.log('Preferences saved:', preferences);
    setAnalyticsCookies(preferences.analyticsCookies);
    setMarketingCookies(preferences.marketingCookies);
    setShowPreferencesPopup(false);
    setShouldAccept(true);
  };

  const handleAccept = () => {
    if (shouldAccept) {
      setShouldAccept(false);
    } else {
      // If the user hasn't set any preferences, accept all cookies
      if (!analyticsCookies && !marketingCookies) {
        setAnalyticsCookies(true);
        setMarketingCookies(true);
      }
      // Save the preferences
      handleSavePreferences({ analyticsCookies, marketingCookies });
    }
  };

  return (
    <>
      {showPreferencesPopup && (
        <CookiePreferencesPopup onSave={handleSavePreferences} />
      )}
      <CookieConsent
        location="bottom"
        buttonText="Ich stimme zu"
        style={{
          background: '#2B373B',
        }}
        buttonStyle={{
          color: '#4e503b',
          fontSize: '13px',
          background: 'white',
          borderRadius: '4px',
          padding: '4px 8px',
        }}
        expires={150}
        onAccept={handleAccept}
      >
        Diese Website verwendet Cookies, um Ihnen das beste Nutzererlebnis zu
        bieten. Cookies sind wie E-Scooter für das Internet - sie machen die
        Reise schneller und einfacher!{' '}
        <span
          className="underline cursor-pointer text-white"
          onClick={() => setShowPreferencesPopup(true)}
        >
          Cookie-Einstellungen
        </span>
      </CookieConsent>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
