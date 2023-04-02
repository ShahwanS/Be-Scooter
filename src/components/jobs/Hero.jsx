import Image from 'next/image'



export function Hero() {
  return (
    <section className="relative md:h-full h-screen pt-20 pb-16 flex flex-col items-center justify-center py-0 px-3 text-center text-white font-encode">

      <div className=" video-docker absolute top-0 left-0 h-full w-full overflow-hidden">
        <Image
          className="lg:w-2/6 mb-10 w-full rounded object-cover object-center opacity-50 md:h-full md:w-full"
          alt="Scooter arbeit"
          src={"/images/jobs/jobs.jpg"}
          fill
          priority
        />
      </div>
      <div className="video-content space-y-16 md:w-[900px] md:mt-20 ">
        <h1 className="text-6xl font-light break-word">
        Karrieren
        </h1>
        <h3 className="text-2xl font-thin">
        Komm zu uns, um hart zu arbeiten und einen Unterschied zu machen! Werde Teil eines aufregenden Teams in einem schnell wachsenden Bereich der Mobilität.
        </h3>
        
      </div>
      
    </section>
    
  )
}
