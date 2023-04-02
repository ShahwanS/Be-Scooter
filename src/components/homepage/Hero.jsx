import React, { useState, useEffect } from 'react'
import Card from './Card'

const data = [
  {
    id: 0,
    title: 'VERKAUF',
    alt: 'Scooter Kaufen',
    image: '/images/pics/verkauf.jpeg',
    content: (
      <p className="text-md mt-10 text-center font-encode text-white md:mt-4 md:mb-5 md:p-[3px] md:text-sm lg:mb-24 lg:mt-20 lg:p-3 lg:text-2xl">
        Komme doch einfach bei uns im &quot;SToRE!&quot; in Heuchelheim vorbei
        und lasse dich von uns persönlich beraten. Wir helfen dir gerne dabei,
        den perfekten E-Scooter für deine Bedürfnisse zu finden und bieten dir
        sogar eine kostenlose Probefahrt an. Wenn du bereits weißt, welchen
        E-Scooter du haben möchtest, kannst du auch direkt in unserem
        &quot;SToRE ONLINE!&quot; bestellen. Wir freuen uns darauf, dich
        kennenzulernen und dir dabei zu helfen, mobil und umweltbewusst
        unterwegs zu sein.
      </p>
    ),
    buttonText: 'E-Scooter Kaufen',
    href: 'https://store.be-scooter.de/',
  },
  {
    id: 1,
    title: 'VERLEIH',
    image: '/images/pics/verleih.jpeg',
    alt: 'Scooter Verleih',
    content: (
      <p className="py-[70px] md:py-[40px] lg:py-[70px]">
        E-SCooTER muss mit! Ob für einen Tag, ein Wochenende oder den Urlaub an
        der See sowie dem Campingplatz - erfahre mit einem unserer
        Leih-E-Scooter, zahlreiche Vorteile, spare bares Geld und habe Spaß.
      </p>
    ),
    buttonText: 'Jetzt Leihen',
    href: '/E-scooter-leihen',
  },
  {
    id: 2,
    title: <h2 className="p-3 text-center  md:p-0">REPARATUR</h2>,
    image: '/images/pics/reparatur.jpg',
    content: (
      <p className=" text-center font-encode text-white md:mb-0 md:py-4 md:text-sm lg:mt-20 lg:p-8 lg:text-xl">
        Unser Ziel ist es, dass ihr stets sicher und sorgenfrei unterwegs seid.
        Wir kümmern uns um euren E-Scooter und bieten euch einen umfassenden
        Service, damit ihr euch auf das Fahren konzentrieren könnt. Dazu gehört:
      </p>
    ),

    buttonText: 'Reparaturtermin Online Buchen',
    href: '#',
  },
  {
    id: 3,
    title: 'TOUREN',
    image: '/images/pics/tours.jpeg',
    alt: 'Scooter Tours',
    content: (
      <p className="py-7 md:py-3 lg:py-3">
        Entdecke unser vielseitiges Tourenangebot und erlebe puren Fahrspaß mit
        Familie, Freunden oder Kollegen. Ob bei einem Betriebsausflug, einer
        Tour mit den Teamkollegen/innen aus dem Verein oder einem ganz privaten
        Picknick mit Eurem Lieblingsmenschen, regional wie überregional werden
        Euch unsere Touren nachhaltig begeistern.
      </p>
    ),
    buttonText: 'Tour Buchen',
    href: 'https://store.be-scooter.de/collections/touren-1',
  },

  {
    id: 4,
    title: 'BUSINESS MOBILITÄT',
    image: '/images/pics/business_auto_x2.jpg',
    alt: 'Scooter Business-mobilität',
    content: (
      <p className="py-10 md:py-7 lg:py-7">
        Unser Angebot für Unternehmen: Starten Sie gemeinsam mit Ihren
        Mitarbeitern und Kunden in das neue Zeitalter der Elektromobilität. Ihre
        eigene Firmenflotte oder Dienst-E-Scooter für Ihre Mitarbeiter - setzen
        Sie ein Zeichen und profitieren von zahlreichen Vorteilen.
      </p>
    ),
    buttonText: 'Info-Gespräch Veinbaren',
    href: '#',
  },
  {
    id: 5,
    title: 'EVENTS',
    image: '/images/pics/events.jpeg',
    alt: 'Scooter Events',
    content: (
      <p className="py-3 md:py-0 lg:py-3">
        Entdecke die Stadt auf eine neue Art und Weise mit unseren
        eScooter-events! Wir bieten eine umweltfreundliche und schnelle
        Möglichkeit, um zu verschiedenen Orten zu gelangen und die Umgebung zu
        erkunden. Unsere erfahrenen Guides stehen Dir zur Seite, um
        sicherzustellen, dass Dein Event reibungslos verläuft und Du eine
        unvergessliche Erfahrung machst.
      </p>
    ),
    buttonText: 'Events Entdecken',
    href: '/Events',
  },
]

// Helper function to check if the display is mobile or not
const isMobileDisplay = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 850
}

// Debounce function
const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

export function Hero() {
  const [expandedCard, setExpandedCard] = useState(null)
  const [cardClasses, setCardClasses] = useState(Array(6).fill(''))
  const [mobileExpandedCard, setMobileExpandedCard] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleMobileClick = (cardId) => {
    if (!isMobile) return

    if (mobileExpandedCard === cardId) {
      setMobileExpandedCard(null)
    } else {
      setMobileExpandedCard(cardId)
    }
  }
  // Set initial isMobile state and handle window resize on the client-side
  useEffect(() => {
    const isMobile = isMobileDisplay()
    setIsMobile(isMobile)
    setShowContent(isMobile)

    const handleResize = debounce(() => {
      const isMobile = isMobileDisplay()
      setIsMobile(isMobile)
      setShowContent(isMobile)
    }, 100)

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMouseEnter = (cardId) => {
    if (isMobile) return

    setExpandedCard(cardId)

    setCardClasses((prevState) => {
      const updatedCardClasses = [...prevState]
      if (cardId === 3) {
        updatedCardClasses[0] = ' move-up'
        updatedCardClasses[3] = ' move-down'
      } else if (cardId === 4) {
        updatedCardClasses[1] = ' move-up'
        updatedCardClasses[4] = ' move-down'
      } else if (cardId === 5) {
        updatedCardClasses[2] = ' move-up'
        updatedCardClasses[5] = ' move-down'
      }
      return updatedCardClasses
    })
  }

  const handleMouseLeave = () => {
    if (isMobile) return

    setExpandedCard(null)
    setCardClasses(Array(6).fill(''))
  }

  return (
    <div className={`mx-auto bg-[#7e92a575] p-4 md:h-[480px] lg:h-[840px] `}>
      <div className="grid-col grid gap-8 md:grid md:grid-cols-3 md:grid-rows-[220px] lg:grid-rows-[392px]">
        <div className="grid grid-cols-1 gap-4">
          {[0, 3].map((i) => (
            <Card
              key={data[i].id}
              card={data[i]}
              expandedCard={expandedCard === data[i].id ? expandedCard : ''}
              showContent={showContent}
              onMouseEnter={() => handleMouseEnter(data[i].id)}
              onMouseLeave={handleMouseLeave}
              className={cardClasses[i]}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[1, 4].map((i) => (
            <Card
              key={data[i].id}
              card={data[i]}
              expandedCard={expandedCard === data[i].id ? expandedCard : ''}
              showContent={showContent}
              onMouseEnter={() => handleMouseEnter(data[i].id)}
              onMouseLeave={handleMouseLeave}
              className={cardClasses[i]}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {[2, 5].map((i) => (
            <Card
              key={data[i].id}
              card={data[i]}
              expandedCard={expandedCard === data[i].id ? expandedCard : ''}
              showContent={showContent}
              onMouseEnter={() => handleMouseEnter(data[i].id)}
              onMouseLeave={handleMouseLeave}
              className={cardClasses[i]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
