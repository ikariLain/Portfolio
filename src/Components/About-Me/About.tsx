import { LuBraces, LuLayers3, LuSparkles } from 'react-icons/lu';
import './About.css';

const principles = [
  {
    icon: <LuLayers3 aria-hidden="true" />,
    title: 'Ser hela systemet',
    text: 'Jag tänker i flöden: från datamodell och API till det gränssnitt användaren möter.',
  },
  {
    icon: <LuBraces aria-hidden="true" />,
    title: 'Bygger med struktur',
    text: 'Tydlig kod, avgränsat ansvar och lösningar som går att förstå även efter nästa release.',
  },
  {
    icon: <LuSparkles aria-hidden="true" />,
    title: 'Lär genom att skapa',
    text: 'Jag utvecklas snabbast när jag får lösa riktiga problem, testa idéer och iterera på resultatet.',
  },
];

export default function About() {
  return (
    <section className="section-block" id="about" aria-labelledby="about-title">
      <div className="section-shell">
        <div className="about-heading">
          <div>
            <p className="section-label">01 / Om mig</p>
            <h2 className="section-heading" id="about-title">
              Nyfiken på tekniken.<br />Fokuserad på människan.
            </h2>
          </div>
          <p className="about-lead">
            Jag är en junior utvecklare med fullstackfokus som gillar att kombinera robust backend
            med snabba, tillgängliga gränssnitt. För mig är bra kod inte bara korrekt — den ska
            också göra produkten enklare att använda och vidareutveckla.
          </p>
        </div>

        <div className="about-principles">
          {principles.map((principle, index) => (
            <article className="principle-card" key={principle.title}>
              <div className="principle-top">
                <span className="principle-icon">{principle.icon}</span>
                <span className="principle-index">0{index + 1}</span>
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
