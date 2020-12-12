import React from 'react';
import Card from 'components/Card';
import Wrapper from './Wrapper';

function CardList(props) {
  const { cats } = props;
  return (
    <Wrapper>
      {cats.map(cat => (
        <Card key={cat.id} cat={cat} />
      ))}
    </Wrapper>
  );
}

export default CardList;
