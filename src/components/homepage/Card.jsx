import React from 'react'
import Image from 'next/image'
import { CheckIcon } from '@heroicons/react/20/solid'

const Card = ({
  card,
  expandedCard,
  showContent,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  return (
    <div
      key={card.id}
      className={`relative h-[530px] overflow-hidden rounded-3xl font-encode transition-all duration-700 ease-in-out md:h-[220px]  lg:h-[392px] ${
        expandedCard === card.id
          ? 'transition-height ease-in-out md:h-[27rem] lg:h-[49rem]'
          : ''
      }${props.className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={card.image}
        fill
        className={`z-0 h-full w-full object-cover object-center ${
          expandedCard === card.id
            ? 'md:brightness-65 sm:brightness-50'
            : 'sm:brightness-50 md:brightness-75'
        }`}
        alt={card.title}
        loading="eager"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 100vw"
      />
      <div
        className={`justify-left  absolute bottom-0 z-10 flex w-full items-center ${
          expandedCard === card.id ? 'center top-0' : 'left'
        }`}
      >
        <div className="relative z-20 p-5 md:p-3 lg:p-5">
          <div
            className={`${
              expandedCard === card.id || showContent === card.id
                ? 'md:text-center lg:pb-10'
                : ''
            }  font-encode text-3xl font-semibold text-white sm:text-center md:text-left md:text-3xl lg:text-6xl`}
          >
            {card.title}
          </div>

          {(showContent || expandedCard === card.id) && (
            <>
              {(card.id === 1 ||
                card.id == 3 ||
                card.id === 4 ||
                card.id === 5) && (
                <div className="text-md mt-20 text-center   text-white md:mb-20 md:mt-10 md:text-sm lg:mt-48 lg:text-2xl">
                  {card.content}
                </div>
              )}
              {(card.id === 0 || card.id == 2) && <div>{card.content}</div>}
              {card.id === 2 && (
                <ul
                  role="list"
                  className="mt-2 px-5 text-sm font-semibold text-slate-100 md:text-xs lg:text-lg"
                >
                  <li className="mt-0 flex gap-x-3 leading-loose md:mt-0 lg:mt-10">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-slate-100"
                      aria-hidden="true"
                    />
                    eine Reifenpanne zu beheben
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-slate-100"
                      aria-hidden="true"
                    />
                    einen Schaden zu beheben
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-slate-100"
                      aria-hidden="true"
                    />
                    Verschleißteile zu erneuern
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-slate-100"
                      aria-hidden="true"
                    />
                    Probleme zu analysieren und eine Lösung zu finden.
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-slate-100"
                      aria-hidden="true"
                    />
                    Original-Ersatzteile zu beschaffen
                  </li>
                  <li className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-slate-100"
                      aria-hidden="true"
                    />
                    eine persönliche Note in Form von Pulverbeschichtungen
                  </li>
                </ul>
              )}
              <div className="mt-4 text-center">
                {(card.id === 3 ||
                  card.id == 0 ||
                  card.id === 4 ||
                  card.id === 5 ||
                  card.id === 1) && (
                  <a
                    href={card.href}
                    className="block rounded-md border-[#4a6d92] bg-[#4a6d92] py-2 px-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3f5872] md:mt-10 md:text-[18px] md:brightness-[1.08] lg:p-4"
                  >
                    {card.buttonText}
                  </a>
                )}
                {card.id === 2 && (
                  <div className="md:pb-4 lg:pb-0">
                    <a
                      href={card.href}
                      className="block rounded-md border-[#4a6d92] bg-[#4a6d92] py-2 px-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3f5872] md:mt-5 md:text-[18px] md:brightness-[1.08] lg:p-4"
                    >
                      {card.buttonText}
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <div
        className={` pointer-events-none absolute bottom-0 z-10  w-full transition-all duration-700 ease-in-out md:h-[70%] lg:h-[100%] ${
          expandedCard === card.id
            ? 'ease-in-out md:h-[21rem] lg:h-[30rem]'
            : ''
        }`}
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0.01) 0%, ${
            expandedCard === card.id ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.0)'
          } 80%, rgba(0,0,0,01) 100%)`,
        }}
      />
    </div>
  )
}

export default Card
