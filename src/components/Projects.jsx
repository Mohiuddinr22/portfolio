import { useState, useEffect } from 'react';
import tictactoeImg from '../assets/tic-tac-toe.jpg';
import investmentCalcImg from '../assets/investment-calc.jpg';
import finalCountdownImg from '../assets/finalCountdown.jpg';
import projectManagerImg from '../assets/projectManager.jpg';
import shoppingCartImg from '../assets/shoppingCart.jpg';
import placePickerImg from '../assets/placePicker.jpg';
import quizAppImg from '../assets/quizApp.jpg';

export default function Projects({ projectsHeight }) {
  const projectImages = [
    {
      title: 'Tic-Tac-Toe',
      img: tictactoeImg,
      description:
        "A regular tic-tac-toe game using reactJS and it's useState function only.",
      link: 'https://mohiuddinr22.github.io/tic-tac-toe/',
    },
    {
      title: 'Investment Calculator',
      img: investmentCalcImg,
      description:
        'A calculator which calculates the investments and shows results of the profit based on the investment over years.',
      link: 'https://mohiuddinr22-investment-calculator.netlify.app/',
    },
    {
      title: 'Final Countdown',
      img: finalCountdownImg,
      description:
        'This is to show a proper use of the useRef function of reactJS. Just stop the time closer before the goal to score better.',
      link: 'https://mohiuddinr22-almost-final-countdown.netlify.app/',
    },
    {
      title: 'Project Manager App',
      img: projectManagerImg,
      description:
        'This is a basic project manager app where you can add projects with description, following tasks and due dates. You can also delete the project you want.',
      link: 'https://mohiuddinr22-project-manager-app.netlify.app/',
    },
    {
      title: 'Shopping App',
      img: shoppingCartImg,
      description:
        'An elegant design on how can an online shopping cart look like and how the products look so attractive.',
      link: 'https://mohiuddinr22-shopping-cart.netlify.app',
    },
    {
      title: 'Place Picker',
      img: placePickerImg,
      description:
        'This app lets you use your location so that it can show you nearby places based on your location.',
      link: 'https://mohiuddinr22-place-picker.netlify.app/',
    },
    {
      title: 'Quiz App',
      img: quizAppImg,
      description:
        "This quiz app will show you the proper use of reactJS and it's core functionalities.",
      link: 'https://mohiuddinr22-quiz-app.netlify.app/',
    },
  ];
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
      ref={projectsHeight}
      className="text-slate-900 bg-neutral-100 w-full h-auto flex flex-col justify-center items-center"
    >
      <h1
        className={`text-2xl text-slate-900 font-bold my-4 mx-8 p-4 sm:text-3xl md:text-4xl lg:text-5xl ${cssState === 'sm' ? 'text-shadow-sm' : 'text-shadow-lg'} text-shadow-neutral-500 transition-all duration-500 ease-in-out`}
      >
        Projects
      </h1>
      <div className="text-slate-900 bg-neutral-100 p-4 w-auto h-auto flex flex-col justify-center items-center md:justify-start md:flex-wrap md:flex-row md:items-start">
        {projectImages.map((image) => {
          return (
            <div className="card bg-base-100 image-full m-4 w-96 h-auto shadow-lg">
              <figure>
                <img src={image.img} alt="Tic-Tac-Toe" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{image.title}</h2>
                <p>{image.description}</p>
                <div className="card-actions justify-end">
                  <a href={image.link} className="btn btn-primary">
                    Visit
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
