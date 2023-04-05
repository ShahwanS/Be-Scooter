import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { Transition } from '@headlessui/react'
const images = [
  {
    id: 1,
    title: 'NINEBOT MAX G30D + G30D II',
    src: '/images/leihen/ninebotMax.png',

    list: [
      '• MAXIMALE GESCHWINDIGKEIT BIS ZU 22 KM/H',
      '• REICHWEITE BIS ZU CA. 65 KM DANK LANGLEIBIGEM AKKU',
      '• GEWICHT : 19,9 KG',
      '• MOTORLEISTUNG: 350W',
      '• EINGEBAUTER ADAPTER FÜR SCHNELLES UND EINFACHS AUFLADEN',
      '• 10-ZOLL SCHLAUCHLOSE LUFTREIFEN',
      '',
    ],
  },
  {
    id: 2,
    title: (
      <div>
        SCOTEX H10 <br /> POWERED BY SXT
      </div>
    ),
    src: '/images/leihen/ScotextH10SXT.jpg',
    list: [
      '• MAXIMALE GESCHWINDIGKEIT BIS ZU 20 KM/H',
      '• REICHWEITE BIS ZU CA. 30KM',
      '• GEWICHT : 14,8 KG',
      '• MOTORLEISTUNG : BIS ZU 540W',
      '• HOCHKONTRAST LCD DISPLAY ',
      '• 8,5" ZOLL LUFTREIFEN',
      '• WARTUNGSFREIER TROMMELBREMSE VORNE + ELKTR. BREMSE AN ANTRIEBSACHSE HINTEN',
    ],
  },
  {
    id: 3,
    title: 'YEDOO S1616',
    src: '/images/leihen/yedoo1616.jpg',
    list: [
      '• TRAGFÄHIGKEIT : 150 KG',
      '• GEWICHT 8,4 KG',
      '• 16" / 16" ZOLL LUFTREIFEN',
    ],
  },
  {
    id: 4,
    title: 'YEDOO S2016',
    src: '/images/leihen/yedoo2016.jpg',
    list: [
      '• TRAGFÄHIGKEIT : 150 KG',
      '• GEWICHT 9 KG',
      '• 20" / 16" ZOLL LUFTREIFEN',
    ],
  },
  {
    id: 5,
    title: 'YEDOO S2020',
    src: '/images/leihen/yedoo2020.jpg',
    list: [
      '• TRAGFÄHIGKEIT : 150 KG',
      '• GEWICHT 9,3 KG',
      '• 20" / 20" ZOLL LUFTREIFEN',
    ],
  },
  {
    id: 6,
    title: 'YEDOO S2620',
    src: '/images/leihen/yedoo2620.jpg',
    list: [
      '• TRAGFÄHIGKEIT : 150 KG',
      '• GEWICHT 9,2 KG',
      '• 26" / 20" ZOLL LUFTREIFEN',
    ],
  },
]

export function PrimaryFeatures() {
  const [selectedImage, setSelectedImage] = useState(images[0])

  const [isPaused, setIsPaused] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsPaused(true)
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
    setIsPaused(true)
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    setIsPaused(true)
  }

  useEffect(() => {
    setSelectedImage(images[currentIndex])
  }, [currentIndex])
  useEffect(() => {
    if (window.innerWidth > 768) {
      // add this condition to render only on desktop
      const interval = setInterval(() => {
        if (!isPaused) {
          setCurrentIndex((currentIndex + 1) % images.length)
        }
      }, 5000) // change interval time here (in milliseconds)
      return () => clearInterval(interval)
    }
  }, [currentIndex, isPaused])

  return (
    <>
      <div className="  relative mt-0 flex  h-[120px] w-full items-center justify-center  bg-gradient-to-b from-blue-400 to-green-500 brightness-[0.9] md:h-[170px] lg:h-[225px]">
        <Image
          className="w-[290px] md:w-[410px]"
          src={'/images/leihen/verleihlogo.png'}
          alt="verleihlogo"
          height={500}
          width={500}
        />
      </div>
      {/* side pictures */}
      <div className="flex overflow-x-hidden bg-[#6b7f9175] md:h-[632px] lg:h-[900px]">
        <div className="hidden w-[600px] overflow-x-hidden p-4 md:block md:overflow-y-scroll md:scrollbar-hide lg:overflow-y-hidden">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative  cursor-pointer overflow-auto rounded p-3 transition duration-500 ease-in-out  hover:scale-105 "
              onClick={() => handleImageClick(image)}
            >
              <div className="relative mt-0 flex h-[118px] w-full items-center justify-center rounded-[100px] bg-gradient-to-b from-blue-400 to-green-500 brightness-[0.9]">
                <Image
                  className="h-[110px] w-[580px] rounded-[100px] object-cover brightness-[0.6]"
                  src={image.src}
                  alt={image.title}
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white">
                {image.title}
              </h3>
              {image.id == 1 && (
                <h3 className="absolute inset-0 top-14 flex items-center justify-center text-xl font-semibold text-white">
                  POWERED BY SEGWAY
                </h3>
              )}
            </div>
          ))}
        </div>
        {/* main pictures   */}
        <div className="w-full p-4 md:w-2/3 ">
          <Transition
            key={selectedImage.id}
            show={true}
            appear={true}
            enter="transition-all ease-in-out duration-[1s] transform translate-x-[50%]"
            enterFrom="translate-x-[50%] "
            enterTo="translate-x-0 "
          >
            {selectedImage &&
              (selectedImage.id === 1 || selectedImage.id === 2) && (
                <div className="hidden md:relative md:block">
                  <div className="relative h-[500px] w-full rounded-[100px] md:h-[590px] lg:h-[845px]">
                    <Image
                      className="rounded-[100px] brightness-50"
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      loading="lazy"
                      fill
                    />
                  </div>
                  <h2 className="absolute top-16 mb-4  font-bold text-white md:left-[22%] md:text-3xl lg:text-5xl">
                    {selectedImage.title}
                  </h2>
                  {selectedImage.list && (
                    <ul className="absolute top-[30%] left-[15%] mt-4 space-y-2 font-semibold text-white md:text-xl lg:text-3xl">
                      {selectedImage.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

            {selectedImage &&
              (selectedImage.id === 3 ||
                selectedImage.id === 4 ||
                selectedImage.id === 5 ||
                selectedImage.id === 6) && (
                <div className="relative hidden md:block">
                  <div className="relative h-[500px] w-full md:h-[590px] lg:h-[845px]">
                    <Image
                      className="rounded-[100px]  brightness-50"
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      fill
                      priority
                    />
                  </div>
                  <h2 className="absolute top-20 left-[35%] mb-4 font-bold text-white md:text-3xl lg:text-5xl">
                    {selectedImage.title}
                  </h2>
                  {selectedImage.list && (
                    <ul className="absolute top-[40%] left-[30%] mt-4 space-y-2 font-semibold  text-white md:text-2xl lg:text-3xl">
                      {selectedImage.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

            <div className="flex flex-col items-center space-y-4 transition-all duration-500 ease-in-out md:hidden">
              {images.map((image) => (
                <div key={image.id} className="relative w-full">
                  <Image
                    className="h-[500px] w-full rounded-[100px] object-cover brightness-50"
                    src={image.src}
                    alt={image.title}
                    width={1000}
                    height={1000}
                    loading="lazy"
                  />

                  {image.id === 1 || image.id === 2 ? (
                    <>
                      {image.id === 1 && (
                        <h2 className="absolute top-6 left-[25%] mb-4  text-center text-2xl font-bold text-white">
                          NINEBOT MAX <br /> G30D + G30D II
                        </h2>
                      )}
                      {image.id === 2 && (
                        <h2 className="absolute top-6 left-[20%] mb-4  text-center text-2xl font-bold text-white">
                          {image.title}
                        </h2>
                      )}
                      {image.list && (
                        <ul className="text-md absolute top-[25%] left-[8%] mt-4 space-y-2 font-semibold text-white">
                          {image.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <>
                      <h2 className="absolute top-20 left-[25%] mb-4 text-2xl font-bold text-white">
                        {image.title}
                      </h2>
                      {image.list && (
                        <ul className="absolute top-[40%] left-[16%] mt-4 space-y-2 text-lg font-semibold text-white md:left-[20%]">
                          {image.list.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
