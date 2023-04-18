import { NavLink } from '@/components/utilities/NavLink'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import Image from 'next/image'
import { Link } from 'react-scroll'

export function Hero() {
  const [expandedSectionIndex, setExpandedSectionIndex] = useState(null)

  const toggleExpand = (index) => {
    if (expandedSectionIndex === index) {
      setExpandedSectionIndex(null)
    } else {
      setExpandedSectionIndex(index)
    }
  }

  return (
    <div className="items-center justify-center bg-[#7e92a575] pt-5 md:flex  md:flex-col">
      <div id="impressum" key={0} className="rounded-md pt-10 md:container">
        <button
          onClick={() => toggleExpand(0)}
          className="flex w-full items-center justify-between px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            IMPRESSUM
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 0 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 0 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 0 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-[40vw] w-full object-cover md:h-[380px]">
                <Image
                  src={'/images/info/Impressum.jpg'}
                  alt="Impressum"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="flex-col justify-center md:flex">
                <p className="overflow-auto text-sm leading-5 sm:text-base">
                  <br />
                  Björn Seibert<br></br>
                  BE-SCooTER® ...FUNsport erFAHREN!<br></br>
                  Rodheimer Str. 126<br></br>
                  35452 Heuchelheim<br></br>
                  Deutschland<br></br>
                  <br></br>
                  Tel.: 0641 / 93923404<br></br>
                  Fax: 0641 / 93923402<br></br>
                  E-Mail: info@be-scooter.de<br></br>
                  <br></br>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                  Umsatzsteuergesetz: DE815814992<br></br>
                  <br></br>
                  Plattform der EU-Kommission zur Online-Streitbeilegung:
                  https://ec.europa.eu/odr<br></br>
                  <br></br>
                  Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor
                  einer Verbraucherschlichtungsstelle weder verpflichtet noch
                  bereit.<br></br>
                  <br></br>
                  Verantwortliche/r i.S.d. § 18 Abs. 2 MStV:<br></br>
                  Björn Seibert, Rodheimer Str. 126, 35452 Heuchelheim<br></br>
                  <br></br>
                  <br></br>
                  Mitglied der Initiative &quot;Fairness im Handel&quot;.
                  <br></br>
                  Nähere Informationen: https://www.fairness-im-handel.de{' '}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div id="Datenschutz" key={1} className="rounded-md md:container  ">
        <button
          onClick={() => toggleExpand(1)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            DATENSCHUTZ
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 1 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 1 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 1 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-[40vw] w-full object-cover md:h-[380px]">
                <Image
                  src={'/images/info/Datenschutz.jpg'}
                  alt="Datenschutz"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="flex flex-col justify-center overflow-auto">
                <p className="text-wrap">
                  <h1>Datenschutzerkl&auml;rung</h1>

                  <h2>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>

                  <p>
                    <b>1.1</b>&nbsp;Wir freuen uns, dass Sie unsere Website
                    besuchen und bedanken uns f&uuml;r Ihr Interesse. Im
                    Folgenden informieren wir Sie &uuml;ber den Umgang mit Ihren
                    personenbezogenen Daten bei der Nutzung unserer Website.
                    Personenbezogene Daten sind hierbei alle Daten, mit denen
                    Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
                  </p>

                  <p>
                    <b>1.2</b>&nbsp;Verantwortlicher f&uuml;r die
                    Datenverarbeitung auf dieser Website im Sinne der
                    Datenschutz-Grundverordnung (DSGVO) ist Bj&ouml;rn Seibert,
                    BE-SCooTER&reg; ...FUNsport erFAHREN!, Rodheimer Str. 126,
                    35452 Heuchelheim, Deutschland, Tel.: 0641 / 93923404, Fax:
                    0641 / 93923402, E-Mail: info@be-scooter.de. Der f&uuml;r
                    die Verarbeitung von personenbezogenen Daten Verantwortliche
                    ist diejenige nat&uuml;rliche oder juristische Person, die
                    allein oder gemeinsam mit anderen &uuml;ber die Zwecke und
                    Mittel der Verarbeitung von personenbezogenen Daten
                    entscheidet.
                  </p>

                  <p>
                    <b>1.3</b>&nbsp;Diese Website nutzt aus
                    Sicherheitsgr&uuml;nden und zum Schutz der &Uuml;bertragung
                    personenbezogener Daten und anderer vertraulicher Inhalte
                    (z.B. Bestellungen oder Anfragen an den Verantwortlichen)
                    eine SSL-bzw. TLS-Verschl&uuml;sselung. Sie k&ouml;nnen eine
                    verschl&uuml;sselte Verbindung an der Zeichenfolge
                    &bdquo;https://&#8220; und dem Schloss-Symbol in Ihrer
                    Browserzeile erkennen.
                  </p>

                  <h2>2) Datenerfassung beim Besuch unserer Website</h2>

                  <p>
                    Bei der blo&szlig; informatorischen Nutzung unserer Website,
                    also wenn Sie sich nicht registrieren oder uns anderweitig
                    Informationen &uuml;bermitteln, erheben wir nur solche
                    Daten, die Ihr Browser an den Seitenserver &uuml;bermittelt
                    (sog. &bdquo;Server-Logfiles&#8220;). Wenn Sie unsere
                    Website aufrufen, erheben wir die folgenden Daten, die
                    f&uuml;r uns technisch erforderlich sind, um Ihnen die
                    Website anzuzeigen:
                  </p>

                  <ul>
                    <li>Unsere besuchte Website</li>
                    <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
                    <li>Menge der gesendeten Daten in Byte</li>
                    <li>
                      Quelle/Verweis, von welchem Sie auf die Seite gelangten
                    </li>
                    <li>Verwendeter Browser</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>
                      Verwendete IP-Adresse (ggf.: in anonymisierter Form)
                    </li>
                  </ul>

                  <p>
                    Die Verarbeitung erfolgt gem&auml;&szlig; Art. 6 Abs. 1 lit.
                    f DSGVO auf Basis unseres berechtigten Interesses an der
                    Verbesserung der Stabilit&auml;t und Funktionalit&auml;t
                    unserer Website. Eine Weitergabe oder anderweitige
                    Verwendung der Daten findet nicht statt. Wir behalten uns
                    allerdings vor, die Server-Logfiles nachtr&auml;glich zu
                    &uuml;berpr&uuml;fen, sollten konkrete Anhaltspunkte auf
                    eine rechtswidrige Nutzung hinweisen.
                  </p>

                  <h2>3) Hosting &amp; Content-Delivery-Network</h2>

                  <p>Vercel</p>

                  <p>
                    F&uuml;r das Hosting unserer Website und die Darstellung der
                    Seiteninhalte nutzen wir das System des folgenden Anbieters:
                    Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA
                  </p>

                  <p>
                    S&auml;mtliche auf unserer Website erhobenen Daten werden
                    auf den Servern des Anbieters verarbeitet.
                    <br />
                    Wir haben mit dem Anbieter einen
                    Auftragsverarbeitungsvertrag geschlossen, der den Schutz der
                    Daten unserer Seitenbesucher sicherstellt und eine
                    unberechtigte Weitergabe an Dritte untersagt.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft
                    sich der Anbieter auf Standardvertragsklauseln der
                    Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus sicherstellen sollen.
                  </p>

                  <h2>4) Cookies</h2>

                  <p>
                    Um den Besuch unserer Website attraktiv zu gestalten und die
                    Nutzung bestimmter Funktionen zu erm&ouml;glichen, verwenden
                    wir Cookies, also kleine Textdateien, die auf Ihrem
                    Endger&auml;t abgelegt werden. Teilweise werden diese
                    Cookies nach Schlie&szlig;en des Browsers automatisch wieder
                    gel&ouml;scht (sog. &bdquo;Session-Cookies&#8220;),
                    teilweise verbleiben diese Cookies l&auml;nger auf Ihrem
                    Endger&auml;t und erm&ouml;glichen das Speichern von
                    Seiteneinstellungen (sog. &bdquo;persistente
                    Cookies&#8220;). Im letzteren Fall k&ouml;nnen Sie die
                    Speicherdauer der &Uuml;bersicht zu den Cookie-Einstellungen
                    Ihres Webbrowsers entnehmen.
                  </p>

                  <p>
                    Sofern durch einzelne von uns eingesetzte Cookies auch
                    personenbezogene Daten verarbeitet werden, erfolgt die
                    Verarbeitung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO
                    entweder zur Durchf&uuml;hrung des Vertrages,
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO im Falle einer
                    erteilten Einwilligung oder gem&auml;&szlig; Art. 6 Abs. 1
                    lit. f DSGVO zur Wahrung unserer berechtigten Interessen an
                    der bestm&ouml;glichen Funktionalit&auml;t der Website sowie
                    einer kundenfreundlichen und effektiven Ausgestaltung des
                    Seitenbesuchs.
                  </p>

                  <p>
                    Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie
                    &uuml;ber das Setzen von Cookies informiert werden und
                    einzeln &uuml;ber deren Annahme entscheiden oder die Annahme
                    von Cookies f&uuml;r bestimmte F&auml;lle oder generell
                    ausschlie&szlig;en k&ouml;nnen.
                  </p>

                  <p>
                    Bitte beachten Sie, dass bei Nichtannahme von Cookies die
                    Funktionalit&auml;t unserer Website eingeschr&auml;nkt sein
                    kann.
                  </p>

                  <h2>5) Kontaktaufnahme</h2>

                  <p>
                    <b>5.1</b>&nbsp;Calendly
                  </p>

                  <p>
                    F&uuml;r die Bereitstellung einer
                    Online-Terminbuchungsfunktion nutzen wir die Dienste des
                    folgenden Anbieters: Calendly, LLC, BB&amp;T Tower, 271 17th
                    St NW, Atlanta, GA 30363, USA
                  </p>

                  <p>
                    Zum Zwecke der Terminvergabe werden gem&auml;&szlig; Art. 6
                    Abs. 1 lit. b DSGVO Vor- und Zuname sowie Mailadresse (und
                    ggf. die Telefonnummer, sofern ein telefonischer Termin
                    gew&uuml;nscht ist) erhoben und gem&auml;&szlig; Art. 6 Abs.
                    1 lit. f DSGVO auf Basis unseres berechtigten Interesses an
                    einem effektiven Kundenmanagement und einer effizienten
                    Terminverwaltung an den Anbieter &uuml;bermittelt und dort
                    f&uuml;r die Terminorganisation gespeichert.
                  </p>

                  <p>
                    Nach Abhaltung des Termins bzw. nach Ablauf des vereinbarten
                    Terminzeitraums werden Ihre Daten vom Anbieter
                    gel&ouml;scht.
                  </p>

                  <p>
                    Wir haben mit dem Anbieter einen
                    Auftragsverarbeitungsvertrag geschlossen, der den Schutz der
                    Daten unserer Seitenbesucher sicherstellt und eine
                    unberechtigte Weitergabe an Dritte untersagt.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft
                    sich der Anbieter auf Standardvertragsklauseln der
                    Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus sicherstellen sollen.
                  </p>

                  <p>
                    <b>5.2</b>&nbsp;Im Rahmen der Kontaktaufnahme mit uns (z.B.
                    per Kontaktformular oder E-Mail) werden &ndash;
                    ausschlie&szlig;lich zum Zweck der Bearbeitung und
                    Beantwortung Ihres Anliegens und nur im daf&uuml;r
                    erforderlichen Umfang &ndash; personenbezogene Daten
                    verarbeitet.
                  </p>

                  <p>
                    Rechtsgrundlage f&uuml;r die Verarbeitung dieser Daten ist
                    unser berechtigtes Interesse an der Beantwortung Ihres
                    Anliegens gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO. Zielt
                    Ihre Kontaktierung auf einen Vertrag ab, so ist
                    zus&auml;tzliche Rechtsgrundlage f&uuml;r die Verarbeitung
                    Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden gel&ouml;scht,
                    wenn sich aus den Umst&auml;nden entnehmen l&auml;sst, dass
                    der betroffene Sachverhalt abschlie&szlig;end gekl&auml;rt
                    ist und sofern keine gesetzlichen Aufbewahrungspflichten
                    entgegenstehen.
                  </p>

                  <p>
                    <b>5.3</b>&nbsp;WhatsApp-Business
                  </p>

                  <p>
                    Wir bieten Besuchern unserer Webseite die M&ouml;glichkeit,
                    mit uns &uuml;ber den Nachrichtendienst WhatsApp der
                    WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal
                    Harbour, Dublin 2, Irland, in Kontakt zu treten.
                    Hierf&uuml;r verwenden wir die sog.
                    &bdquo;Business-Version&#8220; von WhatsApp.
                  </p>

                  <p>
                    Sofern Sie uns anl&auml;sslich eines konkreten
                    Gesch&auml;fts (beispielsweise einer get&auml;tigten
                    Bestellung) per WhatsApp kontaktieren, speichern und
                    verwenden wir die von Ihnen bei WhatsApp genutzte
                    Mobilfunknummer sowie &ndash; falls bereitgestellt &ndash;
                    Ihren Vor- und Nachnamen gem&auml;&szlig; Art. 6 Abs. 1 lit.
                    b. DSGVO zur Bearbeitung und Beantwortung Ihres Anliegens.
                    Auf Basis derselben Rechtsgrundlage werden wir Sie per
                    WhatsApp gegebenenfalls um die Bereitstellung weiterer Daten
                    (Bestellnummer, Kundennummer, Anschrift oder E-Mailadresse)
                    bitten, um Ihre Anfrage einem bestimmten Vorgang zuordnen zu
                    k&ouml;nnen.
                  </p>

                  <p>
                    Nutzen Sie unseren WhatsApp-Kontakt f&uuml;r allgemeine
                    Anfragen (etwa zum Leistungsspektrum, zu
                    Verf&uuml;gbarkeiten oder zu unserem Internetauftritt)
                    speichern und verwenden wir die von Ihnen bei WhatsApp
                    genutzte Mobilfunknummer sowie &ndash; falls bereitgestellt
                    &ndash; Ihren Vor- und Nachnamen gem&auml;&szlig; Art. 6
                    Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
                    Interesses an der effizienten und zeitnahen Bereitstellung
                    der gew&uuml;nschten Informationen.
                  </p>

                  <p>
                    Ihre Daten werden stets nur zur Beantwortung Ihres Anliegens
                    per WhatsApp verwendet. Eine Weitergabe an Dritte findet
                    nicht statt.
                  </p>

                  <p>
                    Bitte beachten Sie, dass WhatsApp Business Zugriff auf das
                    Adressbuch des von uns hierf&uuml;r verwendeten mobilen
                    Endger&auml;ts erh&auml;lt und im Adressbuch gespeicherte
                    Telefonnummern automatisch an einen Server des
                    Mutterkonzerns Meta Platforms Inc. in den USA
                    &uuml;bertr&auml;gt. F&uuml;r den Betrieb unseres
                    WhatsApp-Business-Kontos verwenden wir ein mobiles
                    Endger&auml;t, in dessen Adressbuch ausschlie&szlig;lich die
                    WhatsApp-Kontaktdaten solcher Nutzer gespeichert werden, die
                    mit uns per WhatsApp auch in Kontakt getreten sind.
                  </p>

                  <p>
                    Hierdurch wird sichergestellt, dass jede Person, deren
                    WhatsApp- Kontaktdaten in unserem Adressbuch gespeichert
                    sind, bereits bei erstmaliger Nutzung der App auf seinem
                    Ger&auml;t durch Akzeptanz der WhatsApp-Nutzungsbedingungen
                    in die &Uuml;bermittlung seiner WhatsApp-Telefonnummer aus
                    den Adressb&uuml;chern seiner Chat-Kontakte gem&auml;&szlig;
                    Art. 6 Abs. 1 lit. a DSGVO eingewilligt hat. Eine
                    &Uuml;bermittlung von Daten solcher Nutzer, die WhatsApp
                    nicht verwenden und/oder uns nicht &uuml;ber WhatsApp
                    kontaktiert haben, wird insofern ausgeschlossen.
                  </p>

                  <p>
                    Zweck und Umfang der Datenerhebung und die weitere
                    Verarbeitung und Nutzung der Daten durch WhatsApp sowie Ihre
                    diesbez&uuml;glichen Rechte und
                    Einstellungsm&ouml;glichkeiten zum Schutz Ihrer
                    Privatsph&auml;re entnehmen Sie bitte den
                    Datenschutzhinweisen von WhatsApp:{' '}
                    <a href="https://www.whatsapp.com/legal/?eea=1#privacy-policy">
                      https://www.whatsapp.com/legal/?eea=1#privacy-policy
                    </a>
                  </p>

                  <h2>
                    6) Datenverarbeitung bei Er&ouml;ffnung eines Kundenkontos
                  </h2>

                  <p>
                    Gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO werden
                    personenbezogene Daten im jeweils erforderlichen Umfang
                    weiterhin erhoben und verarbeitet, wenn Sie uns diese bei
                    der Er&ouml;ffnung eines Kundenkontos mitteilen. Welche
                    Daten f&uuml;r die Kontoer&ouml;ffnung erforderlich sind,
                    entnehmen Sie der Eingabemaske des entsprechenden Formulars
                    auf unserer Website.
                  </p>

                  <p>
                    Eine L&ouml;schung Ihres Kundenkontos ist jederzeit
                    m&ouml;glich und kann durch eine Nachricht an die o.g.
                    Adresse des Verantwortlichen erfolgen. Nach L&ouml;schung
                    Ihres Kundenkontos werden Ihre Daten gel&ouml;scht, sofern
                    alle dar&uuml;ber geschlossenen Vertr&auml;ge
                    vollst&auml;ndig abgewickelt sind, keine gesetzlichen
                    Aufbewahrungsfristen entgegenstehen und unsererseits kein
                    berechtigtes Interesse an der Weiterspeicherung fortbesteht.
                  </p>

                  <h2>7) Nutzung von Kundendaten zur Direktwerbung</h2>

                  <p>
                    <b>7.1</b>&nbsp;Anmeldung zu unserem E-Mail-Newsletter
                  </p>

                  <p>
                    Wenn Sie sich zu unserem E-Mail Newsletter anmelden,
                    &uuml;bersenden wir Ihnen regelm&auml;&szlig;ig
                    Informationen zu unseren Angeboten. Pflichtangabe f&uuml;r
                    die &Uuml;bersendung des Newsletters ist allein Ihre
                    E-Mailadresse. Die Angabe weiterer Daten ist freiwillig und
                    wird verwendet, um Sie pers&ouml;nlich ansprechen zu
                    k&ouml;nnen. F&uuml;r den Newsletter-Versand verwenden wir
                    das sog. Double Opt-in Verfahren, mit dem sichergestellt
                    wird, dass Sie Newsletter erst erhalten, wenn Sie uns durch
                    Bet&auml;tigung eines an die angegebene Mailadresse
                    versandten Verifizierungslinks ausdr&uuml;cklich Ihre
                    Einwilligung in den Newsletterempfang best&auml;tigt haben
                  </p>

                  <p>
                    Mit der Aktivierung des Best&auml;tigungslinks erteilen Sie
                    uns Ihre Einwilligung f&uuml;r die Nutzung Ihrer
                    personenbezogenen Daten gem&auml;&szlig; Art. 6 Abs. 1 lit.
                    a DSGVO. Hierbei speichern wir Ihre vom Internet
                    Service-Provider (ISP) eingetragene IP-Adresse sowie das
                    Datum und die Uhrzeit der Anmeldung, um einen m&ouml;glichen
                    Missbrauch Ihrer E-Mail- Adresse zu einem sp&auml;teren
                    Zeitpunkt nachvollziehen zu k&ouml;nnen. Die von uns bei der
                    Anmeldung zum Newsletter erhobenen Daten werden streng
                    zweckgebunden verwendet.
                  </p>

                  <p>
                    Sie k&ouml;nnen den Newsletter jederzeit &uuml;ber den
                    daf&uuml;r vorgesehenen Link im Newsletter oder durch
                    entsprechende Nachricht an den eingangs genannten
                    Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird
                    Ihre E-Mailadresse unverz&uuml;glich in unserem
                    Newsletter-Verteiler gel&ouml;scht, soweit Sie nicht
                    ausdr&uuml;cklich in eine weitere Nutzung Ihrer Daten
                    eingewilligt haben oder wir uns eine
                    dar&uuml;berhinausgehende Datenverwendung vorbehalten, die
                    gesetzlich erlaubt ist und &uuml;ber die wir Sie in dieser
                    Erkl&auml;rung informieren.
                  </p>

                  <p>
                    <b>7.2</b>&nbsp;- Werbung per Briefpost
                    <br />
                    Auf Grundlage unseres berechtigten Interesses an
                    personalisierter Direktwerbung behalten wir uns vor, Ihren
                    Vor- und Nachnamen, Ihre Postanschrift und - soweit wir
                    diese zus&auml;tzlichen Angaben im Rahmen der
                    Vertragsbeziehung von Ihnen erhalten haben - Ihren Titel,
                    akademischen Grad, Ihr Geburtsjahr und Ihre Berufs-,
                    Branchen- oder Gesch&auml;ftsbezeichnung gem&auml;&szlig;
                    Art. 6 Abs. 1 lit. f DSGVO zu speichern und f&uuml;r die
                    Zusendung von interessanten Angeboten und Informationen zu
                    unseren Produkten per Briefpost zu nutzen.
                    <br />
                    Sie k&ouml;nnen der Speicherung und Nutzung Ihrer Daten zu
                    diesem Zweck jederzeit uns gegen&uuml;ber widersprechen.
                  </p>

                  <p>
                    <b>7.3</b>&nbsp;Im Falle des Abbruchs Ihres Einkaufs bei uns
                    vor Abschluss der Bestellung haben Sie die M&ouml;glichkeit,
                    per E-Mail einmalig an den Inhalt Ihres virtuellen
                    Warenkorbs erinnert zu werden.
                    <br />
                    Pflichtangabe f&uuml;r die &Uuml;bersendung dieser
                    Erinnerung ist allein Ihre E-Mailadresse. Die Angabe
                    weiterer Daten ist freiwillig und wird ggf. verwendet, um
                    Sie pers&ouml;nlich ansprechen zu k&ouml;nnen. F&uuml;r den
                    Mailversand verwenden wir das sog. Double Opt-in Verfahren,
                    mit dem sichergestellt wird, dass Sie eine Benachrichtigung
                    erst erhalten, wenn Sie uns durch Bet&auml;tigung eines an
                    die angegebene Mailadresse versandten Verifizierungslinks
                    ausdr&uuml;cklich Ihre diesbez&uuml;gliche Einwilligung
                    best&auml;tigt haben.
                  </p>

                  <p>
                    Mit der Aktivierung des Best&auml;tigungslinks erteilen Sie
                    uns Ihre Einwilligung f&uuml;r die Nutzung Ihrer
                    personenbezogenen Daten gem&auml;&szlig; Art. 6 Abs. 1 lit.
                    a DSGVO f&uuml;r die Versendung einer Warenkorb-Erinnerung.
                    Hierbei speichern wir Ihre vom Internet Service-Provider
                    (ISP) eingetragene IP-Adresse sowie das Datum und die
                    Uhrzeit der Anmeldung, um einen m&ouml;glichen Missbrauch
                    Ihrer E-Mail- Adresse zu einem sp&auml;teren Zeitpunkt
                    nachvollziehen zu k&ouml;nnen. Die von uns bei der Anmeldung
                    zu unserem E-Mail-Benachrichtigungsdienst erhobenen Daten
                    werden streng zweckgebunden verwendet.
                  </p>

                  <p>
                    Sie k&ouml;nnen die Warenkorb-Erinnerungen jederzeit durch
                    entsprechende Nachricht an den eingangs genannten
                    Verantwortlichen abbestellen. Nach erfolgter Abmeldung wird
                    Ihre E-Mailadresse unverz&uuml;glich aus unserem
                    hierf&uuml;r eingerichteten Verteiler gel&ouml;scht, soweit
                    Sie nicht ausdr&uuml;cklich in eine weitere Nutzung Ihrer
                    Daten eingewilligt haben oder wir uns eine dar&uuml;ber
                    hinausgehende Datenverwendung vorbehalten, die gesetzlich
                    erlaubt ist und &uuml;ber die wir Sie in dieser
                    Erkl&auml;rung informieren.
                  </p>

                  <h2>8) Datenverarbeitung zur Bestellabwicklung</h2>

                  <p>
                    <b>8.1</b>&nbsp;Soweit f&uuml;r die Vertragsabwicklung zu
                    Liefer- und Zahlungszwecken erforderlich, werden die von uns
                    erhobenen personenbezogenen Daten gem&auml;&szlig; Art. 6
                    Abs. 1 lit. b DSGVO an das beauftragte Transportunternehmen
                    und das beauftragte Kreditinstitut weitergegeben.
                  </p>

                  <p>
                    Sofern wir Ihnen auf Grundlage eines entsprechenden
                    Vertrages Aktualisierungen f&uuml;r Waren mit digitalen
                    Elementen oder f&uuml;r digitale Produkte schulden,
                    verarbeiten wir die von Ihnen bei der Bestellung
                    &uuml;bermittelten Kontaktdaten (Name, Anschrift,
                    Mailadresse), um Sie im Rahmen unserer gesetzlichen
                    Informationspflichten gem&auml;&szlig; Art. 6 Abs. 1 lit. c
                    DSGVO auf geeignetem Kommunikationsweg (etwa postalisch oder
                    per Mail) &uuml;ber anstehende Aktualisierungen im
                    gesetzlich vorgesehenen Zeitraum pers&ouml;nlich zu
                    informieren. Ihre Kontaktdaten werden hierbei streng
                    zweckgebunden f&uuml;r Mitteilungen &uuml;ber von uns
                    geschuldete Aktualisierungen verwendet und zu diesem Zweck
                    durch uns nur insoweit verarbeitet, wie dies f&uuml;r die
                    jeweilige Information erforderlich ist.
                  </p>

                  <p>
                    Zur Abwicklung Ihrer Bestellung arbeiten wir ferner mit dem
                    / den nachstehenden Dienstleister(n) zusammen, die uns ganz
                    oder teilweise bei der Durchf&uuml;hrung geschlossener
                    Vertr&auml;ge unterst&uuml;tzen. An diese Dienstleister
                    werden nach Ma&szlig;gabe der folgenden Informationen
                    gewisse personenbezogene Daten &uuml;bermittelt.
                  </p>

                  <p>
                    <b>8.2</b>&nbsp;Zur Erf&uuml;llung unserer vertraglichen
                    Pflichten unseren Kunden gegen&uuml;ber arbeiten wir mit
                    externen Versandpartnern zusammen. Wir geben Ihren Namen
                    sowie Ihre Lieferadresse und, soweit f&uuml;r die Lieferung
                    erforderlich Ihre Telefonnummer, ausschlie&szlig;lich zu
                    Zwecken der Warenlieferung Art. 6 Abs. 1 lit. b DSGVO an
                    einen von uns ausgew&auml;hlten Versandpartner weiter.
                  </p>

                  <p>
                    <b>8.3</b>&nbsp;Weitergabe personenbezogener Daten an
                    Versanddienstleister
                  </p>

                  <p>
                    <b>8.4</b>&nbsp;Deutsche Post
                  </p>

                  <p>
                    Als Transportdienstleister nutzen wir den nachstehenden
                    Anbieter: Deutsche Post AG, Charles-de-Gaulle-Stra&szlig;e
                    20, 53113 Bonn, Deutschland
                  </p>

                  <p>
                    Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO vor der
                    Zustellung der Ware zum Zweck der Abstimmung eines
                    Liefertermins bzw. zur Lieferank&uuml;ndigung an den
                    Anbieter weiter, sofern Sie hierf&uuml;r im Bestellprozess
                    Ihre ausdr&uuml;ckliche Einwilligung erteilt haben.
                    Anderenfalls geben wir zum Zwecke der Zustellung
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO nur den Namen
                    des Empf&auml;ngers und die Lieferadresse an den Anbieter
                    weiter. Die Weitergabe erfolgt nur, soweit dies f&uuml;r die
                    Warenlieferung erforderlich ist. In diesem Fall ist eine
                    vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
                    die Lieferank&uuml;ndigung nicht m&ouml;glich.
                  </p>

                  <p>
                    Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die
                    Zukunft gegen&uuml;ber dem oben bezeichneten
                    Verantwortlichen oder gegen&uuml;ber dem Anbieter widerrufen
                    werden.
                  </p>

                  <p>
                    <b>8.5</b>&nbsp;DHL
                  </p>

                  <p>
                    Als Transportdienstleister nutzen wir den nachstehenden
                    Anbieter: DHL Paket GmbH, Str&auml;&szlig;chensweg 10, 53113
                    Bonn, Deutschland
                  </p>

                  <p>
                    Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO vor der
                    Zustellung der Ware zum Zweck der Abstimmung eines
                    Liefertermins bzw. zur Lieferank&uuml;ndigung an den
                    Anbieter weiter, sofern Sie hierf&uuml;r im Bestellprozess
                    Ihre ausdr&uuml;ckliche Einwilligung erteilt haben.
                    Anderenfalls geben wir zum Zwecke der Zustellung
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO nur den Namen
                    des Empf&auml;ngers und die Lieferadresse an den Anbieter
                    weiter. Die Weitergabe erfolgt nur, soweit dies f&uuml;r die
                    Warenlieferung erforderlich ist. In diesem Fall ist eine
                    vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
                    die Lieferank&uuml;ndigung nicht m&ouml;glich.
                  </p>

                  <p>
                    Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die
                    Zukunft gegen&uuml;ber dem oben bezeichneten
                    Verantwortlichen oder gegen&uuml;ber dem Anbieter widerrufen
                    werden.
                  </p>

                  <p>
                    <b>8.6</b>&nbsp;DHL Express
                  </p>

                  <p>
                    Als Transportdienstleister nutzen wir den nachstehenden
                    Anbieter: DHL Express Germany GmbH,
                    Heinrich-Br&uuml;ning-Str. 5, 53113 Bonn, Deutschland
                  </p>

                  <p>
                    Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO vor der
                    Zustellung der Ware zum Zweck der Abstimmung eines
                    Liefertermins bzw. zur Lieferank&uuml;ndigung an den
                    Anbieter weiter, sofern Sie hierf&uuml;r im Bestellprozess
                    Ihre ausdr&uuml;ckliche Einwilligung erteilt haben.
                    Anderenfalls geben wir zum Zwecke der Zustellung
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO nur den Namen
                    des Empf&auml;ngers und die Lieferadresse an den Anbieter
                    weiter. Die Weitergabe erfolgt nur, soweit dies f&uuml;r die
                    Warenlieferung erforderlich ist. In diesem Fall ist eine
                    vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
                    die Lieferank&uuml;ndigung nicht m&ouml;glich.
                  </p>

                  <p>
                    Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die
                    Zukunft gegen&uuml;ber dem oben bezeichneten
                    Verantwortlichen oder gegen&uuml;ber dem Anbieter widerrufen
                    werden.
                  </p>

                  <p>
                    <b>8.7</b>&nbsp;DPD
                  </p>

                  <p>
                    Als Transportdienstleister nutzen wir den nachstehenden
                    Anbieter: DPD Deutschland GmbH, Wailandtstra&szlig;e 1,
                    63741 Aschaffenburg, Deutschland
                  </p>

                  <p>
                    Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO vor der
                    Zustellung der Ware zum Zweck der Abstimmung eines
                    Liefertermins bzw. zur Lieferank&uuml;ndigung an den
                    Anbieter weiter, sofern Sie hierf&uuml;r im Bestellprozess
                    Ihre ausdr&uuml;ckliche Einwilligung erteilt haben.
                    Anderenfalls geben wir zum Zwecke der Zustellung
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO nur den Namen
                    des Empf&auml;ngers und die Lieferadresse an den Anbieter
                    weiter. Die Weitergabe erfolgt nur, soweit dies f&uuml;r die
                    Warenlieferung erforderlich ist. In diesem Fall ist eine
                    vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
                    die Lieferank&uuml;ndigung nicht m&ouml;glich.
                  </p>

                  <p>
                    Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die
                    Zukunft gegen&uuml;ber dem oben bezeichneten
                    Verantwortlichen oder gegen&uuml;ber dem Anbieter widerrufen
                    werden.
                  </p>

                  <p>
                    <b>8.8</b>&nbsp;General Overnight (GO!)
                  </p>

                  <p>
                    Als Transportdienstleister nutzen wir den nachstehenden
                    Anbieter: GO! Express &amp; Logistics (Deutschland) GmbH,
                    Br&uuml;hler Stra&szlig;e 9, 53119 Bonn, Deutschland
                  </p>

                  <p>
                    Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO vor der
                    Zustellung der Ware zum Zweck der Abstimmung eines
                    Liefertermins bzw. zur Lieferank&uuml;ndigung an den
                    Anbieter weiter, sofern Sie hierf&uuml;r im Bestellprozess
                    Ihre ausdr&uuml;ckliche Einwilligung erteilt haben.
                    Anderenfalls geben wir zum Zwecke der Zustellung
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO nur den Namen
                    des Empf&auml;ngers und die Lieferadresse an den Anbieter
                    weiter. Die Weitergabe erfolgt nur, soweit dies f&uuml;r die
                    Warenlieferung erforderlich ist. In diesem Fall ist eine
                    vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
                    die Lieferank&uuml;ndigung nicht m&ouml;glich.
                  </p>

                  <p>
                    Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die
                    Zukunft gegen&uuml;ber dem oben bezeichneten
                    Verantwortlichen oder gegen&uuml;ber dem Anbieter widerrufen
                    werden.
                  </p>

                  <p>
                    <b>8.9</b>&nbsp;UPS
                  </p>

                  <p>
                    Als Transportdienstleister nutzen wir den nachstehenden
                    Anbieter: United Parcel Service Deutschland Inc. &amp; Co.
                    OHG, G&ouml;rlitzer Stra&szlig;e 1, 41460 Neuss, Deutschland
                  </p>

                  <p>
                    Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO vor der
                    Zustellung der Ware zum Zweck der Abstimmung eines
                    Liefertermins bzw. zur Lieferank&uuml;ndigung an den
                    Anbieter weiter, sofern Sie hierf&uuml;r im Bestellprozess
                    Ihre ausdr&uuml;ckliche Einwilligung erteilt haben.
                    Anderenfalls geben wir zum Zwecke der Zustellung
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO nur den Namen
                    des Empf&auml;ngers und die Lieferadresse an den Anbieter
                    weiter. Die Weitergabe erfolgt nur, soweit dies f&uuml;r die
                    Warenlieferung erforderlich ist. In diesem Fall ist eine
                    vorherige Abstimmung des Liefertermins mit dem Anbieter bzw.
                    die Lieferank&uuml;ndigung nicht m&ouml;glich.
                  </p>

                  <p>
                    Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die
                    Zukunft gegen&uuml;ber dem oben bezeichneten
                    Verantwortlichen oder gegen&uuml;ber dem Anbieter widerrufen
                    werden.
                  </p>

                  <p>
                    <b>8.10</b>&nbsp;Verwendung von Paymentdienstleistern
                    (Zahlungsdiensten)
                  </p>

                  <p>
                    <b>8.11</b>&nbsp;Shopify Payments
                  </p>

                  <p>
                    Auf dieser Website stehen eine oder mehrere
                    Online-Zahlungsarten des folgenden Anbieters zur
                    Verf&uuml;gung: Shopify International Limited, Victoria
                    Buildings, 1-2 Haddington Road, Dublin 4, D04 XN32, Irland
                  </p>

                  <p>
                    Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in
                    Vorleistung gehen (etwa Kreditkartenzahlung), werden an
                    diesen Ihre im Rahmen des Bestellvorgangs mitgeteilten
                    Zahlungsdaten (darunter Name, Anschrift, Bank- und
                    Zahlkarteninformationen, W&auml;hrung und
                    Transaktionsnummer) sowie Informationen &uuml;ber den Inhalt
                    Ihrer Bestellung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO
                    weitergegeben. Die Weitergabe Ihrer Daten erfolgt in diesem
                    Falle ausschlie&szlig;lich zum Zweck der Zahlungsabwicklung
                    mit dem Anbieter und nur insoweit, als sie hierf&uuml;r
                    erforderlich ist.
                  </p>

                  <h2>9) Seitenfunktionalit&auml;ten</h2>

                  <p>
                    <b>9.1</b>&nbsp;Facebook-Plugins
                  </p>

                  <p>
                    Auf unserer Website werden Plugins des sozialen Netzwerkes
                    des folgenden Anbieters verwendet: Meta Platforms Ireland
                    Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
                    Irland (&quot;Facebook&quot;)
                  </p>

                  <p>
                    Diese Plugins erm&ouml;glichen direkte Interaktionen mit
                    Inhalten auf dem sozialen Netzwerk.
                  </p>

                  <p>
                    Um den Schutz Ihrer Daten beim Besuch unserer Website zu
                    erh&ouml;hen, sind die Plugins zun&auml;chst deaktiviert
                    mittels sogenannter &bdquo;2-Klick&#8220;- oder
                    &bdquo;Shariff&#8220;-L&ouml;sung in die Seite eingebunden.
                  </p>

                  <p>
                    Diese Einbindung gew&auml;hrleistet, dass beim Aufruf einer
                    Seite unseres Webauftritts, die solche Plugins enth&auml;lt,
                    noch keine Verbindung mit den Servern des Anbieters
                    hergestellt wird.
                  </p>

                  <p>
                    Erst wenn Sie die Plugins aktivieren und damit
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO Ihre
                    Einwilligung in die Daten&uuml;bermittlung erteilen, stellt
                    Ihr Browser eine direkte Verbindung zu den Servern des
                    Anbieters her. Hierbei werden, unabh&auml;ngig von einem
                    Login in ein vorhandenes Nutzerprofil, in bestimmtem Umfang
                    Informationen &uuml;ber Ihr verwendetes Endger&auml;t
                    (darunter Ihre IP-Adresse), Ihren Browser und Ihren
                    Seitenverlauf an den Anbieter &uuml;bermittelt und dort
                    gegebenenfalls weiterverarbeitet.
                    <br />
                    <br />
                    Wenn Sie in ein vorhandenes Nutzerprofil auf dem sozialen
                    Netzwerk des Anbieters eingeloggt sind, werden Informationen
                    zu &uuml;ber die Plugins vollzogenen Interaktionen
                    au&szlig;erdem dort ver&ouml;ffentlicht und Ihren Kontakten
                    angezeigt.
                    <br />
                    Sie k&ouml;nnen Ihre Einwilligung jederzeit widerrufen indem
                    Sie das aktivierte Plugin durch erneutes Anklicken wieder
                    deaktivieren. Der Widerruf hat jedoch keinen Einfluss auf
                    die Daten, die bereits an den Anbieter &uuml;bertragen
                    wurden.
                  </p>

                  <p>
                    Daten k&ouml;nnen zudem &uuml;bertragen werden an: Meta
                    Platforms Inc., USA
                  </p>

                  <p>
                    Wir haben mit dem Anbieter einen
                    Auftragsverarbeitungsvertrag geschlossen, der den Schutz der
                    Daten unserer Seitenbesucher sicherstellt und eine
                    unberechtigte Weitergabe an Dritte untersagt.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft
                    sich der Anbieter auf Standardvertragsklauseln der
                    Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus sicherzustellen sollen.
                  </p>

                  <p>
                    <b>9.2</b>&nbsp;Instagram-Plugins
                  </p>

                  <p>
                    Auf unserer Website werden Plugins des sozialen Netzwerkes
                    des folgenden Anbieters verwendet: Meta Platforms Ireland
                    Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2
                    Ireland (&bdquo;Instagram&#8220;)
                  </p>

                  <p>
                    Diese Plugins erm&ouml;glichen direkte Interaktionen mit
                    Inhalten auf dem sozialen Netzwerk.
                  </p>

                  <p>
                    Um den Schutz Ihrer Daten beim Besuch unserer Website zu
                    erh&ouml;hen, sind die Plugins zun&auml;chst deaktiviert
                    mittels sogenannter &bdquo;2-Klick&#8220;- oder
                    &bdquo;Shariff&#8220;-L&ouml;sung in die Seite eingebunden.
                  </p>

                  <p>
                    Diese Einbindung gew&auml;hrleistet, dass beim Aufruf einer
                    Seite unseres Webauftritts, die solche Plugins enth&auml;lt,
                    noch keine Verbindung mit den Servern des Anbieters
                    hergestellt wird.
                  </p>

                  <p>
                    Erst wenn Sie die Plugins aktivieren und damit
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO Ihre
                    Einwilligung in die Daten&uuml;bermittlung erteilen, stellt
                    Ihr Browser eine direkte Verbindung zu den Servern des
                    Anbieters her. Hierbei werden, unabh&auml;ngig von einem
                    Login in ein vorhandenes Nutzerprofil, in bestimmtem Umfang
                    Informationen &uuml;ber Ihr verwendetes Endger&auml;t
                    (darunter Ihre IP-Adresse), Ihren Browser und Ihren
                    Seitenverlauf an den Anbieter &uuml;bermittelt und dort
                    gegebenenfalls weiterverarbeitet.
                    <br />
                    <br />
                    Wenn Sie in ein vorhandenes Nutzerprofil auf dem sozialen
                    Netzwerk des Anbieters eingeloggt sind, werden Informationen
                    zu &uuml;ber die Plugins vollzogenen Interaktionen
                    au&szlig;erdem dort ver&ouml;ffentlicht und Ihren Kontakten
                    angezeigt.
                    <br />
                    Sie k&ouml;nnen Ihre Einwilligung jederzeit widerrufen indem
                    Sie das aktivierte Plugin durch erneutes Anklicken wieder
                    deaktivieren. Der Widerruf hat jedoch keinen Einfluss auf
                    die Daten, die bereits an den Anbieter &uuml;bertragen
                    wurden.
                  </p>

                  <p>
                    Daten k&ouml;nnen zudem &uuml;bertragen werden: Meta
                    Platforms Inc., USA
                  </p>

                  <p>
                    Wir haben mit dem Anbieter einen
                    Auftragsverarbeitungsvertrag geschlossen, der den Schutz der
                    Daten unserer Seitenbesucher sicherstellt und eine
                    unberechtigte Weitergabe an Dritte untersagt.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft
                    sich der Anbieter auf Standardvertragsklauseln der
                    Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus sicherzustellen sollen.
                  </p>

                  <p>
                    <b>9.3</b>&nbsp;Pinterest-Plugins
                  </p>

                  <p>
                    Auf unserer Website werden Plugins des sozialen Netzwerkes
                    des folgenden Anbieters verwendet: Pinterest Europe Ltd.,
                    Palmerston House, 2nd Floor, Fenian Street, Dublin 2,
                    Ireland (&bdquo;Pinterest&#8220;)
                  </p>

                  <p>
                    Diese Plugins erm&ouml;glichen direkte Interaktionen mit
                    Inhalten auf dem sozialen Netzwerk.
                  </p>

                  <p>
                    Um den Schutz Ihrer Daten beim Besuch unserer Website zu
                    erh&ouml;hen, sind die Plugins zun&auml;chst deaktiviert
                    mittels sogenannter &bdquo;2-Klick&#8220;- oder
                    &bdquo;Shariff&#8220;-L&ouml;sung in die Seite eingebunden.
                  </p>

                  <p>
                    Diese Einbindung gew&auml;hrleistet, dass beim Aufruf einer
                    Seite unseres Webauftritts, die solche Plugins enth&auml;lt,
                    noch keine Verbindung mit den Servern des Anbieters
                    hergestellt wird.
                  </p>

                  <p>
                    Erst wenn Sie die Plugins aktivieren und damit
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO Ihre
                    Einwilligung in die Daten&uuml;bermittlung erteilen, stellt
                    Ihr Browser eine direkte Verbindung zu den Servern des
                    Anbieters her. Hierbei werden, unabh&auml;ngig von einem
                    Login in ein vorhandenes Nutzerprofil, in bestimmtem Umfang
                    Informationen &uuml;ber Ihr verwendetes Endger&auml;t
                    (darunter Ihre IP-Adresse), Ihren Browser und Ihren
                    Seitenverlauf an den Anbieter &uuml;bermittelt und dort
                    gegebenenfalls weiterverarbeitet.
                    <br />
                    <br />
                    Wenn Sie in ein vorhandenes Nutzerprofil auf dem sozialen
                    Netzwerk des Anbieters eingeloggt sind, werden Informationen
                    zu &uuml;ber die Plugins vollzogenen Interaktionen
                    au&szlig;erdem dort ver&ouml;ffentlicht und Ihren Kontakten
                    angezeigt.
                    <br />
                    Sie k&ouml;nnen Ihre Einwilligung jederzeit widerrufen indem
                    Sie das aktivierte Plugin durch erneutes Anklicken wieder
                    deaktivieren. Der Widerruf hat jedoch keinen Einfluss auf
                    die Daten, die bereits an den Anbieter &uuml;bertragen
                    wurden.
                  </p>

                  <p>
                    Daten k&ouml;nnen zudem &uuml;bertragen werden an: Pinterest
                    Inc., USA
                  </p>

                  <p>
                    Wir haben mit dem Anbieter einen
                    Auftragsverarbeitungsvertrag geschlossen, der den Schutz der
                    Daten unserer Seitenbesucher sicherstellt und eine
                    unberechtigte Weitergabe an Dritte untersagt.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft
                    sich der Anbieter auf Standardvertragsklauseln der
                    Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus sicherzustellen sollen.
                  </p>

                  <p>
                    <b>9.4</b>&nbsp;Youtube
                  </p>

                  <p>
                    Diese Website nutzt Plugins zur Anzeige und Wiedergabe von
                    Videos des folgenden Anbieters: Google Ireland Limited,
                    Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
                  </p>

                  <p>
                    Daten k&ouml;nnen zudem &uuml;bermittelt werden an: Google
                    LLC., USA
                  </p>

                  <p>
                    Wenn Sie eine Seite unseres Internetauftritts aufrufen, die
                    ein solches Plugin enth&auml;lt, stellt Ihr Browser eine
                    direkte Verbindung zu den Servern des Anbieters her, um das
                    Plugin zu laden. Hierbei werden bestimmte Informationen,
                    einschlie&szlig;lich Ihrer IP-Adresse, an den Anbieter
                    &uuml;bermittelt.
                  </p>

                  <p>
                    Wird die Wiedergabe eingebetteter Videos &uuml;ber das
                    Plugin gestartet, setzt der Anbieter zudem Cookies ein, um
                    Informationen &uuml;ber das Nutzerverhalten zu sammeln,
                    Wiedergabestatistiken zu erstellen und missbr&auml;uchliches
                    Verhalten zu unterbinden.
                  </p>

                  <p>
                    Sind Sie w&auml;hrend Ihres Seitenbesuchs in einem
                    Nutzerkonto beim Anbieter eingeloggt, werden Ihre Daten beim
                    Klick auf ein Video direkt Ihrem Konto zugeordnet. Wenn Sie
                    die Zuordnung zu Ihrem Konto nicht w&uuml;nschen,
                    m&uuml;ssen Sie sich vor Bet&auml;tigung der
                    Wiedergabeschlaltfl&auml;che ausloggen.
                  </p>

                  <p>
                    Alle vorgenannten Verarbeitungen, insbesondere das Setzen
                    von Cookies f&uuml;r das Auslesen von Informationen auf dem
                    verwendeten Endger&auml;t, erfolgen nur, wenn Sie uns hierzu
                    Ihre ausdr&uuml;ckliche Einwilligung gem. Art. 6 Abs. 1 lit.
                    a DSGVO erteilt haben. Die erteilte Einwilligung k&ouml;nnen
                    Sie jederzeit mit Wirkung f&uuml;r die Zukunft widerrufen,
                    indem Sie diesen Dienst &uuml;ber das auf der Webseite
                    bereitgestellte &bdquo;Cookie-Consent-Tool&#8220;
                    deaktivieren.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft
                    sich der Anbieter auf Standardvertragsklauseln der
                    Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus sicherzustellen sollen.
                  </p>

                  <p>
                    <b>9.5</b>&nbsp;Google Photos
                  </p>

                  <p>
                    Diese Website nutzt f&uuml;r die Einbindung und Anzeige von
                    Lichtbildern den Bilderdienst &bdquo;Google Photos&#8220;
                    der Google Ireland Limited, Gordon House, Barrow Street,
                    Dublin 4, Irland (nachfolgend: &bdquo;Google&#8220;).
                  </p>

                  <p>
                    Google Photos selbst speichert keine Informationen auf
                    Nutzerendger&auml;ten oder liest diese aus. Auch nimmt der
                    Dienst keine eigenst&auml;ndigen Datenanalysen vor.
                  </p>

                  <p>
                    Allerdings wird zum Laden der Bilddateien aus dem
                    Google-Netzwerk bei Seitenaufruf Ihre IP-Adresse an Google
                    &uuml;bertragen und dort gegebenenfalls gespeichert. Auch
                    eine &Uuml;bermittlung an Server von Google LLC. In den USA
                    ist m&ouml;glich.
                  </p>

                  <p>
                    Diese Verarbeitung wird nur dann vollzogen, wenn Sie uns
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO dazu Ihre
                    ausdr&uuml;ckliche Einwilligung erteilt haben. Ohne diese
                    Einwilligungserteilung werden Bilddateien &uuml;ber Google
                    Photos nicht geladen.
                  </p>

                  <p>
                    Sie k&ouml;nnen Ihre erteilte Einwilligung jederzeit mit
                    Wirkung f&uuml;r die Zukunft widerrufen. Um Ihren Widerruf
                    auszu&uuml;ben, deaktivieren Sie diesen Dienst bitte in dem
                    auf der Webseite bereitgestellten
                    &bdquo;Cookie-Consent-Tool&#8220;. Wir haben mit Google
                    einen Auftragsverarbeitungsvertrag abgeschlossen, mit dem
                    Google verpflichtet wird, die Daten unserer Seitenbesucher
                    zu sch&uuml;tzen und sie nicht an Dritte weiter zu geben.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten aus der EU in die
                    USA beruft sich Google auf sog. Standarddatenschutzklauseln
                    der Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus in den USA
                    gew&auml;hrleisten sollen.
                    <br />
                    Weitere Datenschutzhinweise zu Google Photos finden Sie
                    hier:{' '}
                    <a href="https://policies.google.com/privacy?hl=de">
                      https://policies.google.com/privacy?hl=de
                    </a>
                  </p>

                  <p>
                    <b>9.6</b>&nbsp;Trusted Shops Trustbadge
                  </p>

                  <p>
                    Auf unserer Website sind zur Anzeige externer
                    Kundenbewertungen und/oder eines extern vergebenen
                    G&uuml;tezeichens Graphikelemente des folgenden Anbieters
                    eingebunden: Trusted Shops AG, Subbelrather Str. 15C, 50823
                    K&ouml;ln
                  </p>

                  <p>
                    Wenn Sie eine Seite unseres Webauftritts aufrufen, die
                    solche Graphikelemente enth&auml;lt, stellt Ihr Browser eine
                    direkte Verbindung zu den Servern des Anbieters her, um die
                    Elemente ordnungsgem&auml;&szlig; zu laden. Hierbei werden
                    bestimmte Browserinformationen, einschlie&szlig;lich Ihrer
                    IP-Adresse, an den Anbieter &uuml;bermittelt.
                  </p>

                  <p>
                    Sofern dabei auch personenbezogene Daten verarbeitet werden,
                    erfolgt dies gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf
                    Basis unseres berechtigten Interesses an der optimalen
                    Vermarktung unseres Angebots und der ansprechenden
                    Gestaltung unseres Internetauftritts.
                  </p>

                  <p>
                    <b>9.7</b>&nbsp;Bewerbungen auf Stellenausschreibungen per
                    E-Mail
                  </p>

                  <p>
                    Auf unserer Website schreiben wir in einer gesonderten
                    Rubrik aktuell vakante Stellen aus, auf die sich
                    Interessenten per E-Mail an die bereitgestellte
                    Kontaktadresse bewerben k&ouml;nnen.
                  </p>

                  <p>
                    Die Bewerber m&uuml;ssen alle personenbezogenen Daten
                    angeben, die f&uuml;r eine fundierte Beurteilung
                    erforderlich sind, einschlie&szlig;lich allgemeiner
                    Informationen wie Name, Anschrift und
                    Kontaktm&ouml;glichkeiten, sowie leistungsbezogene Nachweise
                    und gegebenenfalls gesundheitsbezogene Angaben. Einzelheiten
                    zur Bewerbung sind der Stellenausschreibung zu entnehmen.
                  </p>

                  <p>
                    Nach Eingang der Bewerbung per E-Mail werden die Daten
                    ausschlie&szlig;lich zum Zwecke der Bewerbungsbearbeitung
                    gespeichert und ausgewertet. Bei R&uuml;ckfragen nutzen wir
                    entweder die E-Mail-Adresse oder Telefonnummer des
                    Bewerbers. Die Verarbeitung erfolgt auf Grundlage von Art. 6
                    Abs. 1 lit. b DSGVO (bzw. &sect; 26 Abs. 1 BDSG), in deren
                    Sinne das Durchlaufen des Bewerbungsverfahrens als
                    Arbeitsvertragsanbahnung gilt.
                  </p>

                  <p>
                    Soweit im Rahmen des Bewerbungsverfahrens besondere
                    Kategorien von personenbezogenen Daten im Sinne des Art. 9
                    Abs. 1 DSGVO (z.B. Gesundheitsdaten wie Angaben &uuml;ber
                    die Schwerbehinderteneigenschaft) bei Bewerbern angefragt
                    werden, erfolgt die Verarbeitung gem&auml;&szlig; Art. 9
                    Abs. 2 lit. b. DSGVO, damit wir die aus dem Arbeitsrecht und
                    dem Recht der sozialen Sicherheit und des Sozialschutzes
                    erwachsenden Rechte aus&uuml;ben und unseren
                    diesbez&uuml;glichen Pflichten nachkommen k&ouml;nnen.
                  </p>

                  <p>
                    Kumulativ oder alternativ kann die Verarbeitung der
                    besonderen Datenkategorien auch auf Art. 9 Abs. 1 lit. h
                    DSGVO gest&uuml;tzt sein, wenn sie zu Zwecken der
                    Gesundheitsvorsorge oder der Arbeitsmedizin, f&uuml;r die
                    Beurteilung der Arbeitsf&auml;higkeit des Bewerbers,
                    f&uuml;r die medizinische Diagnostik, die Versorgung oder
                    Behandlung im Gesundheits- oder Sozialbereich oder f&uuml;r
                    die Verwaltung von Systemen und Diensten im Gesundheits-
                    oder Sozialbereich erfolgt.
                  </p>

                  <p>
                    Kommt es nicht zu einer Auswahl des Bewerbers oder zieht ein
                    Bewerber seine Bewerbung vorzeitig zur&uuml;ck, werden
                    dessen &uuml;bermittelte Daten sowie s&auml;mtlicher
                    elektronischer Schriftverkehr einschlie&szlig;lich der
                    Bewerbungsmail nach einer entsprechenden Benachrichtigung
                    sp&auml;testens nach 6 Monaten gel&ouml;scht. Diese Frist
                    bemisst sich nach unserem berechtigten Interesse, etwaige
                    Anschlussfragen zu der Bewerbung zu beantworten und
                    gegebenenfalls unseren Nachweispflichten aus den
                    Vorschriften zur Gleichbehandlung von Bewerbern nachkommen
                    zu k&ouml;nnen.
                  </p>

                  <p>
                    Im Falle einer erfolgreichen Bewerbung werden die zur
                    Verf&uuml;gung gestellten Daten auf Grundlage von Art. 6
                    Abs. 1 lit. b DSGVO (bei Verarbeitung in Deutschland i.V.m.
                    &sect; 26 Abs. 1 BDSG) zum Zwecke der Durchf&uuml;hrung des
                    Besch&auml;ftigungsverh&auml;ltnisses verarbeitet.
                  </p>

                  <p>
                    <b>9.8</b>&nbsp;Google Forms
                  </p>

                  <p>
                    F&uuml;r die Durchf&uuml;hrung von Umfragen oder bei
                    Online-Formularen verwenden wir die Dienste des folgenden
                    Anbieters: Google Ireland Ltd., Gordon House, Barrow Street,
                    Dublin 4, Irland
                  </p>

                  <p>
                    Neben einer &Uuml;bermittlung von Daten an den o.g.
                    Anbieterstandort k&ouml;nnen Daten auch &uuml;bermittelt
                    werden an: Google LLC, USA
                  </p>

                  <p>
                    Der Anbieter erm&ouml;glicht es uns, Umfragen und
                    Onlineformulare zu gestalten und auszuwerten. Neben den
                    jeweiligen personenbezogenen Daten, die Sie in die Formulare
                    eingeben, werden auch Informationen zu Ihrem Betriebssystem,
                    Browser, Datum und Uhrzeit Ihres Besuchs, Referrer-URL sowie
                    Ihre IP-Adresse erhoben, an den Anbieter &uuml;bermittelt
                    und auf Servern des Anbieters gespeichert.
                  </p>

                  <p>
                    Die Speicherung der von Ihnen in die Formulare eingegebenen
                    Informationen erfolgt passwortgesch&uuml;tzt, damit
                    sichergestellt ist, dass Drittzugriffe ausgeschlossen werden
                    und nur wir die Daten zum im Formular jeweilig benannten
                    Zweck auswerten k&ouml;nnen.
                  </p>

                  <p>
                    Bei der Verarbeitung von personenbezogenen Daten, die zur
                    Erf&uuml;llung eines Vertrages mit Ihnen erforderlich sind
                    (dies gilt auch f&uuml;r Verarbeitungsvorg&auml;nge, die zur
                    Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen
                    erforderlich sind), dient Art. 6 Abs. 1 lit. b DSGVO als
                    Rechtsgrundlage. Haben Sie uns eine Einwilligung f&uuml;r
                    die Verarbeitung Ihrer Daten erteilt, erfolgt die
                    Verarbeitung auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO.
                    Eine erteilte Einwilligung kann jederzeit mit Wirkung
                    f&uuml;r die Zukunft widerrufen werden.
                  </p>

                  <p>
                    Wir haben mit dem Anbieter einen
                    Auftragsverarbeitungsvertrag geschlossen, der den Schutz der
                    Daten unserer Seitenbesucher sicherstellt und eine unbefugte
                    Weitergabe an Dritte untersagt.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft
                    sich der Anbieter auf Standardvertragsklauseln der
                    Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus sicherzustellen sollen.
                  </p>

                  <p>
                    <b>9.9</b>&nbsp;- Google Web Fonts
                  </p>

                  <p>
                    Diese Seite nutzt zur einheitlichen Darstellung von
                    Schriftarten sogenannte Web Fonts des folgenden Anbieters:
                    Google Ireland Limited, Gordon House, 4 Barrow St, Dublin,
                    D04 E5W5, Irland
                  </p>

                  <p>
                    Beim Aufruf einer Seite l&auml;dt Ihr Browser die
                    ben&ouml;tigten Web Fonts in ihren Browser-Cache, um Texte
                    und Schriftarten korrekt anzuzeigen und stellt eine direkte
                    Verbindung zu den Servern des Anbieters her. Hierbei werden
                    bestimmte Browserinformationen, einschlie&szlig;lich Ihrer
                    IP-Adresse, an den Anbieter &uuml;bermittelt.
                  </p>

                  <p>
                    Daten k&ouml;nnen zudem &uuml;bermittelt werden an: Google
                    LLC, USA
                  </p>

                  <p>
                    Die Verarbeitung von personenbezogenen Daten im Zuge der
                    Verbindungsaufnahme mit dem Anbieter der Schriftarten wird
                    nur dann vollzogen, wenn Sie uns gem&auml;&szlig; Art. 6
                    Abs. 1 lit. a DSGVO dazu Ihre ausdr&uuml;ckliche
                    Einwilligung erteilt haben. Sie k&ouml;nnen Ihre erteilte
                    Einwilligung jederzeit mit Wirkung f&uuml;r die Zukunft
                    widerrufen, indem Sie diesen Dienst &uuml;ber das auf der
                    Webseite bereitgestellte &bdquo;Cookie-Consent-Tool&#8220;
                    deaktivieren. Falls Ihr Browser keine Web Fonts
                    unterst&uuml;tzt, wird eine Standardschrift von Ihrem
                    Computer genutzt.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft
                    sich der Anbieter auf Standardvertragsklauseln der
                    Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus sicherzustellen sollen.
                  </p>

                  <p>
                    <b>9.10</b>&nbsp;Google reCAPTCHA
                  </p>

                  <p>
                    Auf dieser Website verwenden wir den CAPTCHA-Dienst des
                    folgenden Anbieters: Google Ireland Limited, Gordon House, 4
                    Barrow St, Dublin, D04 E5W5, Irland
                  </p>

                  <p>
                    Daten k&ouml;nnen zudem &uuml;bermittelt werden an: Google
                    LLC, USA. F&uuml;r die optische Gestaltung des
                    Captcha-Fensters werden vom Anbieter &bdquo;Google
                    Fonts&quot;, also von Google aus dem Internet geladene
                    Schriftarten, verwendet. Zu einer Verarbeitung weiterer
                    Informationen als den oben genannten, die bereits &uuml;ber
                    die Funktionalit&auml;t von ReCaptcha an Google
                    &uuml;bertragen werden, kommt es hierbei nicht.
                  </p>

                  <p>
                    Der Dienst pr&uuml;ft, ob eine Eingabe durch eine
                    nat&uuml;rliche Person oder missbr&auml;uchlich durch
                    maschinelle und automatisierte Verarbeitung erfolgt, und
                    blockiert Spam, DDoS-Attacken sowie &auml;hnliche
                    automatisierte Schadzugriffe. Um sicherzustellen, dass eine
                    Handlung von einem Menschen und nicht von einem
                    automatisierten Bot vorgenommen wird, erhebt Cloudflare
                    Turnstile die IP-Adresse des verwendeten Endger&auml;ts,
                    Erkennungsdaten des verwendeten Browser- und
                    Betriebssystem-Typ sowie Datum und Dauer des Besuchs und
                    &uuml;bermittelt diese zur Auswertung an Server des
                    Anbieters.
                  </p>

                  <p>
                    Rechtsgrundlage ist unser berechtigtes Interesse an der
                    Feststellung der individuellen Eigenverantwortung im
                    Internet und der Vermeidung von Missbrauch und Spam
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO.
                  </p>

                  <p>
                    Wir haben mit dem Anbieter einen
                    Auftragsverarbeitungsvertrag abgeschlossen, der den Schutz
                    der Daten unserer Seitenbesucher sicherstellt und eine
                    unberechtigte Weitergabe an Dritte untersagt.
                  </p>

                  <p>
                    F&uuml;r die &Uuml;bermittlung von Daten in die USA beruft
                    sich der Anbieter auf Standardvertragsklauseln der
                    Europ&auml;ischen Kommission, welche die Einhaltung des
                    europ&auml;ischen Datenschutzniveaus sicherzustellen sollen.
                  </p>

                  <p>
                    <b>9.11</b>&nbsp;Google Kundenrezensionen (ehemals Google
                    Zertifizierter-H&auml;ndler-Programm)
                  </p>

                  <p>
                    Wir arbeiten mit Google im Rahmen des Programms
                    &bdquo;Google Kundenrezensionen&#8220; zusammen. Der
                    Anbieter ist Google Ireland Limited, Gordon House, 4 Barrow
                    St, Dublin, D04 E5W5, Irland (&#8220;Google&rdquo;). Dieses
                    Programm gibt uns die M&ouml;glichkeit, Kundenrezensionen
                    von Nutzern unserer Website einzuholen. Hierbei werden Sie
                    nach einem Einkauf auf unserer Website gefragt, ob Sie an
                    einer E-Mail-Umfrage von Google teilnehmen m&ouml;chten.
                  </p>

                  <p>
                    Wenn Sie Ihre Einwilligung gem&auml;&szlig; Art. 6 Abs. 1
                    lit. a DSGVO erteilen, &uuml;bermitteln wir Ihre
                    E-Mail-Adresse an Google. Sie erhalten eine E-Mail von
                    Google Kundenrezensionen, in der Sie gebeten werden, die
                    Kauferfahrung auf unserer Website zu bewerten. Die von Ihnen
                    abgegebene Bewertung wird anschlie&szlig;end mit unseren
                    anderen Bewertungen zusammengefasst und in unserem Logo
                    Google Kundenrezensionen sowie in unserem Merchant
                    Center-Dashboard angezeigt. Au&szlig;erdem wird Ihre
                    Bewertung f&uuml;r Google Verk&auml;uferbewertungen genutzt.
                    Im Rahmen der Nutzung von Google Kundenrezensionen kann es
                    auch zu einer &Uuml;bermittlung von personenbezogenen Daten
                    an die Server der Google LLC. in den USA kommen.
                  </p>

                  <p>
                    Sie k&ouml;nnen Ihre Einwilligung jederzeit durch eine
                    Nachricht an den f&uuml;r die Datenverarbeitung
                    Verantwortlichen oder gegen&uuml;ber Google widerrufen.
                  </p>

                  <h2>10) Tools und Sonstiges</h2>

                  <p>
                    <b>10.1</b>&nbsp;Cookie-Consent-Tool
                  </p>

                  <p>
                    Diese Website nutzt zur Einholung wirksamer
                    Nutzereinwilligungen f&uuml;r einwilligungspflichtige
                    Cookies und cookie-basierte Anwendungen ein sog.
                    &bdquo;Cookie-Consent-Tool&#8220;. Das
                    &bdquo;Cookie-Consent-Tool&#8220; wird Nutzern bei
                    Seitenaufruf in Form einer interaktive
                    Benutzeroberfl&auml;che angezeigt, auf welcher sich per
                    H&auml;kchensetzung Einwilligungen f&uuml;r bestimmte
                    Cookies und/oder cookie-basierte Anwendungen erteilen
                    lassen. Hierbei werden durch den Einsatz des Tools alle
                    einwilligungspflichtigen Cookies/Dienste nur dann geladen,
                    wenn der jeweilige Nutzer entsprechende Einwilligungen per
                    H&auml;kchensetzung erteilt. So wird sichergestellt, dass
                    nur im Falle einer erteilten Einwilligung derartige Cookies
                    auf dem jeweiligen Endger&auml;t des Nutzers gesetzt werden.
                  </p>

                  <p>
                    Das Tool setzt technisch notwendige Cookies, um Ihre
                    Cookie-Pr&auml;ferenzen zu speichern. Personenbezogene
                    Nutzerdaten werden hierbei grunds&auml;tzlich nicht
                    verarbeitet.
                  </p>

                  <p>
                    Kommt es im Einzelfall zum Zwecke der Speicherung, Zuordnung
                    oder Protokollierung von Cookie-Einstellungen doch zur
                    Verarbeitung personenbezogener Daten (wie etwa der
                    IP-Adresse), erfolgt diese gem&auml;&szlig; Art. 6 Abs. 1
                    lit. f DSGVO auf Basis unseres berechtigten Interesses an
                    einem rechtskonformen, nutzerspezifischen und
                    nutzerfreundlichen Einwilligungsmanagement f&uuml;r Cookies
                    und mithin an einer rechtskonformen Ausgestaltung unseres
                    Internetauftritts.
                  </p>

                  <p>
                    Weitere Rechtsgrundlage f&uuml;r die Verarbeitung ist ferner
                    Art. 6 Abs. 1 lit. c DSGVO. Wir unterliegen als
                    Verantwortliche der rechtlichen Verpflichtung, den Einsatz
                    technisch nicht notwendiger Cookies von der jeweiligen
                    Nutzereinwilligung abh&auml;ngig zu machen.
                  </p>

                  <p>
                    Wir haben mit dem Anbieter einen
                    Auftragsverarbeitungsvertrag geschlossen, der den Schutz der
                    Daten unserer Seitenbesucher sicherstellt und eine
                    unberechtigte Weitergabe an Dritte untersagt.
                  </p>

                  <p>
                    Weitere Informationen zum Betreiber und den
                    Einstellungsm&ouml;glichkeiten des Cookie-Consent-Tools
                    finden Sie direkt in der entsprechenden
                    Benutzeroberfl&auml;che auf unserer Website.
                  </p>

                  <p>
                    <b>10.2</b>&nbsp;Google Maps
                  </p>

                  <p>
                    Diese Webseite nutzt einen Online-Kartendienst des folgenden
                    Anbieters: Google Maps (API) von Google Ireland Limited,
                    Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
                    (&#8220;Google&rdquo;).
                  </p>

                  <p>
                    Google Maps ist ein Webdienst zur Darstellung von
                    interaktiven (Land-)Karten, um geographische Informationen
                    visuell darzustellen. &Uuml;ber die Nutzung dieses Dienstes
                    wird Ihnen unser Standort angezeigt und eine etwaige Anfahrt
                    erleichtert.
                  </p>

                  <p>
                    Bereits beim Aufrufen derjenigen Unterseiten, in die die
                    Karte von Google Maps eingebunden ist, werden Informationen
                    &uuml;ber Ihre Nutzung unserer Website (wie z.B. Ihre
                    IP-Adresse) an Server von Google &uuml;bertragen und dort
                    gespeichert, hierbei kann es auch zu einer &Uuml;bermittlung
                    an die Server der Google LLC. in den USA kommen. Dies
                    erfolgt unabh&auml;ngig davon, ob Google ein Nutzerkonto
                    bereitstellt, &uuml;ber das Sie eingeloggt sind oder ob ein
                    Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind,
                    werden Ihre Daten direkt Ihrem Konto zugeordnet. Wenn Sie
                    die Zuordnung mit Ihrem Profil bei Google nicht
                    w&uuml;nschen, m&uuml;ssen Sie sich vor Aktivierung des
                    Buttons ausloggen. Google speichert Ihre Daten (selbst
                    f&uuml;r nicht eingeloggte Nutzer) als Nutzungsprofile und
                    wertet diese aus.
                  </p>

                  <p>
                    Die Erhebung, Speicherung und die Auswertung erfolgen
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis des
                    berechtigten Interesses von Google an der Einblendung
                    personalisierter Werbung, Marktforschung und/oder der
                    bedarfsgerechten Gestaltung von Google-Websites. Ihnen steht
                    ein Widerspruchsrecht gegen die Bildung dieser Nutzerprofile
                    zu, wobei Sie sich f&uuml;r dessen Aus&uuml;bung an Google
                    wenden m&uuml;ssen. Wenn Sie mit der k&uuml;nftigen
                    &Uuml;bermittlung Ihrer Daten an Google im Rahmen der
                    Nutzung von Google Maps nicht einverstanden sind, besteht
                    auch die M&ouml;glichkeit, den Webdienst von Google Maps
                    vollst&auml;ndig zu deaktivieren, indem Sie die Anwendung
                    JavaScript in Ihrem Browser ausschalten. Google Maps und
                    damit auch die Kartenanzeige auf dieser Internetseite kann
                    dann nicht genutzt werden.
                  </p>

                  <p>
                    Soweit rechtlich erforderlich, haben wir zur vorstehend
                    dargestellten Verarbeitung Ihrer Daten Ihre Einwilligung
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO eingeholt. Sie
                    k&ouml;nnen Ihre erteilte Einwilligung jederzeit mit Wirkung
                    f&uuml;r die Zukunft widerrufen. Um Ihren Widerruf
                    auszu&uuml;ben, befolgen Sie bitte die vorstehend
                    geschilderte M&ouml;glichkeit zur Vornahme eines
                    Widerspruchs.
                  </p>

                  <h2>11) Rechte des Betroffenen</h2>

                  <p>
                    <b>11.1</b>&nbsp;Das geltende Datenschutzrecht gew&auml;hrt
                    Ihnen gegen&uuml;ber dem Verantwortlichen hinsichtlich der
                    Verarbeitung Ihrer personenbezogenen Daten die nachstehenden
                    Betroffenenrechte (Auskunfts- und Interventionsrechte),
                    wobei f&uuml;r die jeweiligen Aus&uuml;bungsvoraussetzungen
                    auf die angef&uuml;hrte Rechtsgrundlage verwiesen wird:
                  </p>

                  <ul>
                    <li>Auskunftsrecht gem&auml;&szlig; Art. 15 DSGVO;</li>
                    <li>
                      Recht auf Berichtigung gem&auml;&szlig; Art. 16 DSGVO;
                    </li>
                    <li>
                      Recht auf L&ouml;schung gem&auml;&szlig; Art. 17 DSGVO;
                    </li>
                    <li>
                      Recht auf Einschr&auml;nkung der Verarbeitung
                      gem&auml;&szlig; Art. 18 DSGVO;
                    </li>
                    <li>
                      Recht auf Unterrichtung gem&auml;&szlig; Art. 19 DSGVO;
                    </li>
                    <li>
                      Recht auf Daten&uuml;bertragbarkeit gem&auml;&szlig; Art.
                      20 DSGVO;
                    </li>
                    <li>
                      Recht auf Widerruf erteilter Einwilligungen
                      gem&auml;&szlig; Art. 7 Abs. 3 DSGVO;
                    </li>
                    <li>
                      Recht auf Beschwerde gem&auml;&szlig; Art. 77 DSGVO.
                    </li>
                  </ul>

                  <p>
                    <b>11.2</b>&nbsp;WIDERSPRUCHSRECHT
                  </p>

                  <p>
                    WENN WIR IM RAHMEN EINER INTERESSENABW&Auml;GUNG IHRE
                    PERSONENBEZOGENEN DATEN AUFGRUND UNSERES &Uuml;BERWIEGENDEN
                    BERECHTIGTEN INTERESSES VERARBEITEN, HABEN SIE DAS
                    JEDERZEITIGE RECHT, AUS GR&Uuml;NDEN, DIE SICH AUS IHRER
                    BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG
                    WIDERSPRUCH MIT WIRKUNG F&Uuml;R DIE ZUKUNFT EINZULEGEN.
                  </p>

                  <p>
                    MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR
                    DIE VERARBEITUNG DER BETROFFENEN DATEN. EINE
                    WEITERVERARBEITUNG BLEIBT ABER VORBEHALTEN, WENN WIR
                    ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE
                    VERARBEITUNG NACHWEISEN K&Ouml;NNEN, DIE IHRE INTERESSEN,
                    GRUNDRECHTE UND GRUNDFREIHEITEN &Uuml;BERWIEGEN, ODER WENN
                    DIE VERARBEITUNG DER GELTENDMACHUNG, AUS&Uuml;BUNG ODER
                    VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN DIENT.
                  </p>

                  <p>
                    WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM
                    DIREKTWERBUNG ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT
                    WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                    PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                    EINZULEGEN. SIE K&Ouml;NNEN DEN WIDERSPRUCH WIE OBEN
                    BESCHRIEBEN AUS&Uuml;BEN.
                  </p>

                  <p>
                    MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR
                    DIE VERARBEITUNG DER BETROFFENEN DATEN ZU
                    DIREKTWERBEZWECKEN.
                  </p>

                  <h2>12) Dauer der Speicherung personenbezogener Daten</h2>

                  <p>
                    Die Dauer der Speicherung von personenbezogenen Daten
                    bemisst sich anhand der jeweiligen Rechtsgrundlage, am
                    Verarbeitungszweck und &ndash; sofern einschl&auml;gig
                    &ndash; zus&auml;tzlich anhand der jeweiligen gesetzlichen
                    Aufbewahrungsfrist (z.B. handels- und steuerrechtliche
                    Aufbewahrungsfristen).
                  </p>

                  <p>
                    Bei der Verarbeitung von personenbezogenen Daten auf
                    Grundlage einer ausdr&uuml;cklichen Einwilligung
                    gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO werden die
                    betroffenen Daten so lange gespeichert, bis Sie Ihre
                    Einwilligung widerrufen.
                  </p>

                  <p>
                    Existieren gesetzliche Aufbewahrungsfristen f&uuml;r Daten,
                    die im Rahmen rechtsgesch&auml;ftlicher bzw.
                    rechtsgesch&auml;fts&auml;hnlicher Verpflichtungen auf der
                    Grundlage von Art. 6 Abs. 1 lit. b DSGVO verarbeitet werden,
                    werden diese Daten nach Ablauf der Aufbewahrungsfristen
                    routinem&auml;&szlig;ig gel&ouml;scht, sofern sie nicht mehr
                    zur Vertragserf&uuml;llung oder Vertragsanbahnung
                    erforderlich sind und/oder unsererseits kein berechtigtes
                    Interesse an der Weiterspeicherung fortbesteht.
                  </p>

                  <p>
                    Bei der Verarbeitung von personenbezogenen Daten auf
                    Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese Daten
                    so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach
                    Art. 21 Abs. 1 DSGVO aus&uuml;ben, es sei denn, wir
                    k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde
                    f&uuml;r die Verarbeitung nachweisen, die Ihre Interessen,
                    Rechte und Freiheiten &uuml;berwiegen, oder die Verarbeitung
                    dient der Geltendmachung, Aus&uuml;bung oder Verteidigung
                    von Rechtsanspr&uuml;chen.
                  </p>

                  <p>
                    Bei der Verarbeitung von personenbezogenen Daten zum Zwecke
                    der Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f
                    DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr
                    Widerspruchsrecht nach Art. 21 Abs. 2 DSGVO aus&uuml;ben.
                  </p>

                  <p>
                    Sofern sich aus den sonstigen Informationen dieser
                    Erkl&auml;rung &uuml;ber spezifische
                    Verarbeitungssituationen nichts anderes ergibt, werden
                    gespeicherte personenbezogene Daten im &Uuml;brigen dann
                    gel&ouml;scht, wenn sie f&uuml;r die Zwecke, f&uuml;r die
                    sie erhoben oder auf sonstige Weise verarbeitet wurden,
                    nicht mehr notwendig sind.
                  </p>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={2} className="rounded-md md:container ">
        <button
          onClick={() => toggleExpand(2)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            AGB & KUNDENINFO
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 2 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 2 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 2 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-[40vw] w-full object-cover md:h-[380px]">
                <Image
                  src={'/images/info/Agb.jpg'}
                  alt="AGB"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="flex flex-col justify-center overflow-auto">
                <p>
                  <h1>
                    Allgemeine Gesch&auml;ftsbedingungen mit Kundeninformationen
                  </h1>
                  <h2>Inhaltsverzeichnis</h2>
                  <ol>
                    <li>Geltungsbereich</li>
                    <li>Vertragsschluss</li>
                    <li>Widerrufsrecht</li>
                    <li>Preise und Zahlungsbedingungen</li>
                    <li>Liefer- und Versandbedingungen</li>
                    <li>
                      Vertragsdauer und Vertragsbeendigung bei
                      Abonnementvertr&auml;gen
                    </li>
                    <li>Eigentumsvorbehalt</li>
                    <li>M&auml;ngelhaftung (Gew&auml;hrleistung)</li>
                    <li>
                      Besondere Bedingungen f&uuml;r die Verarbeitung von Waren
                      nach bestimmten Vorgaben des Kunden
                    </li>
                    <li>
                      Besondere Bedingungen f&uuml;r Montage-/Einbauleistungen
                    </li>
                    <li>Besondere Bedingungen f&uuml;r Reparaturleistungen</li>
                    <li>Einl&ouml;sung von Aktionsgutscheinen</li>
                    <li>Einl&ouml;sung von Geschenkgutscheinen</li>
                    <li>Anwendbares Recht</li>
                    <li>Verhaltenskodex</li>
                    <li>Alternative Streitbeilegung</li>
                  </ol>
                  <h2>1) Geltungsbereich</h2>
                  <p>
                    <b>1.1</b>&nbsp;Diese Allgemeinen Gesch&auml;ftsbedingungen
                    (nachfolgend &quot;AGB&quot;) des Bj&ouml;rn Seibert,
                    handelnd unter &quot;BE-SCooTER&reg; ...FUNsport
                    erFAHREN!&quot; (nachfolgend &quot;Verk&auml;ufer&quot;),
                    gelten f&uuml;r alle Vertr&auml;ge zur Lieferung von Waren,
                    die ein Verbraucher oder Unternehmer (nachfolgend
                    &bdquo;Kunde&#8220;) mit dem Verk&auml;ufer hinsichtlich der
                    vom Verk&auml;ufer in seinem Online-Shop dargestellten Waren
                    abschlie&szlig;t. Hiermit wird der Einbeziehung von eigenen
                    Bedingungen des Kunden widersprochen, es sei denn, es ist
                    etwas anderes vereinbart.
                  </p>
                  <p>
                    <b>1.2</b>&nbsp;F&uuml;r Vertr&auml;ge zur Lieferung von
                    Gutscheinen gelten diese AGB entsprechend, sofern insoweit
                    nicht etwas Abweichendes geregelt ist.
                  </p>
                  <p>
                    <b>1.3</b>&nbsp;F&uuml;r Vertr&auml;ge zur Lieferung von
                    Tickets gelten diese AGB entsprechend, sofern insoweit nicht
                    ausdr&uuml;cklich etwas Abweichendes geregelt ist. Dabei
                    regeln diese AGB lediglich den Verkauf von Tickets f&uuml;r
                    bestimmte, in der Artikelbeschreibung des Verk&auml;ufers
                    n&auml;her bezeichnete Veranstaltungen und nicht die
                    Durchf&uuml;hrung dieser Veranstaltungen. F&uuml;r die
                    Durchf&uuml;hrung der Veranstaltungen gelten
                    ausschlie&szlig;lich die gesetzlichen Bestimmungen im
                    Verh&auml;ltnis zwischen dem Teilnehmer und dem Veranstalter
                    sowie ggf. hiervon abweichende Bedingungen des
                    Veranstalters. Sofern der Verk&auml;ufer nicht zugleich auch
                    Veranstalter ist, haftet er nicht f&uuml;r die
                    ordnungsgem&auml;&szlig;e Durchf&uuml;hrung der
                    Veranstaltung, f&uuml;r die ausschlie&szlig;lich der
                    jeweilige Veranstalter verantwortlich ist.
                  </p>
                  <p>
                    <b>1.4</b>&nbsp;Verbraucher im Sinne dieser AGB ist jede
                    nat&uuml;rliche Person, die ein Rechtsgesch&auml;ft zu
                    Zwecken abschlie&szlig;t, die &uuml;berwiegend weder ihrer
                    gewerblichen noch ihrer selbst&auml;ndigen beruflichen
                    T&auml;tigkeit zugerechnet werden k&ouml;nnen.
                  </p>
                  <p>
                    <b>1.5</b>&nbsp;Unternehmer im Sinne dieser AGB ist eine
                    nat&uuml;rliche oder juristische Person oder eine
                    rechtsf&auml;hige Personengesellschaft, die bei Abschluss
                    eines Rechtsgesch&auml;fts in Aus&uuml;bung ihrer
                    gewerblichen oder selbst&auml;ndigen beruflichen
                    T&auml;tigkeit handelt.
                  </p>
                  <p>
                    <b>1.6</b>&nbsp;Gegenstand des Vertrages kann &ndash; je
                    nach Produktbeschreibung des Verk&auml;ufers - sowohl der
                    Bezug von Waren im Wege einer Einmallieferung als auch der
                    Bezug von Waren im Wege einer dauerhaften Lieferung
                    (nachfolgend &bdquo;Abonnementvertrag&#8220;) sein. Beim
                    Abonnementvertrag verpflichtet sich der Verk&auml;ufer, dem
                    Kunden die vertraglich geschuldete Ware f&uuml;r die Dauer
                    der vereinbarten Vertragslaufzeit in den vertraglich
                    geschuldeten Zeitintervallen zu liefern.
                  </p>
                  <h2>2) Vertragsschluss</h2>
                  <p>
                    <b>2.1</b>&nbsp;Die im Online-Shop des Verk&auml;ufers
                    enthaltenen Produktbeschreibungen stellen keine
                    verbindlichen Angebote seitens des Verk&auml;ufers dar,
                    sondern dienen zur Abgabe eines verbindlichen Angebots durch
                    den Kunden.
                  </p>
                  <p>
                    <b>2.2</b>&nbsp;Der Kunde kann das Angebot &uuml;ber das in
                    den Online-Shop des Verk&auml;ufers integrierte
                    Online-Bestellformular abgeben. Dabei gibt der Kunde,
                    nachdem er die ausgew&auml;hlten Waren in den virtuellen
                    Warenkorb gelegt und den elektronischen Bestellprozess
                    durchlaufen hat, durch Klicken des den Bestellvorgang
                    abschlie&szlig;enden Buttons ein rechtlich verbindliches
                    Vertragsangebot in Bezug auf die im Warenkorb enthaltenen
                    Waren ab. Ferner kann der Kunde das Angebot auch per E-Mail,
                    postalisch oder telefonisch gegen&uuml;ber dem
                    Verk&auml;ufer abgeben.
                  </p>
                  <p>
                    <b>2.3</b>&nbsp;Der Verk&auml;ufer kann das Angebot des
                    Kunden innerhalb von f&uuml;nf Tagen annehmen,
                  </p>
                  <ul>
                    <li>
                      indem er dem Kunden eine schriftliche
                      Auftragsbest&auml;tigung oder eine
                      Auftragsbest&auml;tigung in Textform (Fax oder E-Mail)
                      &uuml;bermittelt, wobei insoweit der Zugang der
                      Auftragsbest&auml;tigung beim Kunden ma&szlig;geblich ist,
                      oder
                    </li>
                    <li>
                      indem er dem Kunden die bestellte Ware liefert, wobei
                      insoweit der Zugang der Ware beim Kunden ma&szlig;geblich
                      ist, oder
                    </li>
                    <li>
                      indem er den Kunden nach Abgabe von dessen Bestellung zur
                      Zahlung auffordert.
                    </li>
                  </ul>
                  <p>
                    Liegen mehrere der vorgenannten Alternativen vor, kommt der
                    Vertrag in dem Zeitpunkt zustande, in dem eine der
                    vorgenannten Alternativen zuerst eintritt. Die Frist zur
                    Annahme des Angebots beginnt am Tag nach der Absendung des
                    Angebots durch den Kunden zu laufen und endet mit dem Ablauf
                    des f&uuml;nften Tages, welcher auf die Absendung des
                    Angebots folgt. Nimmt der Verk&auml;ufer das Angebot des
                    Kunden innerhalb vorgenannter Frist nicht an, so gilt dies
                    als Ablehnung des Angebots mit der Folge, dass der Kunde
                    nicht mehr an seine Willenserkl&auml;rung gebunden ist.
                  </p>
                  <p>
                    <b>2.4</b>&nbsp;Bei Auswahl einer von PayPal angebotenen
                    Zahlungsart erfolgt die Zahlungsabwicklung &uuml;ber den
                    Zahlungsdienstleister PayPal (Europe) S.&agrave; r.l. et
                    Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg (im
                    Folgenden: &bdquo;PayPal&#8220;), unter Geltung der
                    PayPal-Nutzungsbedingungen, einsehbar unter{' '}
                    <a
                      href="https://www.paypal.com/de/webapps/mpp/ua/useragreement-full"
                      rel="noreferrer"
                    >
                      https://www.paypal.com /de /webapps /mpp /ua
                      /useragreement-full
                    </a>{' '}
                    oder - falls der Kunde nicht &uuml;ber ein PayPal-Konto
                    verf&uuml;gt &ndash; unter Geltung der Bedingungen f&uuml;r
                    Zahlungen ohne PayPal-Konto, einsehbar unter{' '}
                    <a
                      href="https://www.paypal.com/de/webapps/mpp/ua/privacywax-full"
                      rel="noreferrer"
                    >
                      https://www.paypal.com /de /webapps /mpp /ua
                      /privacywax-full
                    </a>
                    . Zahlt der Kunde mittels einer im Online-Bestellvorgang
                    ausw&auml;hlbaren von PayPal angebotenen Zahlungsart,
                    erkl&auml;rt der Verk&auml;ufer schon jetzt die Annahme des
                    Angebots des Kunden in dem Zeitpunkt, in dem der Kunde den
                    Button anklickt, welcher den Bestellvorgang
                    abschlie&szlig;t.
                  </p>
                  <p>
                    <b>2.5</b>&nbsp;Bei Auswahl der Zahlungsart &quot;Amazon
                    Payments&quot; erfolgt die Zahlungsabwicklung &uuml;ber den
                    Zahlungsdienstleister Amazon Payments Europe s.c.a., 38
                    avenue John F. Kennedy, L-1855 Luxemburg (im Folgenden:
                    &bdquo;Amazon&#8220;), unter Geltung der Amazon Payments
                    Europe Nutzungsvereinbarung, einsehbar unter{' '}
                    <a
                      href="https://payments.amazon.de/help/201751590"
                      rel="noreferrer"
                    >
                      https://payments.amazon.de /help /201751590
                    </a>
                    . W&auml;hlt der Kunde im Rahmen des Online-Bestellvorgangs
                    &bdquo;Amazon Payments&#8220; als Zahlungsart aus, erteilt
                    er durch Klicken des den Bestellvorgang abschlie&szlig;enden
                    Buttons zugleich auch einen Zahlungsauftrag an Amazon.
                    F&uuml;r diesen Fall erkl&auml;rt der Verk&auml;ufer schon
                    jetzt die Annahme des Angebots des Kunden in dem Zeitpunkt,
                    in dem der Kunde durch Klicken des den Bestellvorgang
                    abschlie&szlig;enden Buttons den Zahlungsvorgang
                    ausl&ouml;st.
                  </p>
                  <p>
                    <b>2.6</b>&nbsp;Bei der Abgabe eines Angebots &uuml;ber das
                    Online-Bestellformular des Verk&auml;ufers wird der
                    Vertragstext nach dem Vertragsschluss vom Verk&auml;ufer
                    gespeichert und dem Kunden nach Absendung von dessen
                    Bestellung in Textform (z. B. E-Mail, Fax oder Brief)
                    &uuml;bermittelt. Eine dar&uuml;ber hinausgehende
                    Zug&auml;nglichmachung des Vertragstextes durch den
                    Verk&auml;ufer erfolgt nicht. Sofern der Kunde vor Absendung
                    seiner Bestellung ein Nutzerkonto im Online-Shop des
                    Verk&auml;ufers eingerichtet hat, werden die Bestelldaten
                    auf der Website des Verk&auml;ufers archiviert und
                    k&ouml;nnen vom Kunden &uuml;ber dessen
                    passwortgesch&uuml;tztes Nutzerkonto unter Angabe der
                    entsprechenden Login-Daten kostenlos abgerufen werden.
                  </p>
                  <p>
                    <b>2.7</b>&nbsp;Vor verbindlicher Abgabe der Bestellung
                    &uuml;ber das Online-Bestellformular des Verk&auml;ufers
                    kann der Kunde m&ouml;gliche Eingabefehler durch
                    aufmerksames Lesen der auf dem Bildschirm dargestellten
                    Informationen erkennen. Ein wirksames technisches Mittel zur
                    besseren Erkennung von Eingabefehlern kann dabei die
                    Vergr&ouml;&szlig;erungsfunktion des Browsers sein, mit
                    deren Hilfe die Darstellung auf dem Bildschirm
                    vergr&ouml;&szlig;ert wird. Seine Eingaben kann der Kunde im
                    Rahmen des elektronischen Bestellprozesses so lange
                    &uuml;ber die &uuml;blichen Tastatur- und Mausfunktionen
                    korrigieren, bis er den Button anklickt, welcher den
                    Bestellvorgang abschlie&szlig;t.
                  </p>
                  <p>
                    <b>2.8</b>&nbsp;F&uuml;r den Vertragsschluss stehen die
                    deutsche und die englische Sprache zur Verf&uuml;gung.
                  </p>
                  <p>
                    <b>2.9</b>&nbsp;Die Bestellabwicklung und Kontaktaufnahme
                    finden in der Regel per E-Mail und automatisierter
                    Bestellabwicklung statt. Der Kunde hat sicherzustellen, dass
                    die von ihm zur Bestellabwicklung angegebene E-Mail-Adresse
                    zutreffend ist, so dass unter dieser Adresse die vom
                    Verk&auml;ufer versandten E-Mails empfangen werden
                    k&ouml;nnen. Insbesondere hat der Kunde bei dem Einsatz von
                    SPAM-Filtern sicherzustellen, dass alle vom Verk&auml;ufer
                    oder von diesem mit der Bestellabwicklung beauftragten
                    Dritten versandten E-Mails zugestellt werden k&ouml;nnen.
                  </p>
                  <h2>3) Widerrufsrecht</h2>
                  <p>
                    <b>3.1</b>&nbsp;Verbrauchern steht grunds&auml;tzlich ein
                    Widerrufsrecht zu.
                  </p>
                  <p>
                    <b>3.2</b>&nbsp;N&auml;here Informationen zum Widerrufsrecht
                    ergeben sich aus der Widerrufsbelehrung des Verk&auml;ufers.
                  </p>
                  <p>
                    <b>3.3</b>&nbsp;Soweit nichts anderes vereinbart ist,
                    besteht ein Widerrufsrecht nicht bei Vertr&auml;gen zur
                    Erbringung von Dienstleistungen im Zusammenhang mit
                    Freizeitbet&auml;tigungen, wenn der Vertrag f&uuml;r die
                    Erbringung einen spezifischen Termin oder Zeitraum vorsieht.
                    Danach ist ein Widerrufsrecht auch bei Vertr&auml;gen
                    ausgeschlossen, die den Verkauf von Tickets f&uuml;r
                    termingebundene Freizeitveranstaltungen zum Gegenstand
                    haben.
                  </p>
                  <h2>4) Preise und Zahlungsbedingungen</h2>
                  <p>
                    <b>4.1</b>&nbsp;Sofern sich aus der Produktbeschreibung des
                    Verk&auml;ufers nichts anderes ergibt, handelt es sich bei
                    den angegebenen Preisen um Gesamtpreise, die die gesetzliche
                    Umsatzsteuer enthalten. Gegebenenfalls zus&auml;tzlich
                    anfallende Liefer- und Versandkosten werden in der
                    jeweiligen Produktbeschreibung gesondert angegeben.
                  </p>
                  <p>
                    <b>4.2</b>&nbsp;Die Zahlungsm&ouml;glichkeit/en wird/werden
                    dem Kunden im Online-Shop des Verk&auml;ufers mitgeteilt.
                  </p>
                  <p>
                    <b>4.3</b>&nbsp;Ist Vorauskasse per Bank&uuml;berweisung
                    vereinbart, ist die Zahlung sofort nach Vertragsabschluss
                    f&auml;llig, sofern die Parteien keinen sp&auml;teren
                    F&auml;lligkeitstermin vereinbart haben.
                  </p>
                  <p>
                    <b>4.4</b>&nbsp;Bei Auswahl einer &uuml;ber den
                    Zahlungsdienst &bdquo;PayPal&#8220; angebotenen Zahlungsart
                    erfolgt die Zahlungsabwicklung &uuml;ber PayPal, wobei sich
                    PayPal hierzu auch der Dienste dritter Zahlungsdienstleister
                    bedienen kann. Sofern der Verk&auml;ufer &uuml;ber PayPal
                    auch Zahlungsarten anbietet, bei denen er gegen&uuml;ber dem
                    Kunden in Vorleistung geht (z. B. Rechnungskauf oder
                    Ratenzahlung), tritt er seine Zahlungsforderung insoweit an
                    PayPal bzw. an den von PayPal beauftragten und dem Kunden
                    konkret benannten Zahlungsdienstleister ab. Vor Annahme der
                    Abtretungserkl&auml;rung des Verk&auml;ufers f&uuml;hrt
                    PayPal bzw. der von PayPal beauftragte Zahlungsdienstleister
                    unter Verwendung der &uuml;bermittelten Kundendaten eine
                    Bonit&auml;tspr&uuml;fung durch. Der Verk&auml;ufer
                    beh&auml;lt sich vor, dem Kunden die ausgew&auml;hlte
                    Zahlungsart im Falle eines negativen
                    Pr&uuml;fungsergebnisses zu verweigern. Bei Zulassung der
                    ausgew&auml;hlten Zahlungsart hat der Kunde den
                    Rechnungsbetrag innerhalb der vereinbarten Zahlungsfrist
                    bzw. in den vereinbarten Zahlungsintervallen zu bezahlen. Er
                    kann in diesem Fall nur an PayPal bzw. den von PayPal
                    beauftragten Zahlungsdienstleister mit schuldbefreiender
                    Wirkung leisten. Der Verk&auml;ufer bleibt jedoch auch im
                    Falle der Forderungsabtretung zust&auml;ndig f&uuml;r
                    allgemeine Kundenanfragen z. B. zur Ware, Lieferzeit,
                    Versendung, Retouren, Reklamationen,
                    Widerrufserkl&auml;rungen und -zusendungen oder
                    Gutschriften.
                  </p>
                  <p>
                    <b>4.5</b>&nbsp;Bei Auswahl der Zahlungsart
                    &bdquo;SOFORT&#8220; erfolgt die Zahlungsabwicklung
                    &uuml;ber den Zahlungsdienstleister SOFORT GmbH,
                    Theresienh&ouml;he 12, 80339 M&uuml;nchen (im Folgenden
                    &bdquo;SOFORT&#8220;). Um den Rechnungsbetrag &uuml;ber
                    &bdquo;SOFORT&#8220; bezahlen zu k&ouml;nnen, muss der Kunde
                    &uuml;ber ein f&uuml;r die Teilnahme an &bdquo;SOFORT&#8220;
                    frei geschaltetes Online-Banking-Konto verf&uuml;gen, sich
                    beim Zahlungsvorgang entsprechend legitimieren und die
                    Zahlungsanweisung gegen&uuml;ber &bdquo;SOFORT&#8220;
                    best&auml;tigen. Die Zahlungstransaktion wird unmittelbar
                    danach von &bdquo;SOFORT&#8220; durchgef&uuml;hrt und das
                    Bankkonto des Kunden belastet. N&auml;here Informationen zur
                    Zahlungsart &bdquo;SOFORT&#8220; kann der Kunde im Internet
                    unter{' '}
                    <a href="https://www.klarna.com/sofort/" rel="noreferrer">
                      https://www.klarna.com /sofort /
                    </a>{' '}
                    abrufen.
                  </p>
                  <p>
                    <b>4.6</b>&nbsp;Bei Auswahl einer &uuml;ber den
                    Zahlungsdienst &quot;Shopify Payments&quot; angebotenen
                    Zahlungsart erfolgt die Zahlungsabwicklung &uuml;ber den
                    Zahlungsdienstleister Stripe Payments Europe Ltd., 1 Grand
                    Canal Street Lower, Grand Canal Dock, Dublin, Irland
                    (nachfolgend &quot;Stripe&quot;). Die einzelnen &uuml;ber
                    Shopify Payments angebotenen Zahlungsarten werden dem Kunden
                    im Online-Shop des Verk&auml;ufers mitgeteilt. Zur
                    Abwicklung von Zahlungen kann sich Stripe weiterer
                    Zahlungsdienste bedienen, f&uuml;r die ggf. besondere
                    Zahlungsbedingungen gelten, auf die der Kunde ggf. gesondert
                    hingewiesen wird. Weitere Informationen zu &quot;Shopify
                    Payments&quot; sind im Internet unter{' '}
                    <a
                      href="https://www.shopify.com/legal/terms-payments-de"
                      rel="noreferrer"
                    >
                      https://www.shopify.com /legal /terms-payments-de
                    </a>{' '}
                    abrufbar.
                  </p>
                  <h2>5) Liefer- und Versandbedingungen</h2>
                  <p>
                    <b>5.1</b>&nbsp;Bietet der Verk&auml;ufer den Versand der
                    Ware an, so erfolgt die Lieferung innerhalb des vom
                    Verk&auml;ufer angegebenen Liefergebietes an die vom Kunden
                    angegebene Lieferanschrift, sofern nichts anderes vereinbart
                    ist. Bei der Abwicklung der Transaktion ist die in der
                    Bestellabwicklung des Verk&auml;ufers angegebene
                    Lieferanschrift ma&szlig;geblich.
                  </p>
                  <p>
                    <b>5.2</b>&nbsp;Bei Waren, die per Spedition geliefert
                    werden, erfolgt die Lieferung &quot;frei
                    Bordsteinkante&quot;, also bis zu der der Lieferadresse
                    n&auml;chstgelegenen &ouml;ffentlichen Bordsteinkante,
                    sofern sich aus den Versandinformationen im Online-Shop des
                    Verk&auml;ufers nichts anderes ergibt und sofern nichts
                    anderes vereinbart ist.
                  </p>
                  <p>
                    <b>5.3</b>&nbsp;Scheitert die Zustellung der Ware aus
                    Gr&uuml;nden, die der Kunde zu vertreten hat, tr&auml;gt der
                    Kunde die dem Verk&auml;ufer hierdurch entstehenden
                    angemessenen Kosten. Dies gilt im Hinblick auf die Kosten
                    f&uuml;r die Hinsendung nicht, wenn der Kunde sein
                    Widerrufsrecht wirksam aus&uuml;bt. F&uuml;r die
                    R&uuml;cksendekosten gilt bei wirksamer Aus&uuml;bung des
                    Widerrufsrechts durch den Kunden die in der
                    Widerrufsbelehrung des Verk&auml;ufers hierzu getroffene
                    Regelung.
                  </p>
                  <p>
                    <b>5.4</b>&nbsp;Handelt der Kunde als Unternehmer, geht die
                    Gefahr des zuf&auml;lligen Untergangs und der
                    zuf&auml;lligen Verschlechterung der verkauften Ware auf den
                    Kunden &uuml;ber, sobald der Verk&auml;ufer die Sache dem
                    Spediteur, dem Frachtf&uuml;hrer oder der sonst zur
                    Ausf&uuml;hrung der Versendung bestimmten Person oder
                    Anstalt ausgeliefert hat. Handelt der Kunde als Verbraucher,
                    geht die Gefahr des zuf&auml;lligen Untergangs und der
                    zuf&auml;lligen Verschlechterung der verkauften Ware
                    grunds&auml;tzlich erst mit &Uuml;bergabe der Ware an den
                    Kunden oder eine empfangsberechtigte Person &uuml;ber.
                    Abweichend hiervon geht die Gefahr des zuf&auml;lligen
                    Untergangs und der zuf&auml;lligen Verschlechterung der
                    verkauften Ware auch bei Verbrauchern bereits auf den Kunden
                    &uuml;ber, sobald der Verk&auml;ufer die Sache dem
                    Spediteur, dem Frachtf&uuml;hrer oder der sonst zur
                    Ausf&uuml;hrung der Versendung bestimmten Person oder
                    Anstalt ausgeliefert hat, wenn der Kunde den Spediteur, den
                    Frachtf&uuml;hrer oder die sonst zur Ausf&uuml;hrung der
                    Versendung bestimmte Person oder Anstalt mit der
                    Ausf&uuml;hrung beauftragt und der Verk&auml;ufer dem Kunden
                    diese Person oder Anstalt zuvor nicht benannt hat.
                  </p>
                  <p>
                    <b>5.5</b>&nbsp;Der Verk&auml;ufer beh&auml;lt sich das
                    Recht vor, im Falle nicht richtiger oder nicht
                    ordnungsgem&auml;&szlig;er Selbstbelieferung vom Vertrag
                    zur&uuml;ckzutreten. Dies gilt nur f&uuml;r den Fall, dass
                    die Nichtlieferung nicht vom Verk&auml;ufer zu vertreten ist
                    und dieser mit der gebotenen Sorgfalt ein konkretes
                    Deckungsgesch&auml;ft mit dem Zulieferer abgeschlossen hat.
                    Der Verk&auml;ufer wird alle zumutbaren Anstrengungen
                    unternehmen, um die Ware zu beschaffen. Im Falle der
                    Nichtverf&uuml;gbarkeit oder der nur teilweisen
                    Verf&uuml;gbarkeit der Ware wird der Kunde unverz&uuml;glich
                    informiert und die Gegenleistung unverz&uuml;glich
                    erstattet.
                  </p>
                  <p>
                    <b>5.6</b>&nbsp;Bietet der Verk&auml;ufer die Ware zur
                    Abholung an, so kann der Kunde die bestellte Ware innerhalb
                    der vom Verk&auml;ufer angegebenen Gesch&auml;ftszeiten
                    unter der vom Verk&auml;ufer angegebenen Adresse abholen. In
                    diesem Fall werden keine Versandkosten berechnet.
                  </p>
                  <p>
                    <b>5.7</b>&nbsp;Gutscheine werden dem Kunden wie folgt
                    bereitgestellt:
                  </p>
                  <ul>
                    <li>per E-Mail</li>
                    <li>postalisch</li>
                  </ul>
                  <p>
                    <b>5.8</b>&nbsp;Tickets werden dem Kunden wie folgt
                    bereitgestellt:
                  </p>
                  <ul>
                    <li>per E-Mail</li>
                    <li>postalisch</li>
                  </ul>
                  <h2>
                    6) Vertragsdauer und Vertragsbeendigung bei
                    Abonnementvertr&auml;gen
                  </h2>
                  <p>
                    <b>6.1</b>&nbsp;Abonnementvertr&auml;ge werden unbefristet
                    geschlossen und k&ouml;nnen vom Kunden zum Ende eines jeden
                    Monats gek&uuml;ndigt werden.
                  </p>
                  <p>
                    <b>6.2</b>&nbsp;Das Recht zur au&szlig;erordentlichen
                    K&uuml;ndigung aus wichtigem Grund bleibt unber&uuml;hrt.
                    Ein wichtiger Grund liegt vor, wenn dem k&uuml;ndigenden
                    Teil unter Ber&uuml;cksichtigung aller Umst&auml;nde des
                    Einzelfalls und unter Abw&auml;gung der beiderseitigen
                    Interessen die Fortsetzung des Vertragsverh&auml;ltnisses
                    bis zur vereinbarten Beendigung oder bis zum Ablauf einer
                    K&uuml;ndigungsfrist nicht zugemutet werden kann.
                  </p>
                  <p>
                    <b>6.3</b>&nbsp;K&uuml;ndigungen haben schriftlich oder in
                    Textform (z. B. per E-Mail) zu erfolgen.
                  </p>
                  <h2>7) Eigentumsvorbehalt</h2>
                  <p>
                    Tritt der Verk&auml;ufer in Vorleistung, beh&auml;lt er sich
                    bis zur vollst&auml;ndigen Bezahlung des geschuldeten
                    Kaufpreises das Eigentum an der gelieferten Ware vor.
                  </p>
                  <h2>8) M&auml;ngelhaftung (Gew&auml;hrleistung)</h2>
                  <p>
                    <b>8.1</b>&nbsp;Soweit sich aus den nachfolgenden Regelungen
                    nichts anderes ergibt, gelten die Vorschriften der
                    gesetzlichen M&auml;ngelhaftung. Hiervon abweichend gilt bei
                    Vertr&auml;gen zur Lieferung von Waren:
                  </p>
                  <p>
                    <b>8.2</b>&nbsp;Handelt der Kunde als Unternehmer,
                  </p>
                  <ul>
                    <li>
                      hat der Verk&auml;ufer die Wahl der Art der
                      Nacherf&uuml;llung;
                    </li>
                    <li>
                      betr&auml;gt bei neuen Waren die Verj&auml;hrungsfrist
                      f&uuml;r M&auml;ngel ein Jahr ab Ablieferung der Ware;
                    </li>
                    <li>
                      sind bei gebrauchten Waren die Rechte und Anspr&uuml;che
                      wegen M&auml;ngeln ausgeschlossen;
                    </li>
                    <li>
                      beginnt die Verj&auml;hrung nicht erneut, wenn im Rahmen
                      der M&auml;ngelhaftung eine Ersatzlieferung erfolgt.
                    </li>
                  </ul>
                  <p>
                    <b>8.3</b>&nbsp;Handelt der Kunde als Verbraucher gilt bei
                    Vertr&auml;gen zur Lieferung gebrauchter Waren mit der
                    Einschr&auml;nkung der nachfolgenden Ziffer: Die
                    Verj&auml;hrungsfrist f&uuml;r M&auml;ngelanspr&uuml;che
                    betr&auml;gt ein Jahr ab Ablieferung der Ware, wenn dies
                    zwischen den Parteien ausdr&uuml;cklich und gesondert
                    vertraglich vereinbart wurde und der Kunde vor der Abgabe
                    seiner Vertragserkl&auml;rung von der Verk&uuml;rzung der
                    Verj&auml;hrungsfrist eigens in Kenntnis gesetzt wurde.
                  </p>
                  <p>
                    <b>8.4</b>&nbsp;Die vorstehend geregelten
                    Haftungsbeschr&auml;nkungen und Fristverk&uuml;rzungen
                    gelten nicht
                  </p>
                  <ul>
                    <li>
                      f&uuml;r Schadensersatz- und
                      Aufwendungsersatzanspr&uuml;che des Kunden,
                    </li>
                    <li>
                      f&uuml;r den Fall, dass der Verk&auml;ufer den Mangel
                      arglistig verschwiegen hat,
                    </li>
                    <li>
                      f&uuml;r Waren, die entsprechend ihrer &uuml;blichen
                      Verwendungsweise f&uuml;r ein Bauwerk verwendet worden
                      sind und dessen Mangelhaftigkeit verursacht haben,
                    </li>
                    <li>
                      f&uuml;r eine ggf. bestehende Verpflichtung des
                      Verk&auml;ufers zur Bereitstellung von Aktualisierungen
                      f&uuml;r digitale Produkte, bei Vertr&auml;gen zur
                      Lieferung von Waren mit digitalen Elementen.
                    </li>
                  </ul>
                  <p>
                    <b>8.5</b>&nbsp;Dar&uuml;ber hinaus gilt f&uuml;r
                    Unternehmer, dass die gesetzlichen Verj&auml;hrungsfristen
                    f&uuml;r einen ggf. bestehenden gesetzlichen
                    R&uuml;ckgriffsanspruch unber&uuml;hrt bleiben.
                  </p>
                  <p>
                    <b>8.6</b>&nbsp;Handelt der Kunde als Kaufmann i.S.d. &sect;
                    1 HGB, trifft ihn die kaufm&auml;nnische Untersuchungs- und
                    R&uuml;gepflicht gem&auml;&szlig; &sect; 377 HGB.
                    Unterl&auml;sst der Kunde die dort geregelten
                    Anzeigepflichten, gilt die Ware als genehmigt.
                  </p>
                  <p>
                    <b>8.7</b>&nbsp;Handelt der Kunde als Verbraucher, so wird
                    er gebeten, angelieferte Waren mit offensichtlichen
                    Transportsch&auml;den bei dem Zusteller zu reklamieren und
                    den Verk&auml;ufer hiervon in Kenntnis zu setzen. Kommt der
                    Kunde dem nicht nach, hat dies keinerlei Auswirkungen auf
                    seine gesetzlichen oder vertraglichen
                    M&auml;ngelanspr&uuml;che.
                  </p>
                  <h2>
                    9) Besondere Bedingungen f&uuml;r die Verarbeitung von Waren
                    nach bestimmten Vorgaben des Kunden
                  </h2>
                  <p>
                    <b>9.1</b>&nbsp;Schuldet der Verk&auml;ufer nach dem Inhalt
                    des Vertrages neben der Warenlieferung auch die Verarbeitung
                    der Ware nach bestimmten Vorgaben des Kunden, hat der Kunde
                    dem Verk&auml;ufer alle f&uuml;r die Verarbeitung
                    erforderlichen Inhalte wie Texte, Bilder oder Grafiken in
                    den vom Verk&auml;ufer vorgegebenen Dateiformaten,
                    Formatierungen, Bild- und Dateigr&ouml;&szlig;en zur
                    Verf&uuml;gung zu stellen und ihm die hierf&uuml;r
                    erforderlichen Nutzungsrechte einzur&auml;umen. F&uuml;r die
                    Beschaffung und den Rechteerwerb an diesen Inhalten ist
                    allein der Kunde verantwortlich. Der Kunde erkl&auml;rt und
                    &uuml;bernimmt die Verantwortung daf&uuml;r, dass er das
                    Recht besitzt, die dem Verk&auml;ufer &uuml;berlassenen
                    Inhalte zu nutzen. Er tr&auml;gt insbesondere daf&uuml;r
                    Sorge, dass hierdurch keine Rechte Dritter verletzt werden,
                    insbesondere Urheber-, Marken- und
                    Pers&ouml;nlichkeitsrechte.
                  </p>
                  <p>
                    <b>9.2</b>&nbsp;Der Kunde stellt den Verk&auml;ufer von
                    Anspr&uuml;chen Dritter frei, die diese im Zusammenhang mit
                    einer Verletzung ihrer Rechte durch die
                    vertragsgem&auml;&szlig;e Nutzung der Inhalte des Kunden
                    durch den Verk&auml;ufer diesem gegen&uuml;ber geltend
                    machen k&ouml;nnen. Der Kunde &uuml;bernimmt hierbei auch
                    die notwendigen Kosten der Rechtsverteidigung
                    einschlie&szlig;lich aller Gerichts- und Anwaltskosten in
                    gesetzlicher H&ouml;he. Dies gilt nicht, wenn die
                    Rechtsverletzung vom Kunden nicht zu vertreten ist. Der
                    Kunde ist verpflichtet, dem Verk&auml;ufer im Falle einer
                    Inanspruchnahme durch Dritte unverz&uuml;glich,
                    wahrheitsgem&auml;&szlig; und vollst&auml;ndig alle
                    Informationen zur Verf&uuml;gung zu stellen, die f&uuml;r
                    die Pr&uuml;fung der Anspr&uuml;che und eine Verteidigung
                    erforderlich sind.
                  </p>
                  <p>
                    <b>9.3</b>&nbsp;Der Verk&auml;ufer beh&auml;lt sich vor,
                    Verarbeitungsauftr&auml;ge abzulehnen, wenn die vom Kunden
                    hierf&uuml;r &uuml;berlassenen Inhalte gegen gesetzliche
                    oder beh&ouml;rdliche Verbote oder gegen die guten Sitten
                    versto&szlig;en. Dies gilt insbesondere bei &Uuml;berlassung
                    verfassungsfeindlicher, rassistischer, fremdenfeindlicher,
                    diskriminierender, beleidigender, Jugend gef&auml;hrdender
                    und/oder Gewalt verherrlichender Inhalte.
                  </p>
                  <h2>
                    10) Besondere Bedingungen f&uuml;r Montage-/Einbauleistungen
                  </h2>
                  <p>
                    Schuldet der Verk&auml;ufer nach dem Inhalt des Vertrages
                    neben der Warenlieferung auch die Montage bzw. den Einbau
                    der Ware beim Kunden sowie ggf. entsprechende
                    Vorbereitungsma&szlig;nahmen (z. B. Aufma&szlig;), so gilt
                    hierf&uuml;r Folgendes:
                  </p>
                  <p>
                    <b>10.1</b>&nbsp;Der Verk&auml;ufer erbringt seine
                    Leistungen nach seiner Wahl in eigener Person oder durch
                    qualifiziertes, von ihm ausgew&auml;hltes Personal. Dabei
                    kann sich der Verk&auml;ufer auch der Leistungen Dritter
                    (Subunternehmer) bedienen, die in seinem Auftrag t&auml;tig
                    werden. Sofern sich aus der Leistungsbeschreibung des
                    Verk&auml;ufers nichts anderes ergibt, hat der Kunde keinen
                    Anspruch auf Auswahl einer bestimmten Person zur
                    Durchf&uuml;hrung der gew&uuml;nschten Dienstleistung.
                  </p>
                  <p>
                    <b>10.2</b>&nbsp;Der Kunde hat dem Verk&auml;ufer die
                    f&uuml;r die Erbringung der geschuldeten Dienstleistung
                    erforderlichen Informationen vollst&auml;ndig und
                    wahrheitsgem&auml;&szlig; zur Verf&uuml;gung zu stellen,
                    sofern deren Beschaffung nach dem Inhalt des Vertrages nicht
                    in den Pflichtenkreis des Verk&auml;ufers f&auml;llt.
                  </p>
                  <p>
                    <b>10.3</b>&nbsp;Der Verk&auml;ufer wird sich nach
                    Vertragsschluss mit dem Kunden in Verbindung setzen, um mit
                    diesem einen Termin f&uuml;r die geschuldete Leistung zu
                    vereinbaren. Der Kunde tr&auml;gt daf&uuml;r Sorge, dass der
                    Verk&auml;ufer bzw. das von diesem beauftragte Personal zum
                    vereinbarten Termin Zugang zu den betreffenden Einrichtungen
                    des Kunden hat.
                  </p>
                  <p>
                    <b>10.4</b>&nbsp;Die Gefahr des zuf&auml;lligen Untergangs
                    und der zuf&auml;lligen Verschlechterung der verkauften Ware
                    geht erst mit der Beendigung der Montagearbeiten und der
                    &Uuml;bergabe an den Kunden auf den Kunden &uuml;ber.
                  </p>
                  <h2>
                    11) Besondere Bedingungen f&uuml;r Reparaturleistungen
                  </h2>
                  <p>
                    Schuldet der Verk&auml;ufer nach dem Inhalt des Vertrages
                    die Reparatur einer Sache des Kunden, so gilt hierf&uuml;r
                    Folgendes:
                  </p>
                  <p>
                    <b>11.1</b>&nbsp;Reparaturleistungen werden am Sitz des
                    Verk&auml;ufers erbracht.
                  </p>
                  <p>
                    <b>11.2</b>&nbsp;Der Verk&auml;ufer erbringt seine
                    Leistungen nach seiner Wahl in eigener Person oder durch
                    qualifiziertes, von ihm ausgew&auml;hltes Personal. Dabei
                    kann sich der Verk&auml;ufer auch der Leistungen Dritter
                    (Subunternehmer) bedienen, die in seinem Auftrag t&auml;tig
                    werden. Sofern sich aus der Leistungsbeschreibung des
                    Verk&auml;ufers nichts anderes ergibt, hat der Kunde keinen
                    Anspruch auf Auswahl einer bestimmten Person zur
                    Durchf&uuml;hrung der gew&uuml;nschten Dienstleistung.
                  </p>
                  <p>
                    <b>11.3</b>&nbsp;Der Kunde hat dem Verk&auml;ufer alle
                    f&uuml;r die Reparatur der Sache erforderlichen
                    Informationen zur Verf&uuml;gung zu stellen, sofern deren
                    Beschaffung nach dem Inhalt des Vertrages nicht in den
                    Pflichtenkreis des Verk&auml;ufers f&auml;llt. Insbesondere
                    hat der Kunde dem Verk&auml;ufer eine umfassende
                    Fehlerbeschreibung zu &uuml;bermitteln und ihm
                    s&auml;mtliche Umst&auml;nde mitzuteilen, die
                    urs&auml;chlich f&uuml;r den festgestellten Fehler sein
                    k&ouml;nnen.
                  </p>
                  <p>
                    <b>11.4</b>&nbsp;Sofern nicht anders vereinbart, hat der
                    Kunde die zu reparierende Sache auf eigene Kosten und Gefahr
                    an den Sitz des Verk&auml;ufers zu versenden. Der
                    Verk&auml;ufer empfiehlt dem Kunden hierf&uuml;r den
                    Abschluss einer Transportversicherung. Ferner empfiehlt der
                    Verk&auml;ufer dem Kunden, die Sache in einer geeigneten
                    Transportverpackung zu versenden, um das Risiko von
                    Transportsch&auml;den zu reduzieren und den Inhalt der
                    Verpackung zu verbergen. &Uuml;ber offensichtliche
                    Transportsch&auml;den wird der Verk&auml;ufer den Kunden
                    unverz&uuml;glich informieren, damit dieser seine ggf.
                    gegen&uuml;ber dem Transporteur bestehenden Rechte geltend
                    machen kann.
                  </p>
                  <p>
                    <b>11.5</b>&nbsp;Die R&uuml;cksendung der Sache erfolgt auf
                    Kosten des Kunden. Die Gefahr des zuf&auml;lligen Untergangs
                    und der zuf&auml;lligen Verschlechterung der Sache geht mit
                    der &Uuml;bergabe der Sache an eine geeignete
                    Transportperson am Gesch&auml;ftssitz des Verk&auml;ufers
                    auf den Kunden &uuml;ber. Auf Wunsch des Kunden wird der
                    Verk&auml;ufer f&uuml;r die Sache eine Transportversicherung
                    abschlie&szlig;en.
                  </p>
                  <p>
                    <b>11.6</b>&nbsp;Der Kunde kann die zu reparierende Sache
                    auch selbst an den Sitz des Verk&auml;ufers verbringen und
                    wieder von diesem abholen, wenn sich dies aus der
                    Leistungsbeschreibung des Verk&auml;ufers ergibt oder wenn
                    die Parteien hier&uuml;ber eine entsprechende Vereinbarung
                    getroffen haben. In diesem Fall gelten die vorstehenden
                    Regelungen zur Kosten- und Gefahrtragung bei Versand und
                    R&uuml;ckversand der Sache entsprechend.
                  </p>
                  <p>
                    <b>11.7</b>&nbsp;Die vorgenannten Regelungen
                    beschr&auml;nken nicht die gesetzlichen M&auml;ngelrechte
                    des Kunden im Falle des Kaufs einer Ware vom Verk&auml;ufer.
                  </p>
                  <p>
                    <b>11.8</b>&nbsp;F&uuml;r M&auml;ngel der erbrachten
                    Reparaturleistung haftet der Verk&auml;ufer nach den
                    Vorschriften der gesetzlichen M&auml;ngelhaftung.
                  </p>
                  <h2>12) Einl&ouml;sung von Aktionsgutscheinen</h2>
                  <p>
                    <b>12.1</b>&nbsp;Gutscheine, die vom Verk&auml;ufer im
                    Rahmen von Werbeaktionen mit einer bestimmten
                    G&uuml;ltigkeitsdauer unentgeltlich ausgegeben werden und
                    die vom Kunden nicht k&auml;uflich erworben werden
                    k&ouml;nnen (nachfolgend &quot;Aktionsgutscheine&quot;),
                    k&ouml;nnen nur im Online-Shop des Verk&auml;ufers und nur
                    im angegebenen Zeitraum eingel&ouml;st werden.
                  </p>
                  <p>
                    <b>12.2</b>&nbsp;Einzelne Produkte k&ouml;nnen von der
                    Gutscheinaktion ausgeschlossen sein, sofern sich eine
                    entsprechende Einschr&auml;nkung aus dem Inhalt des
                    Aktionsgutscheins ergibt.
                  </p>
                  <p>
                    <b>12.3</b>&nbsp;Aktionsgutscheine k&ouml;nnen nur vor
                    Abschluss des Bestellvorgangs eingel&ouml;st werden. Eine
                    nachtr&auml;gliche Verrechnung ist nicht m&ouml;glich.
                  </p>
                  <p>
                    <b>12.4</b>&nbsp;Pro Bestellung kann immer nur ein
                    Aktionsgutschein eingel&ouml;st werden.
                  </p>
                  <p>
                    <b>12.5</b>&nbsp;Der Warenwert muss mindestens dem Betrag
                    des Aktionsgutscheins entsprechen. Etwaiges Restguthaben
                    wird vom Verk&auml;ufer nicht erstattet.
                  </p>
                  <p>
                    <b>12.6</b>&nbsp;Reicht der Wert des Aktionsgutscheins zur
                    Deckung der Bestellung nicht aus, kann zur Begleichung des
                    Differenzbetrages eine der &uuml;brigen vom Verk&auml;ufer
                    angebotenen Zahlungsarten gew&auml;hlt werden.
                  </p>
                  <p>
                    <b>12.7</b>&nbsp;Das Guthaben eines Aktionsgutscheins wird
                    weder in Bargeld ausgezahlt noch verzinst.
                  </p>
                  <p>
                    <b>12.8</b>&nbsp;Der Aktionsgutschein wird nicht erstattet,
                    wenn der Kunde die mit dem Aktionsgutschein ganz oder
                    teilweise bezahlte Ware im Rahmen seines gesetzlichen
                    Widerrufsrechts zur&uuml;ckgibt.
                  </p>
                  <p>
                    <b>12.9</b>&nbsp;Der Aktionsgutschein ist &uuml;bertragbar.
                    Der Verk&auml;ufer kann mit befreiender Wirkung an den
                    jeweiligen Inhaber, der den Aktionsgutschein im Online-Shop
                    des Verk&auml;ufers einl&ouml;st, leisten. Dies gilt nicht,
                    wenn der Verk&auml;ufer Kenntnis oder grob fahrl&auml;ssige
                    Unkenntnis von der Nichtberechtigung, der
                    Gesch&auml;ftsunf&auml;higkeit oder der fehlenden
                    Vertretungsberechtigung des jeweiligen Inhabers hat.
                  </p>
                  <h2>13) Einl&ouml;sung von Geschenkgutscheinen</h2>
                  <p>
                    <b>13.1</b>&nbsp;Gutscheine, die &uuml;ber den Online-Shop
                    des Verk&auml;ufers k&auml;uflich erworben werden
                    k&ouml;nnen (nachfolgend &quot;Geschenkgutscheine&quot;),
                    k&ouml;nnen nur im Online-Shop des Verk&auml;ufers
                    eingel&ouml;st werden, sofern sich aus dem Gutschein nichts
                    anderes ergibt.
                  </p>
                  <p>
                    <b>13.2</b>&nbsp;Geschenkgutscheine und Restguthaben von
                    Geschenkgutscheinen sind bis zum Ende des dritten Jahres
                    nach dem Jahr des Gutscheinkaufs einl&ouml;sbar.
                    Restguthaben werden dem Kunden bis zum Ablaufdatum
                    gutgeschrieben.
                  </p>
                  <p>
                    <b>13.3</b>&nbsp;Geschenkgutscheine k&ouml;nnen nur vor
                    Abschluss des Bestellvorgangs eingel&ouml;st werden. Eine
                    nachtr&auml;gliche Verrechnung ist nicht m&ouml;glich.
                  </p>
                  <p>
                    <b>13.4</b>&nbsp;Pro Bestellung kann immer nur ein
                    Geschenkgutschein eingel&ouml;st werden.
                  </p>
                  <p>
                    <b>13.5</b>&nbsp;Geschenkgutscheine k&ouml;nnen nur f&uuml;r
                    den Kauf von Waren und nicht f&uuml;r den Kauf von weiteren
                    Geschenkgutscheinen verwendet werden.
                  </p>
                  <p>
                    <b>13.6</b>&nbsp;Reicht der Wert des Geschenkgutscheins zur
                    Deckung der Bestellung nicht aus, kann zur Begleichung des
                    Differenzbetrages eine der &uuml;brigen vom Verk&auml;ufer
                    angebotenen Zahlungsarten gew&auml;hlt werden.
                  </p>
                  <p>
                    <b>13.7</b>&nbsp;Das Guthaben eines Geschenkgutscheins wird
                    weder in Bargeld ausgezahlt noch verzinst.
                  </p>
                  <p>
                    <b>13.8</b>&nbsp;Der Geschenkgutschein ist &uuml;bertragbar.
                    Der Verk&auml;ufer kann mit befreiender Wirkung an den
                    jeweiligen Inhaber, der den Geschenkgutschein im Online-Shop
                    des Verk&auml;ufers einl&ouml;st, leisten. Dies gilt nicht,
                    wenn der Verk&auml;ufer Kenntnis oder grob fahrl&auml;ssige
                    Unkenntnis von der Nichtberechtigung, der
                    Gesch&auml;ftsunf&auml;higkeit oder der fehlenden
                    Vertretungsberechtigung des jeweiligen Inhabers hat.
                  </p>
                  <h2>14) Anwendbares Recht</h2>
                  <p>
                    F&uuml;r s&auml;mtliche Rechtsbeziehungen der Parteien gilt
                    das Recht der Bundesrepublik Deutschland unter Ausschluss
                    der Gesetze &uuml;ber den internationalen Kauf beweglicher
                    Waren. Bei Verbrauchern gilt diese Rechtswahl nur insoweit,
                    als nicht der gew&auml;hrte Schutz durch zwingende
                    Bestimmungen des Rechts des Staates, in dem der Verbraucher
                    seinen gew&ouml;hnlichen Aufenthalt hat, entzogen wird.
                  </p>
                  <h2>15) Verhaltenskodex</h2>
                  <ul>
                    <li>
                      Der Verk&auml;ufer hat sich den Teilnahmebedingungen
                      f&uuml;r die eCommerce-Initiative &bdquo;Fairness im
                      Handel&#8220; unterworfen, die im Internet unter{' '}
                      <a
                        href="https://www.fairness-im-handel.de/teilnahmebedingungen/"
                        rel="noreferrer"
                      >
                        https://www.fairness-im-handel.de /teilnahmebedingungen
                        /
                      </a>{' '}
                      einsehbar sind.
                    </li>
                    <li>
                      Der Verk&auml;ufer hat sich den Richtlinien f&uuml;r
                      &bdquo;Google Kundenrezensionen&#8220; unterworfen, die im
                      Internet unter{' '}
                      <a
                        href="https://support.google.com/merchants/topic/7105962"
                        rel="noreferrer"
                      >
                        https://support.google.com /merchants /topic /7105962
                      </a>{' '}
                      einsehbar sind.
                    </li>
                    <li>
                      Der Verk&auml;ufer hat sich den Trusted Shops
                      Qualit&auml;tskriterien unterworfen, die im Internet unter{' '}
                      <a
                        href="http://www.trustedshops.com/tsdocument/TS_QUALITY_CRITERIA_de.pdf"
                        rel="noreferrer"
                      >
                        http://www.trustedshops.com /tsdocument
                        /TS_QUALITY_CRITERIA_de.pdf
                      </a>{' '}
                      einsehbar sind.
                    </li>
                  </ul>
                  <h2>16) Alternative Streitbeilegung</h2>
                  <p>
                    <b>16.1</b>&nbsp;Die EU-Kommission stellt im Internet unter
                    folgendem Link eine Plattform zur Online-Streitbeilegung
                    bereit:{' '}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      rel="noreferrer"
                    >
                      https://ec.europa.eu /consumers /odr
                    </a>
                  </p>
                  <p>
                    Diese Plattform dient als Anlaufstelle zur
                    au&szlig;ergerichtlichen Beilegung von Streitigkeiten aus
                    Online-Kauf- oder Dienstleistungsvertr&auml;gen, an denen
                    ein Verbraucher beteiligt ist.
                  </p>
                  <p>
                    <b>16.2</b>&nbsp;Der Verk&auml;ufer ist zur Teilnahme an
                    einem Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle weder verpflichtet noch
                    bereit.
                  </p>
                  <br />
                  <a href="https://www.it-recht-kanzlei.de/">
                    <Image
                      src="https://www.it-recht-kanzlei.de/logo/AGB-Logo.png?i=3b2f2-21a74-39ca-9080-1"
                      alt="Vertreten durch die IT-Recht Kanzlei"
                      width={150}
                      height={150}
                    />
                  </a>
                  <br />
                  <br />
                  <br />
                  Björn Seibert · BE-SCooTER® ...FUNsport erFAHREN! Rodheimer
                  Str. 126 · 35452 Heuchelheim · Deutschland
                  <br />
                  <br />
                  <br />
                  Tel.: 0641 / 93923404
                  <br />
                  Fax: 0641 / 93923402
                  <br />
                  E-Mail: info@be-scooter.de
                  <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        id="Cookie-Einstellungen"
        key={3}
        className="rounded-md md:container "
      >
        <button
          onClick={() => toggleExpand(3)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            COOKIE-EINSTELLUNGEN
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 3 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 3 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 3 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-[40vw] w-full object-cover md:h-[380px]">
                <Image
                  src={'/images/info/cookies.jpg'}
                  alt="Cookies"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="flex flex-col justify-center overflow-auto">
                <p>
                  <br />
                  FUNKTIOINELL: <br />
                  <br />
                  Funktionelle Cookies ermöglichen dieser Website, bestimmte
                  Funktionen zur Verfügung zu stellen und Informationen zu
                  speichern, die vom Nutzer eingegeben wurden – beispielsweise
                  bereits registrierte Namen oder die Sprachauswahl. Damit
                  werden verbesserte und personalisierte Funktionen
                  gewährleistet.
                  <br />
                  <br />
                  Youtube <br />
                  <br />
                  Diese Cookies sind Teil von eingebetteten YouTube-Videos. Sie
                  erheben anonymisierte statistische Daten – z. B. wie oft ein
                  Video abgespielt wird und welche Einstellungen dabei verwendet
                  werden. Dabei werden keine sensiblen Daten gesammelt, außer
                  der Nutzer ist in sein Google-Konto eingeloggt. In diesem Fall
                  werden ihre Aktionen ihrem Konto zugeordnet – beispielsweise
                  wenn sie auf den &quot;Mag ich&quot;-Button klicken. Mehr
                  Informationen dazu finden sich in der
                  Google-Datenschutzerklärung. Anbieter: Google LLC, 1600
                  Amphitheatre Parkway, Mountain View, CA 94043, USA oder von
                  Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                  Irland, wenn Sie in der EU ansässig sind. Cookie-Namen und
                  Lebensdauer: YSC (gültig für eine Sitzung), secure-HSID
                  (Lebensdauer: 2 Monate), Secure-SSID (Lebensdauer: 2 Monate),
                  Secure-APSID (Lebensdauer: 2 Monate), VISITORINFO1LIVE
                  (Lebensdauer: 5 Monate), SIDCC (Lebensdauer: 1 Jahr),
                  LOGIN_INFO(Lebensdauer: 2 Jahre), PREF (Lebensdauer: 2 Jahre),
                  SID (Lebensdauer: 2 Jahre), _Secure-3PSID (Lebensdauer: 2
                  Jahre), HSID (Lebensdauer: 2 Jahre), SSID (Lebensdauer: 2
                  Jahre), APISID (Lebensdauer: 2 Jahre), SAPISID (Lebensdauer: 2
                  Jahre), _Secure-3PAPISID (Lebensdauer: 2 Jahre), Consent
                  (Lebensdauer: 28 Jahre).
                  <br />
                  <br />
                  <br />
                  Google Maps <br />
                  <br />
                  Diese Cookies sind Teil von Google Maps. Anbieter: Google LLC,
                  1600 Amphitheatre Parkway, Mountain View, CA 94043, USA oder
                  Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                  wenn Sie in der EU ansässig sind. Cookie-Namen und
                  Lebensdauer: UULE (Lebensdauer: 1 Tag), OTZ (Lebensdauer: 2
                  Wochen), 1P_JAR (Lebensdauer: 1 Monat), SIDCC (Lebensdauer: 1
                  Jahr), _Secure-3PAPISID (Lebensdauer: 2 Jahre), _Secure-APSID
                  (Lebensdauer: 2 Monate), _Secure-SSID (Lebensdauer: 2 Jahre),
                  HSID (Lebensdauer: 2 Jahre), _Secure-3PSID (Lebensdauer: 2
                  Jahre), ANID (Lebensdauer: 1 Jahr), SID (Lebensdauer: 2 Jahre)
                  APISID (Lebensdauer: 2 Jahre), _Secure-HSID (Lebensdauer: 2
                  Monate), SAPISID (Lebensdauer: 2 Jahre), NID (Lebensdauer: 6
                  Monate)
                  <br />
                  <br />
                  -----------------------------------------------------------------------------
                  <br />
                  PERFORMANCE
                  <br />
                  Google Analytics
                  <br />
                  <br />
                  Diese Cookies sammeln anonymisierte Informationen zu
                  Analysezwecken – z. B. wie Besucher die Website nutzen und mit
                  ihr interagieren. Anbieter: Google LLC, 1600 Amphitheatre
                  Parkway, Mountain View, CA 94043, USA oder Google Ireland
                  Limited, Gordon House, Barrow Street, Dublin 4, Irland, wenn
                  Sie in der EU ansässig sind. Cookie-Namen:_ga, _gat und_gid)
                  Cookie-Lebensdauer: 2 Jahre
                  <br />
                  <br />
                  -----------------------------------------------------------------------------
                  <br />
                  MARKETING / THIRD-PARTY
                  <br />
                  <br />
                  Facebook
                  <br />
                  <br />
                  Das _fbp-Cookie ist ein Facebook-Pixel-Cookie, das die
                  Browserinformationen speichert und den Browser zum Zwecke der
                  Anmeldeauthentifizierung identifiziert. Das _fbc-Cookie ist
                  ein Klick-Id-Cookie, das die Abfrageparameter für die
                  Website-Domain speichert, auf welcher der Website-Besucher auf
                  eine Anzeige auf Facebook geklickt hat und dann auf dieser
                  Ziel-Website landet, auf der das Facebook-Pixel aktiviert
                  wurde. Provider: Facebook Inc, 1 Hacker Way, Menlo Park, CA
                  94025, USA, oder, wenn Sie in der EU ansässig sind, Facebook
                  Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbour, Dublin
                  2, Irland Cookie-Namen und Lebenszeiten: _fbp (Lebensdauer: 2
                  Jahre), _fbc(Lebensdauer: 2 Jahre)
                  <br />
                  <br />
                  <Link
                    href="/info"
                    className="text-lg underline hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900"
                  >
                    Cookie-Einstellungen
                  </Link>
                  <br />
                  <Link
                    href="/info"
                    className="text-lg underline hover:bg-slate-100 hover:bg-opacity-50 hover:text-slate-900"
                  >
                    Datenschutzeklärung
                  </Link>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={4} className="rounded-md md:container ">
        <button
          onClick={() => toggleExpand(4)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            HAFTUNG
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 4 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 4 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 4 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-[40vw] w-full object-cover md:h-[380px]">
                <Image
                  src={'/images/info/Haftung.jpeg'}
                  alt="Haftung"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="flex flex-col justify-center overflow-auto">
                <p>
                  <br />
                  Hinweis zur Straßenverkehrsordnung (StVO) /
                  Straßenverkehrs-Zulassungs-Ordnung (StVZO) und
                  Haftungsausschluss:
                  <br />
                  <br />
                  Wir weisen ausdrücklich darauf hin, dass von BE-SCooTER®
                  angegebene Produkte unter Umständen nur im privaten,
                  abgeschlossenen <br />
                  Bereich genutzt werden dürfen, wie zum Beispiel etwa für
                  Sport- und Werbezwecke.
                  <br />
                  <br />
                  Bitte fahren Sie immer vorsichtig, nutzen Sie Schutzkleidung
                  wie Helme oder auch Protektoren und bringen sich und andere
                  nicht in <br />
                  Gefahr. Sprechen Sie vorab mit Ihrer Versicherung, so dass
                  alle Bereiche Ihres Handelns geschützt sind. Bitte bedenken
                  Sie
                  <br /> weiterhin, dass in anderen Ländern andere gesetzliche
                  Bestimmungen gelten. Dieses gilt vor allem dann, wenn Sie mit
                  dem E Scooter <br />
                  in den Urlaub fahren.
                  <br />
                  Bitte informieren Sie sich vorher darüber und halten Sie sich
                  grundsätzlich immer daran.
                  <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={5} className="rounded-md md:container  ">
        <button
          onClick={() => toggleExpand(5)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            WIDERRUFSRECHT
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 5 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 5 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 5 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-[40vw] w-full object-cover md:h-[380px]">
                <Image
                  src={'/images/info/Wiederufrecht.jpeg'}
                  alt="Wiederufrecht"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <div className="flex flex-col justify-center overflow-auto">
                <p>
                  <br />
                  Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
                  Gründen diesen Vertrag zu widerrufen.
                  <br />
                  Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
                  Vertragsabschlusses.
                  <br />
                  Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (BE-SCooTER®,
                  Inhaber: Björn Seibert, Rodheimer Str. 126, 35452 Heuchelheim,{' '}
                  <br />
                  Deutschland, Tel.: 0641 / 93923404, Fax: 0641 / 93923402,
                  E-Mail: info@be-scooter.de) mittels einer eindeutigen
                  Erklärung (z. B.
                  <br /> ein mit der Post versandter Brief, Telefax oder E-Mail)
                  über Ihren Entschluss, diesen Vertrag zu widerrufen,
                  informieren.
                  <br />
                  <br />
                  Sie können dafür das beigefügte Muster-Widerrufsformular
                  verwenden, das jedoch nicht vorgeschrieben ist.
                  <br />
                  <br />
                  Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die
                  Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf
                  der <br />
                  Widerrufsfrist absenden.
                  <br />
                  <br />
                  <br />
                  Folgen des Widerrufs
                  <br />
                  <br />
                  Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
                  Zahlungen, die wir von Ihnen erhalten haben, einschließlich
                  der <br />
                  Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich
                  daraus ergeben, dass Sie eine andere Art der Lieferung als die
                  von <br />
                  uns angebotene, günstigste Standardlieferung gewählt haben),
                  unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag{' '}
                  <br />
                  zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf
                  dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung
                  verwenden wir dasselbe Zahlungsmittel, das Sie bei der
                  ursprünglichen Transaktion eingesetzt haben, es sei denn, mit
                  Ihnen wurde
                  <br /> ausdrücklich etwas anderes vereinbart; in keinem Fall
                  werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.
                  <br />
                  <br />
                  Haben Sie verlangt, dass die Dienstleistungen während der
                  Widerrufsfrist beginnen sollen, so haben Sie uns einen
                  angemessenen <br />
                  Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu
                  dem Sie uns von der Ausübung des Widerrufsrechts
                  <br /> hinsichtlich dieses Vertrags unterrichten, bereits
                  erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der{' '}
                  <br />
                  im Vertrag vorgesehenen Dienstleistungen entspricht.
                  <br />
                  <br />
                  Quelle: Rechtsanwalt Metzler
                  <br />
                  <br />
                  _________________________________________________
                  <br />
                  <br />
                  <br />
                  <br />
                  Das beizufügende Muster-Widerrufsformular:
                  <br />
                  <br />
                  Muster Widerrufsformular
                  <br />
                  <br />
                  (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte
                  dieses Formular aus und senden Sie es zurück.)
                  <br />
                  <br />
                  <br />
                  <br />
                  An:
                  <br />
                  <br />
                  <br />
                  BE-SCooTER®,
                  <br />
                  <br />
                  Inhaber: Björn Seibert
                  <br />
                  BE-SCooTER® ...FUNsport erFAHREN!
                  <br />
                  Rodheimer Str. 126
                  <br />
                  35452 Heuchelheim
                  <br />
                  Deutschland
                  <br />
                  <br />
                  <br />
                  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*)
                  abgeschlossenen Vertrag
                  <br />
                  <br />
                  über den Kauf der folgenden Waren (*)/die Erbringung der
                  folgenden Dienstleistung (*)
                  <br />
                  <br />
                  <br />
                  Bestellt am (*)/erhalten am (*)
                  <br />
                  <br />
                  <br />
                  Name des/der Verbraucher(s)
                  <br />
                  <br />
                  <br />
                  Anschrift des/der Verbraucher(s)
                  <br />
                  <br />
                  <br />
                  Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf
                  Papier)
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  Datum
                  <br />
                  <br />
                  ___________
                  <br />
                  (*) Unzutreffendes streichen.
                  <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={6} className="rounded-md md:container  ">
        <button
          onClick={() => toggleExpand(6)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            LADEHINWEIS FÜR AKKUS
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 6 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 6 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 6 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-[40vw] w-full object-cover md:h-[380px]">
                <Image
                  src={'/images/info/Akkus.jpeg'}
                  alt="Akkus"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="flex flex-col justify-center overflow-auto">
                <p>
                  <br />
                  Die Wartung und Pflege der Akkus ist ein entscheidendes
                  Kriterium zur Lebensdauer Ihrer Batterien. Durch falsche{' '}
                  <br />
                  Wartung, Pflege und Ladeverhalten kann sich diese stark
                  reduzieren, bis hin zu irreparablen Schäden und <br />
                  zum frühzeitigen Totalausfall der Akkus.
                  <br />
                  <br />
                  Bleiakkus
                  <br />
                  <br />
                  Bleiakkus sollten niemals tiefentladen werden, sondern stets
                  unter möglichst hoher Spannung betrieben werden. Durch
                  völliges <br />
                  “Leerfahren” oder durch lange Lagerung ohne Aufladen (wie z.B.
                  über den Winter) tiefentladene Bleiakkus, lässt diese <br />
                  sulfatieren und beschädigt die Zellen. Dieser Prozess ist in
                  vielen Fällen nicht wieder umzukehren und führt zum <br />
                  Totalausfall des Akkus..
                  <br />
                  <br />
                  Denken Sie nicht Sie “verschwenden” viele Ladezyklen, indem
                  Sie den Bleiakku öfter nachladen, obwohl dieser nicht
                  “leergefahren”
                  <br /> ist – dies ist völlig falsch! Bei der angegebenen
                  Lebensdauer in Ladezyklen sind sog. Vollzyklen gemeint. Das
                  heißt,
                  <br /> wenn Sie Ihren Akku 50% entladen und dann wieder voll
                  aufladen, so entspricht dies ½ Ladezyklus. Zweimal aufladen
                  <br /> bedeutet dementsprechend einem Vollzyklus.
                  <br />
                  <br />
                  Wir empfehlen deshalb das Nachladen der Akkus ab einer
                  Entladung von 25%. Dann aber immer solange, bis das Ladegerät
                  den <br />
                  Ladevorgang vollständig abgeschlossen hat. So gewährleisten
                  sie eine höchstmögliche Spannung der Zellen.
                  <br />
                  <br />
                  <br />
                  Während der Überwinterung oder einer langen Lagerung von
                  Fahrzeugen mit Bleiakkus ist es zwingend notwendig, diese
                  mindestens <br />
                  einmal im Monat nachzuladen bis der Ladevorgang vollständig
                  abgeschlossen ist.
                  <br />
                  <br />
                  <br />
                  Lithiumakkus
                  <br />
                  <br />
                  Lithiumakkus sollten niemals tiefentladen werden, dies
                  beschädigt die Lithiumzellen irreparabel. Alle Lithiumakkus
                  sollten (falls
                  <br /> möglich) stets bei mittlerer Ladung gelagert werden.
                  Wird ein Akku über längere Zeit nicht benötigt, bitte diesen
                  <br /> nicht vorher voll aufladen – dies versetzt die
                  Lithiumzellen in unnötigen „Stress“ was langfristig zu einer{' '}
                  <br />
                  verkürzten Lebensdauer führen kann. Wenn man bei der Benutzung
                  des Akkus die Wahl hat, empfehlen wir diesen prinzipiell nicht{' '}
                  <br />
                  vollständig aufzuladen, sondern immer im mittleren
                  Spannungsbereich zu nutzen. Selbstverständlich kann der Akku
                  aber <br />
                  voll aufgeladen werden, um beispielsweise lange Strecken zu
                  fahren – es ist nur technisch gesehen für einen Lithiumakku
                  das <br />
                  Beste, dies nicht zu tun um wirklich das Maximum an
                  Performance und Lebensdauer aus dem Akku herausholen zu
                  können.
                  <br />
                  <br />
                  Die Lebensdauer von Lithiumakkus wird in Ladezyklen angegeben.
                  Denken Sie nicht, Sie “verschwenden” viele Ladezyklen, indem
                  Sie
                  <br /> den Lithiumakku öfter nachladen, obwohl dieser nicht
                  “leergefahren” ist – dies ist völlig falsch! Bei der <br />
                  angegebenen Lebensdauer in Ladezyklen sind sog. Vollzyklen
                  gemeint. Das heißt, wenn Sie Ihren Akku 50% entladen und{' '}
                  <br />
                  dann wieder voll aufladen, so entspricht dies ½ Ladezyklus.
                  Zweimal aufladen dementsprechend einem Vollzyklus.
                  <br />
                  <br />
                  Wir empfehlen das Nachladen eines Lithiumakkus bei 25%iger
                  Restladung bis zu ca. 75% Ladezustand. Für lange Strecken kann
                  der <br />
                  Akku aber selbstverständlich auch voll aufgeladen werden –
                  siehe oben.
                  <br />
                  <br />
                  Während der Überwinterung oder langer Lagerung von Fahrzeugen
                  mit Lithiumakkus ist es zwingend notwendig, diese mindestens
                  einmal <br />
                  im Monat bis ca. 60% nachzuladen.
                  <br />
                  <br />
                  Für Lithiumakkus nur die vom Hersteller zugelassenen und
                  empfohlenen Ladegeräte verwenden. Aufladen mit zu hohem
                  Ladestrom um <br />
                  schneller aufladen zu können, kann die Lithiumzellen
                  irreparabel beschädigen und im schlimmsten Fall bis zum Brand
                  führen.
                  <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div key={7} className="rounded-md pb-10 md:container ">
        <button
          onClick={() => toggleExpand(7)}
          className="mt-20 flex w-full items-center justify-between  px-6 py-4 text-lg font-medium text-gray-800"
        >
          <span className="leading-title text-left text-2xl font-semibold md:text-3xl">
            INFORMATIONEN ZUR BATTERIEVERORDNUNG
          </span>
          <motion.span
            className="flex h-12 w-12 items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: expandedSectionIndex === 7 ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {expandedSectionIndex === 7 ? (
              <FiMinus className="rotate-90" />
            ) : (
              <FiPlus />
            )}
          </motion.span>
        </button>
        <AnimatePresence>
          {expandedSectionIndex === 7 && (
            <motion.div
              key="content"
              className="p-6 text-gray-700"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="relative h-[40vw] w-full object-cover md:h-[380px]">
                <Image
                  src={'/images/info/battery.jpeg'}
                  alt="Scooter Battery"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div className="flex flex-col justify-center overflow-auto">
                <p>
                  <br />
                  Im Zusammenhang mit dem Vertrieb von Batterien oder mit der
                  Lieferung von Geräten, die Batterien enthalten, sind <br />
                  wir verpflichtet, Sie auf folgendes hinzuweisen:
                  <br />
                  <br />
                  Sie sind zur Rückgabe gebrauchter Batterien als Endnutzer
                  gesetzlich verpflichtet. Sie können Altbatterien, die wir als{' '}
                  <br />
                  Neubatterien im Sortiment führen oder geführt haben,
                  unentgeltlich an unserem Versandlager (Versandadresse)
                  zurückgeben. Die auf <br />
                  den Batterien abgebildeten Symbole haben folgende Bedeutung:
                  Das Symbol der durchgekreuzten Mülltonne bedeutet, dass die{' '}
                  <br />
                  Batterie nicht in den Hausmüll gegeben werden darf. <br />
                  Bei Batterien, die Schadstoffe enthalten, befinden sich in der
                  Nähe des Mülltonnensymbol die chemischen Symbole der
                  Schadstoffe. <br />
                  Dabei steht: <br />
                  Pb = Batterie enthält mehr als 0,004 Masseprozent <br />
                  Blei Cd = Batterie enthält mehr als 0,002 Masseprozent Cadmium
                  Hg = Batterie enthält mehr als 0,0005 Masseprozent
                  Quecksilber.
                  <br />
                  <br />
                  Rückgabeort / Versandadresse :<br />
                  <br />
                  BE-SCooTER®
                  <br />
                  Rodheimer Str. 126
                  <br />
                  35452 Heuchelheim
                  <br />
                  <br />
                  Telefon 0641 93923404
                  <br />
                  info@be-scooter.de
                  <br />
                  <br />
                  Altbatterien können alternativ auch kostenlos bei Wertstoff-,
                  Recyclinghöfen oder kommunalen Sammelstellen abgegeben werden.
                  Eine <br />
                  Rücksendung der Altbatterie per Post ist aufgrund der
                  Gefahrgutverordnung nicht zulässig. Bitte beachten Sie die{' '}
                  <br />
                  vorstehenden Hinweise. <br />
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
