import { LuBoxes, LuGitPullRequest, LuSearchCheck } from 'react-icons/lu';
import './Experiences.css';

const steps = [
  {
    number: '01',
    icon: <LuSearchCheck aria-hidden="true" />,
    title: 'Förstå problemet',
    text: 'Jag börjar med användaren, målet och begränsningarna. Då blir teknikvalen enklare och lösningen mer träffsäker.',
  },
  {
    number: '02',
    icon: <LuBoxes aria-hidden="true" />,
    title: 'Bygga i tydliga delar',
    text: 'Jag delar upp flödet i hanterbara komponenter, API-endpoints och datamodeller som går att testa var för sig.',
  },
  {
    number: '03',
    icon: <LuGitPullRequest aria-hidden="true" />,
    title: 'Testa och förbättra',
    text: 'Jag verifierar helheten, tar till mig feedback och itererar tills upplevelsen känns enkel och implementationen stabil.',
  },
];

export default function Experiences() {
  return (
    <section className="section-block section-rule process-section" id="process" aria-labelledby="process-title">
      <div className="section-shell process-layout">
        <div className="process-intro">
          <p className="section-label">04 / Arbetssätt</p>
          <h2 className="section-heading" id="process-title">Från oklar idé till tydlig lösning.</h2>
          <p className="section-intro">
            Jag gillar ett pragmatiskt flöde där varje steg gör nästa steg enklare.
            Resultatet blir mindre gissning, bättre kod och en produkt som håller ihop.
          </p>

          <div className="process-note">
            <span>Min riktning</span>
            <p>Fullstackroller där jag får kombinera problemlösning, produktkänsla och modern webbutveckling.</p>
          </div>
        </div>

        <ol className="process-steps">
          {steps.map((step) => (
            <li key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-copy">
                <span className="step-icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
