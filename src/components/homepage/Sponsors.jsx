import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core'
SwiperCore.use([Autoplay, Pagination, Navigation])
import AnimationOnScroll from '../animationOnScroll/animationOnScroll'
import Image from 'next/image'

const sponsorLogos = [
  {
    src: '/images/avatars/logo(1).png',
    alt: 'ERGET',
    marginTop: 'mt-3',
    marginTopMd: 'md:mt-5',
    link: 'https://store.be-scooter.de/collections/egret',
  },
  {
    src: '/images/avatars/logo(2).png',
    alt: 'SXT Scooters',
    link: 'https://store.be-scooter.de/collections/sxt-scooters',
  },
  {
    src: '/images/avatars/logo(3).png',
    marginTop: 'mt-8',
    alt: 'Segway ninebot',
    link: 'https://store.be-scooter.de/collections/ninebot-powered-by-segway',
  },
  {
    src: '/images/avatars/logo(4).png',
    alt: 'StreetBooster',
    marginTop: 'mt-7',
    link: 'https://store.be-scooter.de/collections/streetbooster',
  },
  {
    src: '/images/avatars/logo(5).png',
    alt: 'Trittbrett',
    logoHeight: 'h-20',
    link: 'https://store.be-scooter.de/collections/trittbrett',
  },
  {
    src: '/images/avatars/logo(6).png',
    alt: 'YEDOO Scooters',
    logoHeight: 'h-20',
    marginTop: 'mt-1',
    link: 'https://store.be-scooter.de/collections/yedoo-scooters-bikes/yedoo',
  },
  {
    src: '/images/avatars/logo(7).png',
    alt: 'Rolektro',
    logoHeight: 'h-20',
    link: 'https://store.be-scooter.de/collections/rolektro',
  },
  {
    src: '/images/avatars/logo(8).png',
    alt: 'Soke',
    logoHeight: 'h-20',
    marginTop: 'mt-3',
    link: 'https://store.be-scooter.de/collections/soke/soke',
  },
  {
    src: '/images/avatars/logo(9).png',
    alt: 'Lumos',
    logoHeight: 'h-20',
    marginTop: 'mt-4',
    link: 'https://store.be-scooter.de/collections/lumos',
  },
  {
    src: '/images/avatars/logo(10).png',
    alt: 'Antidot',
    logoHeight: 'h-20',
    marginTop: 'mt-4',
    link: 'https://store.be-scooter.de/collections/e-scooter-zubehor/antidot',
  },
  {
    src: '/images/avatars/logo(11).png',
    alt: 'Crussis',
    logoHeight: 'h-20',
    marginTop: 'mt-5',
    link: 'https://store.be-scooter.de/collections/crussis-scooterbikes',
  },
  {
    src: '/images/avatars/logo(12).png',
    alt: 'EzyRollers',
    logoHeight: 'h-20',
    marginTop: 'mt-4',
    link: 'https://store.be-scooter.de/collections/fun-fahrzeuge/ezy-roller',
  },
  {
    src: '/images/avatars/logo(13).png',
    alt: 'Alibott',
    logoHeight: 'h-20',
    marginTop: 'mt-2',
    link: 'https://store.be-scooter.de/collections/e-scooter-zubehor/luft',
  },
  {
    src: '/images/avatars/logo(14).png',
    alt: 'UVEX',
    logoHeight: 'h-20',
    marginTop: 'mt-2',
    link: 'https://store.be-scooter.de/collections/e-scooter-zubehor/uvex',
  },
  {
    src: '/images/avatars/logo(15).png',
    alt: 'Klickfix rixen kaul',
    logoHeight: 'h-20',
    marginTop: 'mt-2',
    link: 'https://store.be-scooter.de/collections/klickfix%C2%AE',
  },
  {
    src: '/images/avatars/logo(16).png',
    alt: 'Scotex Sport',
    logoHeight: 'h-20',
    link: 'https://store.be-scooter.de/products/scotex-h10-ekfv-e-scooter',
  },
  {
    src: '/images/avatars/logo(17).png',
    alt: 'Sullivan',
    logoHeight: 'h-20',
    marginTop: 'mt-4',
    link: 'https://store.be-scooter.de/products/sullivan-scooter-mehrfarbig-18-inches',
  },
  {
    src: '/images/avatars/logo(18).jpeg',
    alt: 'VMAX',
    logoHeight: 'h-10',
    marginTop: 'mt-4',
    link: 'https://store.be-scooter.de/collections/vmax/e-scooter',
  },
  {
    src: '/images/avatars/logo(19).png',
    alt: 'ePowerFun.de',
    logoHeight: 'h-20',
    marginTop: 'mt-4',
    link: 'https://store.be-scooter.de/products/epf-2-von-epowerfun',
  },
]

export function Sponsors() {
  return (
    <section className="section bg-[#7e92a575]">
      <AnimationOnScroll
        classNameInView={'opacity-100 translate-y-0 transition duration-1000'}
        classNameNotInView={'opacity-0 translate-y-10'}
      >
        <div className="row">
          <Image
            className="mx-auto pt-5"
            src={'/images/avatars/BePartners.png'}
            alt={'bePartners'}
            width={400}
            height={1}
          ></Image>

          <br />
          <div className="animate from-right col-12">
            <Swiper
              loop={true}
              slidesPerView={3}
              breakpoints={{
                866: {
                  slidesPerView: 5,
                },
              }}
              spaceBetween={40}
              modules={[Autoplay]}
              autoplay={{ delay: 1700, disableOnInteraction: false }}
            >
              {sponsorLogos.map((logo, index) => (
                <SwiperSlide
                  key={index}
                  className={`lg:px-10 
                ${logo.marginTop || ''} 
                ${logo.marginTopMd || ''}
                ${logo.logoHeight || ''} cursor-pointer`}
                >
                  <div className="relative h-[50px] md:h-[90px]">
                    <a href={logo.link}>
                      <Image
                        className="object-contain"
                        src={logo.src}
                        alt={logo.alt}
                        width={200}
                        height={200}
                      />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  )
}
