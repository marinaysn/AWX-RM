import React from 'react';
import Card from './Card/Card';

const CardList = props => {
  return (
    <div>
      {props.profiles.map(p => (
        <Card {...p} key={p.name} />
      ))}
    </div>
  );
};

export default CardList;
