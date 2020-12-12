import React from 'react';

import CardItem from './CardItem';
import { getAvatarUrl } from 'urls';

function Card({ cat }) {
  const { name, email, id } = cat || {};
  return (
    <CardItem>
      <img src={getAvatarUrl(id)} alt="cat" />
      <h2> {name} </h2>
      <p>{email}</p>
    </CardItem>
  );
}

export default Card;
