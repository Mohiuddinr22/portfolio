import 'tailwindcss';
import img1 from '../assets/IMG1.jpg';
import img2 from '../assets/IMG2.jpg';
import img3 from '../assets/IMG3.jpg';
import img4 from '../assets/IMG4.jpg';
import img5 from '../assets/IMG5.jpg';

import { useEffect, useState } from 'react';

export default function Introduction({ introductionHeight }) {
  const images = [img1, img2, img3, img4, img5];
  const [imgIndex, setImgIndex] = useState(0);
  const [cssState, setCssState] = useState('sm');
  const states = ['sm', 'md'];

  const spanCss = 'font-bold';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prevIdx) => (prevIdx + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  function prevSlide() {
    setImgIndex((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
  }

  function nextSlide() {
    setImgIndex((prevIdx) => (prevIdx + 1) % images.length);
  }

  return (
    <div
      ref={introductionHeight}
      className="bg-neutral-100 flex flex-col justify-center items-center"
    >
      <h1
        className={`text-2xl text-slate-900 font-bold my-4 mx-8 p-4 sm:text-3xl md:text-4xl lg:text-5xl text-shadow-${cssState} text-shadow-neutral-500 transition-all duration-500 ease-in-out`}
      >
        Introduction
      </h1>
      <div className="bg-neutral-100 w-full h-auto flex flex-col-reverse justify-center items-center md:flex-row">
        <section className="w-1/2 my-4 flex justify-center items-center flex-col">
          <h1 className="text-slate-900 text-xl font-bold sm:text-2xl md:text-4xl">
            Hello there!
          </h1>
          <h1 className="text-slate-900 text-xl font-bold overflow-hidden sm:text-2xl md:text-4xl">
            I am{' '}
            <span
              className={`text-shadow-neutral-500 text-shadow-${cssState} transition-all duration-1000 ease-in-out`}
            >
              Mohiuddin Mohi
            </span>
            .
          </h1>
          <p className="text-slate-900 text-xs sm:text-sm text-center my-4">
            Full-Stack Developer | MERN-Stack Developer
          </p>
        </section>
        <section className="w-full mx-4 md:w-1/2">
          <div className="relative w-full h-128 overflow-hidden rounded-xl">
            <div className="relative w-full h-full">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`absolute rounded-xl mx-4 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                    index === imgIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-800 rounded-full p-3 shadow-md cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-gray-800 rounded-full p-3 shadow-md cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    i === imgIndex ? 'bg-white' : 'bg-gray-500'
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="bg-neutral-100 text-slate-900 flex flex-col justify-center items-center my-4">
        <h1
          className={`text-2xl text-slate-900 font-bold my-4 mx-8 p-4 sm:text-3xl md:text-4xl lg:text-5xl text-shadow-${cssState} text-shadow-neutral-500 transition-all duration-500 ease-in-out`}
        >
          Why hire me?
        </h1>
        <p className="text-sm sm:text-md md:text-lg my-4 mx-16">
          I am a{' '}
          <span className={spanCss}>Software Expert & Web Developer</span> whose
          expertise spans the entire technology ecosystem, eliminating technical
          silos and delivering comprehensive,{' '}
          <span className={spanCss}>Full-stack</span> solutions. My command
          includes modern web mastery with{' '}
          <span className={spanCss}>React.js, Node.js & Express.js</span>{' '}
          enabling me to build fast, scalable, and reactive applications. This
          agility is combined with enterprise-grade depth, utilizing{' '}
          <span className={spanCss}>C#/.NET, Java & Python</span> for robust
          back-end systems, and foundational{' '}
          <span className={spanCss}>C/C++</span>
          knowledge for deep performance optimization. Critically, I am
          database-agnostic, adept at architecting solutions across{' '}
          <span className={spanCss}>
            MySQL, PostgreSQL, MSSQL & MongoDB.
          </span>{' '}
          This unparalleled versatility grants me the{' '}
          <span className={spanCss}>
            Architectural Versatility and Troubleshooting Authority
          </span>{' '}
          to reliably diagnose and resolve complex integration issues across any
          layer, ensuring your projects are built right, run smoothly, and scale
          effortlessly. I am the comprehensive technical authority your team
          needs.
        </p>
      </div>
    </div>
  );
}
