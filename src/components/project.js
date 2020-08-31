import React from 'react';

export default function Project(props) {
  return (
    <div>
      <div>
        <div>
          <h2>{props.name}</h2>
          <p>{props.icon}</p>
        </div>
        <div>
          <p>Description:</p>
          <p>{props.description}</p>
        </div>
        <div>
          <p>Source Code:</p>
        </div>
      </div>
      <div>
        <p>Technologies:</p>
        <img alt="img1" />
        <img alt="img2" />
        <img alt="img3" />
      </div>
    </div>
  );
}
