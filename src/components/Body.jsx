import 'tailwindcss';
import Introduction from './Introduction';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Experiences from './Experiences';
import FAB from './FAB';
import Certificates from './Certifications';

export default function Body({
  introductionHeight,
  educationHeight,
  skillsHeight,
  projectsHeight,
  certificatesHeight,
  experiencesHeight,
}) {
  return (
    <div className="mt-32 flex flex-col justify-center items-center m-2 p-2 overflow-hidden">
      <Introduction introductionHeight={introductionHeight} />
      <Education educationHeight={educationHeight} />
      <Skills skillsHeight={skillsHeight} />
      <Projects projectsHeight={projectsHeight} />
      <Certificates certificatesHeight={certificatesHeight} />
      <Experiences experiencesHeight={experiencesHeight} />
      <FAB />
    </div>
  );
}
