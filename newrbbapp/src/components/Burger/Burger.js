import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
 
//   const ingredientsArray = Object.keys(props.ingBurger)
//   .map(igKey =>{
//       return [...Array(props.ingBurger[igKey])]
//       .map((_ , i) =>{
//          return <BurgerIngredient key={igKey + 1} type={igKey} />;
//       })
//   })

 //turn Object into array
  const ingredientsObj = props.ingBurger;

  let ingredientsArray = [];

  Object.keys(ingredientsObj).forEach(ingKey => {

    for (let i = 0; i < ingredientsObj[ingKey]; i++) {
      ingredientsArray.push(
        <BurgerIngredient key={ingKey + i} type={ingKey} />
      );
    }
  });

  if (ingredientsArray.length === 0) {
    ingredientsArray = <p>Please add your ingredients</p>;
  }

  return (
    <div className='Burger'>
      <h1>${props.price.toFixed(2)}</h1>
      <BurgerIngredient type='bread-top' />

      {ingredientsArray}

      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;