import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
 
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export function Hero() {
  const images = [
    { src: '/images/ueber uns/team (1).jpg', lgheight: '450px', },
    { src: '/images/ueber uns/team (4).jpg', lgheight: '680px', },
    { src: '/images/ueber uns/team (5).jpg', lgheight: '450px', },
    { src: '/images/ueber uns/team (6).jpg', lgheight: '680px', },
    { src: '/images/ueber uns/team (7).jpg', lgheight: '735px', },
  ];

  return (
    <>
      <section className="section h-full bg-[#7e92a575] pt-4 font-encode">
        <h2 className="mx-auto mt-2  flex max-w-5xl items-center justify-center break-words text-center md:text-4xl text-3xl font-bold tracking-widest text-[#333333] mb-10">
          WER BRAUCHT SCHON DAS A-TEAM, WENN ER DAS &quot;BE&quot;
          SCOOTER-TEAM HAT !
        </h2>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="swiper-container lg:h-[600px]  font-poppins h-[400px] md:h-[500px]"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative lg:h-${image.height} lg:h-[550px] md:h-[450px] h-[350px] w-full'>
              <Image
                className={` object-scale-down`}
                src={image.src}
                alt={`image slide ${index + 1}`}
                fill
              />
              </div>
            </SwiperSlide>
            
          ))}
        </Swiper>
      </section>
    </>
  );
}
