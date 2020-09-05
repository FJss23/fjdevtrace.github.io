import React from 'react';
import sectionStyle from './section.module.css';

export default function Section({ children }) {
  return <div className={sectionStyle.section}>{children}</div>;
}
