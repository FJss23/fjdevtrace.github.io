import React from 'react';
import Navigation from '../components/navigation';
import startStyle from './start.module.css';

export default function Home() {
  return (
    <>
      <div className={startStyle.header}>
        <div className={startStyle.titles}>
          <h4 className={startStyle.subtitle}>Hi, I am Francisco</h4>
          <h1 className={startStyle.title}>Software Engineer</h1>
        </div>
        <h4 className={startStyle.platform}>Mobile | Web | Desktop</h4>
      </div>
      <div className={startStyle.logos}>
        <a href="#" className={startStyle.itch}>
          <img src="itch.png" alt="Itch logo" />
        </a>
        <a href="#" className={startStyle.linkedin}>
          <img src="linkedin.png" alt="LinkedIn logo" />
        </a>
        <a href="#" className={startStyle.github}>
          <img src="github.png" alt="GitHub logo" />
        </a>
      </div>
      <Navigation
        global={startStyle.global}
        nav={startStyle.nav}
        link={startStyle.link}
        active={''}
      />
    </>
  );
}
