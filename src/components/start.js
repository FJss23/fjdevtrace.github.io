import React from 'react';
import Navigation from '../components/navigation';
import startStyle from './start.module.css';

export default function Home() {
  return (
    <div className={startStyle.frontpage}>
      <div>
        <div className={startStyle.header}>
          <div className={startStyle.titles}>
            <h2 className={startStyle.subtitle}>Hi, I am Francisco</h2>
            <h1 className={startStyle.title}>Software Engineer</h1>
          </div>
          <h2 className={startStyle.platform}>Mobile | Web | Desktop</h2>
        </div>
        <div className={startStyle.logos}>
          <a
            href="https://fjss23.itch.io/"
            className={startStyle.logo}
            target="_blank"
          >
            <img src="itch.png" alt="Itch logo" />
          </a>
          <a href="#" className={startStyle.logo}>
            <img src="linkedin.png" alt="LinkedIn logo" />
          </a>
          <a
            href="https://github.com/FJss23"
            className={startStyle.logo}
            target="_blank"
          >
            <img src="github.png" alt="GitHub logo" />
          </a>
        </div>
        <Navigation
          global={startStyle.global}
          nav={startStyle.nav}
          link={startStyle.link}
          active={''}
        />
      </div>
    </div>
  );
}
