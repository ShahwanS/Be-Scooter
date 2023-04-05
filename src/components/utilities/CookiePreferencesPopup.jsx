// CookiePreferencesPopup.js
import React, { useState } from 'react'

const CookiePreferencesPopup = ({ onSave }) => {
  const [analyticsCookies, setAnalyticsCookies] = useState(false)
  const [marketingCookies, setMarketingCookies] = useState(false)

  const handleSave = () => {
    onSave({ analyticsCookies, marketingCookies })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="rounded bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl">Cookie-Einstellungen</h2>
        <label className="mb-4 block">
          <input
            type="checkbox"
            className="mr-2"
            checked={analyticsCookies}
            onChange={() => setAnalyticsCookies(!analyticsCookies)}
          />
          Analytische Cookies
        </label>
        <label className="mb-4 block">
          <input
            type="checkbox"
            className="mr-2"
            checked={marketingCookies}
            onChange={() => setMarketingCookies(!marketingCookies)}
          />
          Marketing-Cookies
        </label>
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white"
          onClick={handleSave}
        >
          Speichern
        </button>
      </div>
    </div>
  )
}

export default CookiePreferencesPopup
