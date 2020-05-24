import React, { Component } from 'react'
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


export class Orders extends Component {

    state ={
        orders: [],
        loading: false
    }

    componentDidMount() {

        this.setState({ loading:  true});

        axios
      .get('/orders.json')
      .then(responce => {

        
        let tempOrdersArr = [];

        for (let i in responce.data) {
            tempOrdersArr.push({...responce.data[i], id: i})
        }

        this.setState({ loading:  false, orders: tempOrdersArr});
      })
      .catch(error => {
          
        this.setState({ loading:  false});
      });

    }


    render() {
        

        return (
            <div>

                {this.state.orders.map(order => {

                   return (
                       <Order 
                       key={order.id}
                       orderId={order.id}
                       ingredients= {order.ingredients}
                       price={+order.price}
                        />)
                })}

            </div>
        )
    }
}

export default Orders;
