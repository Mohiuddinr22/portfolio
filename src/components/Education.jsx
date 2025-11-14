import { useState, useEffect } from 'react';

export default function Education({ educationHeight }) {
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
      ref={educationHeight}
      className="w-full h-auto bg-neutral-100 py-8 px-2 m-2 text-slate-900 flex flex-col justify-center items-center"
    >
      <h1
        className={`text-2xl text-slate-900 font-bold my-4 mx-8 p-4 sm:text-3xl md:text-4xl lg:text-5xl ${cssState === 'sm' ? 'text-shadow-sm' : 'text-shadow-lg'} text-shadow-neutral-500 transition-all duration-500 ease-in-out`}
      >
        Education
      </h1>
      <div className="overflow-x-scroll w-full p-2 m-2 rounded-box border border-slate-content/5 bg-neutral-100">
        <table className="table text-slate-900 border-slate-800">
          <thead className="text-slate-900">
            <tr className="border-slate-800">
              <th>YEAR</th>
              <th>PROGRAM</th>
              <th>INSTITUTE</th>
              <th>SUBJECT</th>
            </tr>
          </thead>
          <tbody className="border-slate-800">
            <tr className="border-slate-800">
              <td>2016</td>
              <td>Secondary School Certificate</td>
              <td>
                <a
                  href="https://www.rajukcollege.edu.bd/"
                  className="hover:text-slate-700 hover:text-shadow-neutral-800 hover:text-shadow-xs underline"
                >
                  RAJUK UTTARA MODEL COLLEGE
                </a>
              </td>
              <td>Science</td>
            </tr>
            <tr className="border-slate-800">
              <td>2018</td>
              <td>Higher School Certificate</td>
              <td>
                <a
                  href="https://www.rajukcollege.edu.bd/"
                  className="hover:text-slate-700 hover:text-shadow-neutral-800 hover:text-shadow-xs underline"
                >
                  RAJUK UTTARA MODEL COLLEGE
                </a>
              </td>
              <td>Science</td>
            </tr>
            <tr className="border-slate-800">
              <td>2026</td>
              <td>Bachelors of Science</td>
              <td>
                <a
                  href="https://www.aiub.edu/"
                  className="hover:text-slate-700 hover:text-shadow-neutral-800 hover:text-shadow-xs underline"
                >
                  AMERICAN INTERNATIONAL UNIVERSITY - BANGLADESH
                </a>
              </td>
              <td>Computer Science & Engineering</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
