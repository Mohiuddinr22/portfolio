import 'tailwindcss';
import NavigationBar from './NavigationBar';
import { useState, useEffect } from 'react';

export default function Header({
  introductionHeight,
  educationHeight,
  skillsHeight,
  projectsHeight,
  experiencesHeight,
}) {
  const [cssState, setCssState] = useState('sm');
  const states = ['sm', 'md'];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % states.length;
      setCssState(states[index]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="flex justify-between items-center flex-col top-0">
      <h1
        className={`bg-neutral-50
                   text-slate-800
                     text-xl
                     font-bold
                     mx-4
                     mb-2
                     w-full
                     h-16
                     flex
                     items-center
                     justify-center
                     fixed
                     top-0
                     z-50
                     transition-all
                     duration-1000
                     ease-in-out
                     text-shadow-${cssState}
                     text-shadow-neutral-500
                     sm:text-2xl
                     md:text-3xl
                     lg:text-4xl
                     xl:text-5xl
                     2xl:text-6xl`}
      >
        MOHIUDDIN MOHI - PORTFOLIO
      </h1>
      <NavigationBar
        introductionHeight={introductionHeight}
        educationHeight={educationHeight}
        skillsHeight={skillsHeight}
        projectsHeight={projectsHeight}
        experiencesHeight={experiencesHeight}
      />
    </header>
  );
}
