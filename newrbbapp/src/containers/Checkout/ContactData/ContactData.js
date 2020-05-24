import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

export class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipcode: '',
            country: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        
        // moved here from BurgerBuilder

        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.name,
                address: {
                    street: this.state.street,
                    zipCode: this.state.zipcode,
                    country: 'Canada'
                },
                email: this.state.email
            },
            deliveryMethod: 'UPS Standard'
        };

        axios
            .post('/orders.json', order)
            .then(responce => {
                this.setState({
                    loading: false
                });
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            });


    }

    handleChange = (e) =>{

            this.setState({
                [e.target.name]: e.target.value
            })
    }

    render() {

        let form = (
                    <form >
                    <input className='inp' type='text' value={this.state.name} onChange={e => this.handleChange(e)} name='name' placeholder='Your Name: ' />
                    <input className='inp' type='email' value={this.state.email} onChange={e => this.handleChange(e)} name='email' placeholder='Email: ' />
                    <input className='inp' type='text' value={this.state.street} onChange={e => this.handleChange(e)} name='street' placeholder='Your Street : ' />
                    <input className='inp' type='text' value={this.state.zipcode} onChange={e => this.handleChange(e)} name='zipcode' placeholder='Zip Code : ' />
                    <Button btnType='Success' click={this.orderHandler}>ORDER NOW</Button>
                </form>

        );
        if (this.state.loading) {
            form = <Spinner />
          }

        return (
            <div className='ContactData'>
                <h4>Enter you delivery address</h4>
                {form}

            </div>
        )
    }
}

export default ContactData;
