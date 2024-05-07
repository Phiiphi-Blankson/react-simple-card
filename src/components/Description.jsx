/** @format */
import React from 'react';

class Description extends React.Component {
  render(props) {
    return (
      <div>
        <p
          style={{
            fontFamily: 'Quicksand',
            fontSize: '20px',
            padding: '10px',
            marginTop: '40px',
          }}
        >
          {this.props.Desc}
        </p>
      </div>
    );
  }
}

export default Description;
