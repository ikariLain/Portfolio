import { LuBoxes, LuGitPullRequest, LuSearchCheck } from 'react-icons/lu';
import useLanguage from '../../useLanguage';
import './Experiences.css';

const stepIcons = [
  <LuSearchCheck aria-hidden="true" />,
  <LuBoxes aria-hidden="true" />,
  <LuGitPullRequest aria-hidden="true" />,
];

export default function Experiences() {
  const { copy } = useLanguage();

  return (
    <section className="section-block section-rule process-section" id="process" aria-labelledby="process-title">
      <div className="section-shell process-layout">
        <div className="process-intro">
          <p className="section-label">{copy.process.label}</p>
          <h2 className="section-heading" id="process-title">{copy.process.title}</h2>
          <p className="section-intro">{copy.process.intro}</p>

          <div className="process-note">
            <span>{copy.process.directionLabel}</span>
            <p>{copy.process.directionText}</p>
          </div>
        </div>

        <ol className="process-steps">
          {copy.process.steps.map((step, index) => (
            <li key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-copy">
                <span className="step-icon">{stepIcons[index]}</span>
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
