import React from 'react';
import Card from './Card/Card';
import Form from '../Form/Form'


const CardList = props => {
  return (
    <div>

      <Form  />
      {/* <Card name={testData[0].name} avatar_url ={testData[0].avatar_url} company={testData[0].company } />

      <Card {...testData[1] } />
      <Card {...testData[2] } />
      <Card {...testData[3] } /> */}

      {props.profiles.map(p => (
        <Card {...p} key={p.name} />
      ))}
    </div>
  );
};

export default CardList;
