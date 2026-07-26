import IntroBlock from './IntroBlock';
import GoalsStrengths from './GoalsStrengths';
import GeneralData from './GeneralData';
import SectionHeading from '../../shared/components/ui/SectionHeading';

export default function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="section__inner">
        <SectionHeading eyebrow="Sobre mí" title="Conóceme un poco más" />
        <IntroBlock />
        <GoalsStrengths />
        <GeneralData />
      </div>
    </section>
  );
}
