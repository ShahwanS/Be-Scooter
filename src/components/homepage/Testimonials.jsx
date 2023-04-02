import AnimationOnScroll from '../animationOnScroll/animationOnScroll'
import { Container } from '@/components/utilities/Container'
import Image from 'next/image'

const testimonials = [
  [
    {
      content:
        'Wer einen E- Scooter kaufen möchte, ist hier an der Richtigen Adresse. Das Team ist echt super!!! Was mich sehr freut, ist die Kompetenz und die Freundlichkeit. Wir haben schon den 3.  Scooter gekauft und es ist schon so, als würde man sich schon Jahre kennen. Björn, hilft wo er nur kann.',
      author: {
        name: 'Markus R',
        role: 'vor 1 Monat',
      },
    },
  ],
  [
    {
      content:
        'Super freundlicher, kompetenter und schneller Service. Auch von Fremdmarken.Super freundlicher, kompetenter und schneller Service. Auch von Fremdmarken.',
      author: {
        name: 'Buchmann',
        role: 'vor 3 Wochen',
      },
    },
  ],
  [
    {
      content:
        'Super freundliche und kompetente Beratung. Der inhaber hat sich alle Zeit der Welt genommen um einen bestens zu beraten, Bin Mega zufrieden und werde ganz sicher viel viel spaß mit meinem E-Scooter haben. Thx...',
      author: {
        name: 'Dirk E',
        role: 'Vor 9 Wochen',
      },
    },
  ],
  [
    {
      content:
        'Professionelle Beratung und tolle Produkte. Bin sehr zufrieden mit meinem Roller. Macht richtig spaß!',
      author: {
        name: 'Notar Roland H.',
        role: 'vor 16 Wochen',
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className=" overflow-hidden bg-gradient-to-b from-blue-400 to-green-500 py-10 font-encode md:py-20"
    >
      <Container>
        <AnimationOnScroll
          classNameInView={'opacity-100 translate-y-0 transition duration-[1s]'}
          classNameNotInView={'opacity-0 translate-y-10'}
        >
          <div className="mx-auto flex max-w-2xl flex-col md:text-center">
            <Image
              src={'/images/pics/testimonials.jpg'}
              height={1000}
              width={1000}
              alt="Erget Products"
              className="h-auto w-auto rounded-xl shadow-xl"
            />
            <p className=" py-10 text-center text-2xl font-semibold leading-5 tracking-tight text-gray-900 md:text-3xl">
              Das sagen unsere Kunden :
            </p>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          classNameInView={
            'md:opacity-100 md:translate-x-0 transition duration-[1s]'
          }
          classNameNotInView={'md:opacity-0 md:translate-x-10'}
        >
          <ul
            role="list"
            className="mx-auto mt-5 gap-6 md:grid md:grid-cols-2 lg:max-w-none "
          >
            {testimonials.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul
                  role="list"
                  className="relative mb-10 transform rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 transition-all duration-300 hover:scale-105 md:mb-0"
                >
                  {column.map((testimonial, testimonialIndex) => (
                    <li key={testimonialIndex}>
                      <figure className="relative mb-10 rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 md:mb-0 ">
                        <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                        <blockquote className="relative md:h-32">
                          <p className="h-full tracking-tight text-slate-900 md:flex md:items-center md:justify-center md:text-lg">
                            {testimonial.content}
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-8">
                          <div>
                            <div className=" text-base text-slate-900">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">
                              {testimonial.author.role}
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </AnimationOnScroll>
      </Container>
    </section>
  )
}
