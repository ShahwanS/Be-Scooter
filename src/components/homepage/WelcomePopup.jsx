import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import Image from 'next/image'

export function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    if (!sessionStorage.getItem('visited')) {
      setShowPopup(true)
      sessionStorage.setItem('visited', 'true')
    }

    const timer = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const nextProgress = prevProgress + 1
        if (nextProgress >= 100) {
          clearInterval(timer)
          setShowPopup(false)
          return 100
        }
        return nextProgress
      })
    }, 10) // 10ms intervals for smooth progress bar animation
    return () => clearInterval(timer)
  }, [loadingProgress])

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <CSSTransition
      in={showPopup}
      timeout={1000}
      classNames="popup"
      unmountOnExit
    >
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity  ">
        <div className="relative rounded-lg bg-gradient-to-b from-blue-400 to-green-500 p-6 text-center ">
          <Image
            className="object-fit h-[250px] w-full rounded-3xl"
            src="/images/pics/beScooter.png"
            width={700}
            height={700}
            alt="Video Thumbnail"
            loading="eager"
            priority
          />
          <h1 className="mb-3 text-2xl font-bold">
            Willkommen auf der neuen Seite von BE-SCooTER®!
          </h1>
          <div className="h-2 w-full rounded bg-gray-200">
            <div
              className="h-2 rounded bg-blue-600"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}
