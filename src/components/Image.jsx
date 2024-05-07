/** @format */

// import React from 'react';

function Image(props) {
  return (
    <div>
      <img
        src={props.Img}
        alt="image of flower"
        style={{
          height: '550px',
          width: '500px',
          border: '2px solid chocolate',
          borderRadius: '5px',
        }}
      />
    </div>
  );
}

export default Image;
