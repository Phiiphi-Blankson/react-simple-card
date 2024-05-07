/** @format */

// import React from 'react';

function Tittle(props) {
  return (
    <div>
      <h1
        style={{
          textAlign: 'center',
          fontFamily: 'Roboto',
          fontSize: '40px',
          fontWeight: 'bold',
          color: 'pink',
          marginBottom: '10px',
          border: '1px solid acquah',
          borderRadius: '3px',
          padding: '10px',
          boxShadow: '6px 6px 1px 1px rgba(0, 0, 0, 0.4)',
        }}
      >
        {props.Intro}
      </h1>
    </div>
  );
}

export default Tittle;
