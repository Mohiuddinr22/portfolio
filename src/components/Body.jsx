import 'tailwindcss';
import Introduction from './Introduction';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Experiences from './Experiences';

export default function Body({
  introductionHeight,
  educationHeight,
  skillsHeight,
  projectsHeight,
  experiencesHeight
}) {
  return (
    <div className="mt-32 flex flex-col justify-center items-center m-2 p-2">
      <Introduction introductionHeight={introductionHeight} />
      <Education educationHeight={educationHeight} />
      <Skills skillsHeight={skillsHeight} />
      <Projects projectsHeight={projectsHeight} />
      <Experiences experiencesHeight={experiencesHeight}/>
    </div>
  );
}
