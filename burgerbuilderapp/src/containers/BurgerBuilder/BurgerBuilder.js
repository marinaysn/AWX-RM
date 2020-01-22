import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'

export class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state ={...}
    // }
    //state
    state ={
        ingredients: {
            salad: 1,
           bacon: 1,
           cheese: 1,
           meat: 1 
        }
    }

    render() {
        return (
            <Auxiliary>
                 <Burger ingBurger={this.state.ingredients} />
                <div>Build Controls</div>
            </Auxiliary>

        )
    }
}

export default BurgerBuilder
