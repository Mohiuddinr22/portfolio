import { useState, useEffect } from 'react';

import cppImg from '../assets/cpp.png';
import csImg from '../assets/cs.png';
import javaImg from '../assets/java.png';
import jsImg from '../assets/js.png';
import htmlImg from '../assets/html.png';
import cssImg from '../assets/css.png';
import tailwindImg from '../assets/tailwindcss.png';
import mongodbImg from '../assets/mongodb.png';
import reactImg from '../assets/react.png';
import sqlImg from '../assets/sql.png';
import aiImg from '../assets/ai.png';
import phpImg from '../assets/php.png';
import pythonImg from '../assets/python.png';

export default function Skills({ skillsHeight }) {
  const [cssState, setCssState] = useState('sm');
  const states = ['sm', 'md', 'lg', 'xl'];
  const [imageIndex, setImageIndex] = useState(0);
  const skillsImg = [
    htmlImg,
    cssImg,
    tailwindImg,
    jsImg,
    reactImg,
    cppImg,
    csImg,
    javaImg,
    pythonImg,
    phpImg,
    sqlImg,
    mongodbImg,
    aiImg,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % skillsImg.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  let currentImg = skillsImg[imageIndex];

  function nextImg() {
    setImageIndex((prev) => (prev + 1) % skillsImg.length);
  }

  function prevImg() {
    setImageIndex((prev) => (prev === 0 ? skillsImg.length - 1 : prev - 1));
  }

  return (
    <div
      ref={skillsHeight}
      className="w-full h-auto text-slate-900 bg-neutral-100 m-2 p-2 flex flex-col justify-center items-center"
    >
      <h1
        className={`text-2xl text-slate-900 font-bold my-4 mx-8 p-4 sm:text-3xl md:text-4xl lg:text-5xl text-shadow-${cssState} text-shadow-neutral-500 transition-all duration-500 ease-in-out`}
      >
        Skills
      </h1>
      <div className="carousel w-1/2 h-56 sm:h-64 md:h-80 lg:h-96 xl:h-128">
        <div className="carousel-item relative w-full transition-all duration-300 ease-in-out">
          <img src={currentImg} className="w-full" />
          <div className="absolute left-5 -mx-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={prevImg} className="btn btn-circle">
              ❮
            </button>
            <button onClick={nextImg} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
