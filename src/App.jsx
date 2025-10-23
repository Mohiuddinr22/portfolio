import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import 'tailwindcss';
import { useRef } from 'react';

function App() {
  const introductionHeight = useRef();
  const educationHeight = useRef();
  const skillsHeight = useRef();
  const projectsHeight = useRef();
  const experiencesHeight = useRef();

  return (
    <div className="bg-neutral-50">
      <Header
        introductionHeight={introductionHeight}
        educationHeight={educationHeight}
        skillsHeight={skillsHeight}
        projectsHeight={projectsHeight}
        experiencesHeight={experiencesHeight}
      />
      <Body
        introductionHeight={introductionHeight}
        educationHeight={educationHeight}
        skillsHeight={skillsHeight}
        projectsHeight={projectsHeight}
        experiencesHeight={experiencesHeight}
      />
      <Footer />
    </div>
  );
}

export default App;
