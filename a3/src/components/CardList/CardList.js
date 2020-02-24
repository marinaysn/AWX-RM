import React from 'react';
import Card from './Card/Card'

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  {name: "Marina Ysnogorodsky", avatar_url: "https://avatars3.githubusercontent.com/u/23560634?s=460&v=4", company: "BlueLink"},
];

const CardList =(props)  => {
  return (
    <div>
      {/* <Card name={testData[0].name} avatar_url ={testData[0].avatar_url} company={testData[0].company } />

      <Card {...testData[1] } />
      <Card {...testData[2] } />
      <Card {...testData[3] } /> */}

      {testData.map( p => ( 
        <Card {...p } />
      ))}
    </div>
  )
}

export default CardList
