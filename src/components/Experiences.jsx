import 'tailwindcss';
import { useState, useEffect } from 'react';

export default function Experiences({ experiencesHeight }) {
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
    <div
      ref={experiencesHeight}
      className="w-full h-auto bg-neutral-100 p-8 m-2 text-slate-900 flex flex-col justify-center items-center"
    >
      <h1
        className={`text-2xl text-slate-900 font-bold my-4 mx-8 p-4 sm:text-3xl md:text-4xl lg:text-5xl ${cssState === 'sm' ? 'text-shadow-sm' : 'text-shadow-lg'} text-shadow-neutral-500 transition-all duration-500 ease-in-out`}
      >
        Experiences
      </h1>
      <div className="overflow-x-auto p-4 m-4 rounded-box border border-slate-content/5 bg-neutral-100">
        <table className="table text-slate-900 border-slate-800">
          <thead className="text-slate-900">
            <tr className="border-slate-800">
              <th>YEAR</th>
              <th>COMPANY</th>
              <th>POSITION</th>
            </tr>
          </thead>
          <tbody className="border-slate-800">
            <tr className="border-slate-800">
              <td>April 2022 - March 2024</td>
              <td>
                <a
                  className="hover:text-slate-700 hover:text-shadow-neutral-800 hover:text-shadow-xs underline"
                  href="https://www.britishcouncil.org.bd/en"
                >
                  BRITISH COUNCIL - BANGLADESH
                </a>
              </td>
              <td>IELTS & Schools Exam Invigilator</td>
            </tr>
            <tr className="border-slate-800">
              <td>March 2024 - January 2025</td>
              <td>
                <a
                  className="hover:text-slate-700 hover:text-shadow-neutral-800 hover:text-shadow-xs underline"
                  href="https://www.gen-soft.dev"
                >
                  GEN-SOFT
                </a>
              </td>
              <td>Project Manager</td>
            </tr>
            <tr className="border-slate-800">
              <td>September 2025 - Present</td>
              <td>
                <a
                  className="hover:text-slate-700 hover:text-shadow-neutral-800 hover:text-shadow-xs underline"
                  href="https://www.nirobinfotech.com"
                >
                  NIROB INFO-TECH
                </a>
              </td>
              <td>Marketing Executive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
