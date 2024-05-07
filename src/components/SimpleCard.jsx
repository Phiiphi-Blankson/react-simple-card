/** @format */

import React from 'react';
import Tittle from './Tittle';
import Description from './Description';
import Image from './Image';
class SimpleCard extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          margin: '30px',
          border: '4px solid brown',
          borderRadius: '10px',
          boxShadow: '6px 6px 2px 2px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div>
          <Image
            className="imgTab"
            Img="https://images.unsplash.com/photo-1714212494809-555606435baa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '20px',
            padding: '20px',
          }}
        >
          <Tittle className="tith" Intro="My Journey to React" />
          <Description
            className="text"
            Desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate eum, nobis illum voluptatem, labore ex asperiores fugiat ipsam repellat quasi eaque quis! Veritatis eveniet, perspiciatis dignissimos impedit fugiat vero deserunt voluptatum corporis expedita? Tenetur, possimus. Placeat laborum, officiis excepturi enim aspernatur, molestiae ullam veniam porro, modi nostrum expedita nam minima vitae at! Fugiat aut impedit quo itaque laudantium maiores non sit recusandae beatae dicta! Dignissimos odio neque nemo quae saepe illum praesentium amet, sunt in cumque aliquam illo placeat magnam at eos animi totam officia ipsa quam vel, omnis ad unde nam quisquam. Provident nulla nobis consequatur eos, asperiores impedit ex excepturi perferendis sequi in voluptatum eligendi saepe ipsam eum quisquam soluta architecto vel vero officia, dicta explicabo facere? Quas laboriosam, repellat odit nobis ea adipisci tempora corporis. Provident culpa minima numquam magni asperiores harum repudiandae, quidem libero voluptas, animi nostrum, ipsam veritatis dolor facilis maxime quod quae aliquid. Nam architecto, molestias maiores consectetur harum quasi quis fugit ipsum rerum quia maxime, facilis laudantium quos consequuntur soluta voluptatem esse quidem magni! Necessitatibus placeat ducimus cum harum incidunt ipsa ab voluptatem cupiditate ut hic amet numquam consequatur minima unde illo, maiores at, doloremque sunt tempora assumenda, accusamus pariatur? Soluta, eius."
          />
        </div>
      </div>
    );
  }
}

export default SimpleCard;
