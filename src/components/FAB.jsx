import { useState, useEffect } from "react";

export default function FAB() {
  const [cssState, setCssState] = useState('sm');
  const states = ['lg', 'xl'];

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % states.length;
      setCssState(states[index]);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="fab fab-flower">
      <div
        tabIndex={0}
        role="button"
        className={`btn btn-circle btn-success ${cssState === 'lg' ? 'btn-lg' : 'btn-xl'} ${cssState === 'lg' ? 'shadow-lg' : 'shadow-xl'} shadow-slate-800 transition-all duration-500 ease-in-out`}
      >
        <svg
          aria-label="Mail"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          className="size-6 text-neutral-50"
        >
          <path
            d="M2 3.5h12c.55 0 1 .45 1 1v7c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1v-7c0-.55.45-1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 4l5.5 4.25L13.5 4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <button className="fab-main-action btn btn-circle btn-xl btn-primary shadow-lg shadow-slate-800">
        <svg
          aria-label="New post"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-6"
        >
          <path
            fillRule="evenodd"
            d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <a
        href="https://www.facebook.com/mohiuddin.mohi.659308"
        className="btn btn-circle btn-xl"
      >
        <svg
          aria-label="Facebook"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="size-6"
          fill="none"
        >
          {/* rounded square outline */}
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="3"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />

          {/* bold "f" */}
          <path
            d="M9.7 3H8.2c-1.1 0-1.7.65-1.7 1.7V6H5v2h1.5v5h2.2V8h1.7l.3-2H8.7V4.8c0-.3.2-.5.5-.5H9.7V3Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a href="https://wa.me/1632109954/" className="btn btn-circle btn-xl">
        <svg
          aria-label="WhatsApp"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="size-6"
          fill="none"
        >
          {/* outer chat bubble */}
          <path
            d="M8 1.5a6.5 6.5 0 0 0-5.63 9.8L1.5 14.5l3.4-.9A6.5 6.5 0 1 0 8 1.5Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* phone symbol inside */}
          <path
            d="M6.4 5.2c-.1-.3-.3-.3-.5-.3h-.4c-.2 0-.5.1-.7.3s-.5.6-.5 1.1.4 1.1.5 1.3c.7 1.2 1.6 2.1 2.9 2.8.4.2.8.4 1.1.5.5.2.9.1 1.2-.1.3-.2.4-.6.5-.8.1-.2 0-.4-.1-.5s-.3-.2-.6-.4c-.1 0-.3-.1-.4 0-.1 0-.3.2-.4.3-.1.1-.2.1-.3 0-.2-.1-.8-.3-1.3-.8s-.8-1.1-.9-1.3c-.1-.1 0-.2.1-.3s.2-.2.2-.3c.1-.1.1-.2.1-.3 0-.1 0-.2 0-.3Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href="https://www.github.com/Mohiuddinr22/"
        className="btn btn-circle btn-xl"
      >
        <svg
          aria-label="GitHub"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="size-6"
          fill="currentColor"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.68 7.68 0 018 4.6c.68 0 1.36.09 1.99.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/mohiuddin-mohi-5936b5238/"
        className="btn btn-circle btn-xl"
      >
        <svg
          aria-label="LinkedIn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="size-6"
          fill="none"
        >
          {/* outer rounded square */}
          <rect
            x="0.5"
            y="0.5"
            width="15"
            height="15"
            rx="2.5"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />

          {/* "in" text symbol */}
          <path
            d="M5.2 6.5H3.7V12h1.5V6.5ZM4.45 4.7a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8ZM12.3 8.7c0-1.4-.7-2.2-2-2.2-.9 0-1.4.4-1.6.8h-.1V6.5H7.2V12h1.5V9.3c0-.7.1-1.4.9-1.4.8 0 .9.7.9 1.5V12h1.8V8.7Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
}
