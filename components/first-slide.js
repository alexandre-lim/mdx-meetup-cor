import React from 'react';

function FirstSlide({ title, subtitle }) {
  return (
    <div>
      <h1 style={{ fontSize: '3em', margin: '0 0' }}>{title}</h1>
      <h2 style={{ fontSize: '2em', margin: '0 0' }}>{subtitle}</h2>
      <p style={{ fontSize: '1.5em', marginBottom: 10 }}>Alexandre LIM</p>
    </div>
  );
}

export { FirstSlide };
