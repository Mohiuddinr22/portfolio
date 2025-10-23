import 'tailwindcss';
import { useEffect, useState } from 'react';

export default function NavigationBar({
  introductionHeight,
  educationHeight,
  skillsHeight,
  projectsHeight,
  experiencesHeight,
}) {
  const [introductionHighlight, setIntroductionHighlight] = useState('');
  const [educationHighlight, setEducationHighlight] = useState('');
  const [skillsHighlight, setSkillsHighlight] = useState('');
  const [projectsHighlight, setProjectsHighlight] = useState('');
  const [experiencesHighlight, setExperiencesHighlight] = useState('');

  const toIntroduction = introductionHeight.current
    ? introductionHeight.current.offsetTop
    : undefined;
  const toEducation = educationHeight.current
    ? educationHeight.current.offsetTop
    : undefined;
  const toSkills = skillsHeight.current
    ? skillsHeight.current.offsetTop
    : undefined;
  const toProjects = projectsHeight.current
    ? projectsHeight.current.offsetTop
    : undefined;
  const toExperiences = experiencesHeight.current
    ? experiencesHeight.current.offsetTop
    : undefined;

  useEffect(() => {
    function handleHighlight() {
      if (
        !toIntroduction ||
        !toEducation ||
        !toSkills ||
        !toProjects ||
        !toExperiences
      ) {
        return;
      }
      const scrollY = window.scrollY + 350;

      if (scrollY > 0 && scrollY < toEducation) {
        setIntroductionHighlight('  bg-neutral-300 text-slate-900');
      } else {
        setIntroductionHighlight('');
      }

      if (scrollY > toEducation && scrollY < toSkills) {
        setEducationHighlight('  bg-neutral-300 text-slate-900');
      } else {
        setEducationHighlight('');
      }

      if (scrollY > toSkills && scrollY < toProjects) {
        setSkillsHighlight('  bg-neutral-300 text-slate-900');
      } else {
        setSkillsHighlight('');
      }

      if (scrollY > toProjects && scrollY < toExperiences) {
        setProjectsHighlight('  bg-neutral-300 text-slate-900');
      } else {
        setProjectsHighlight('');
      }

      if (scrollY > toExperiences) {
        setExperiencesHighlight('  bg-neutral-300 text-slate-900');
      } else {
        setExperiencesHighlight('');
      }
    }

    window.addEventListener('scroll', handleHighlight);

    return () => window.removeEventListener('scroll', handleHighlight);
  }, [toIntroduction, toEducation, toSkills, toProjects]);

  function scrollToIntroduction() {
    if (introductionHeight.current) {
      window.scrollTo({ top: toIntroduction - 130, behavior: 'smooth' });
    }
  }

  function scrollToEducation() {
    if (educationHeight.current) {
      window.scrollTo({ top: toEducation - 130, behavior: 'smooth' });
    }
  }

  function scrollToSkills() {
    if (skillsHeight.current) {
      window.scrollTo({ top: toSkills - 130, behavior: 'smooth' });
    }
  }

  function scrollToProjects() {
    if (projectsHeight.current) {
      window.scrollTo({ top: toProjects - 130, behavior: 'smooth' });
    }
  }

  function scrollToExperiences() {
    if (experiencesHeight.current) {
      window.scrollTo({ top: toExperiences - 130, behavior: 'smooth' });
    }
  }

  const navCss =
    'bg-neutral-50 shadow-md shadow-slate-950 w-full h-14 flex fixed top-16 mb-2 z-50';
  const ulCss =
    'hidden md:text-slate-800 md:flex md:flex-row md:justify-center md:items-center md:h-16 md:w-full';
  let liCss = `mx-4 transition-all duration-200 ease-in-out shadow-sm shadow-slate-900 border border-slate-800 rounded-md py-1 px-3 hover:bg-slate-800 hover:text-neutral-200 hover:shadow-md`;
  const btnCss = 'hover:bg-slate-800 hover:text-neutral-200';

  return (
    <nav className={navCss}>
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:text-neutral-200 hover:bg-slate-300 md:hidden"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-950"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content text-slate-900 bg-neutral-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button
                className={btnCss + introductionHighlight}
                onClick={scrollToIntroduction}
              >
                Introduction
              </button>
            </li>
            <li>
              <button
                className={btnCss + educationHighlight}
                onClick={scrollToEducation}
              >
                Education
              </button>
            </li>
            <li>
              <button
                className={btnCss + skillsHighlight}
                onClick={scrollToSkills}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={btnCss + projectsHighlight}
                onClick={scrollToProjects}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={btnCss + experiencesHighlight}
                onClick={scrollToExperiences}
              >
                Experience
              </button>
            </li>
          </ul>
        </div>
      </div>
      <ul className={ulCss}>
        <li className={liCss + introductionHighlight}>
          <button className={' cursor-pointer'} onClick={scrollToIntroduction}>
            Introduction
          </button>
        </li>
        <li className={liCss + educationHighlight}>
          <button className={' cursor-pointer'} onClick={scrollToEducation}>
            Education
          </button>
        </li>
        <li className={liCss + skillsHighlight}>
          <button className={' cursor-pointer'} onClick={scrollToSkills}>
            Skills
          </button>
        </li>
        <li className={liCss + projectsHighlight}>
          <button className={' cursor-pointer'} onClick={scrollToProjects}>
            Projects
          </button>
        </li>
        <li className={liCss + experiencesHighlight}>
          <button className=" cursor-pointer" onClick={scrollToExperiences}>
            Experience
          </button>
        </li>
      </ul>
    </nav>
  );
}
