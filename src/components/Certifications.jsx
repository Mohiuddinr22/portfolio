import 'tailwindcss';
import { useState, useEffect } from 'react';

import cert1 from '../assets/two.jpg';
import cert2 from '../assets/shomaponi.jpg';
import cert3 from '../assets/bs-jan-11.jpg';
import cert4 from '../assets/bs-feb-11.jpg';
import cert5 from '../assets/bs-mar-11.jpg';
import cert6 from '../assets/jsc.jpg';
import cert7 from '../assets/ssc.jpg';
import cert8 from '../assets/hsc.jpg';
import cert9 from '../assets/singles-23.jpg';
import cert10 from '../assets/doubles-23.jpg';
import cert11 from '../assets/singles-24.jpg';
import cert12 from '../assets/doubles-24.jpg';
import cert13 from '../assets/singles-25.jpg';
import cert14 from '../assets/doubles-25.jpg';
import cert15 from '../assets/wdb.jpg';

export default function Certificates({ certificatesHeight }) {
  const [cssState, setCssState] = useState('sm');
  const states = ['sm', 'md', 'lg', 'xl'];

  const [certIndex, setCertIndex] = useState(0);

  const certificates = [
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
    cert7,
    cert8,
    cert9,
    cert10,
    cert11,
    cert12,
    cert13,
    cert14,
    cert15,
  ];

  // ✨ Title animation (kept)
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % states.length;
      setCssState(states[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nextCert = () => {
    setCertIndex((prev) => (prev + 1) % certificates.length);
  };

  const prevCert = () => {
    setCertIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  return (
    <div
      ref={certificatesHeight}
      className="w-full h-auto text-slate-900 bg-neutral-100 m-2 p-2 flex flex-col justify-center items-center"
    >
      <h1
        className={`text-2xl font-bold my-4 mx-8 p-4 sm:text-3xl md:text-4xl lg:text-5xl 
        ${cssState === 'sm' ? 'text-shadow-sm' : 'text-shadow-lg'} 
        text-shadow-neutral-500 transition-all duration-500 ease-in-out`}
      >
        Certificates
      </h1>

      <div className="carousel w-3/4 h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[32rem]">
        <div className="carousel-item relative w-full transition-all duration-300 ease-in-out">
          <img
            src={certificates[certIndex]}
            alt="Certificate"
            className="w-full h-full object-contain rounded-lg shadow-lg"
          />

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <button onClick={prevCert} className="btn btn-circle">
              ❮
            </button>
            <button onClick={nextCert} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        {certIndex + 1} / {certificates.length}
      </p>
    </div>
  );
}
