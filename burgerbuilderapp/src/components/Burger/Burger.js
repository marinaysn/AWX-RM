import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {

    //method1
    // let ingB = Object.keys(props.ingBurger)
    //     .map(iKey => {
    //         return [...Array(props.ingBurger[iKey])]
    //             .map((_, i) => {
    //                 return <BurgerIngredient key={iKey + i} type={iKey} />
    //             });
    //     });

    //method2
    const ingredientsObj = props.ingBurger;
    let ingredientsArray = [];
    Object.keys(ingredientsObj).forEach(ingKey => {
        for (let i = 0; i < ingredientsObj[ingKey]; i++)
            ingredientsArray.push(<BurgerIngredient key={ingKey + i} type={ingKey} />)
    });


    // //
    // //method3
    // const ingredientArr1 = Object.keys(props.ingBurger);
    // const realIngredients = [];
    // ingredientArr1.forEach(ingr => {
    //     for (let i = 0; i < props.ingBurger[ingr]; i++) {
    //         realIngredients.push(ingr)
    //     }
    // })
    // //call {realIngredientsFinalized}
    // const realIngredientsFinalized = realIngredients.map((ingr,i)=> <BurgerIngredient type={ingr} key={i} /> )
            

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />

            { ingredientsArray }

            <BurgerIngredient type="bread-bottom" />


        </div>
    )
}

export default Burger

