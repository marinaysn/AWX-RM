import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Input from '../../../components/UI/Input/Input'

export class ContactData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: ''
            },

            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: ''
            },

            country: {
                elementType: 'select',
                elementConfig: {
                    options: [{value: 'Canada', displayValue: 'Canada'},
                    {value: 'USA', displayValue: 'USA'},
                    {value: 'EU', displayValue: 'EU'}]
                },
                value: 'Canada'
            },

            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{value: 'Uber Eats', displayValue: 'Uber Eats'},
                    {value: 'Skip the Dishes', displayValue: 'Skip the Dishes'},
                    {value: 'UPS Standard', displayValue: 'UPS Standard'}]
                },
                value: 'UPS Standard'
            },
        },
        loading: false
    }


    orderHandler = (event) => {
        event.preventDefault();

        // moved here from BurgerBuilder

        this.setState({
            loading: true
        });

        const formData ={};

        for (let formIdentifier in this.state.orderForm){
            formData[formIdentifier] = this.state.orderForm[formIdentifier].value
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
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

    handleChange = (e, name) => {

        const tempOrderFormObject = {...this.state.orderForm };

        //deep clone
        const updatedOrderFormElement = {...tempOrderFormObject[name]};
        updatedOrderFormElement.value = e.target.value;
        tempOrderFormObject[name] = updatedOrderFormElement;

        this.setState({
            orderForm: tempOrderFormObject
        })
    }

    render() {

        const formElementsArray = [];

        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(i =>(
                    <Input 
                        key={i.id}
                        elementType={i.config.elementType}
                        elementConfig={i.config.elementConfig}
                        value={i.config.value}
                        onChange={ (e) => this.handleChange(e, i.id)} />
                ))}

                {/* <Button btnType='Success' click={this.orderHandler}>ORDER NOW</Button> */}
                <Button btnType='Success'>ORDER NOW</Button>
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

// export default withErrorHandler(ContactData, axios);
export default ContactData;