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
            country: 'Canada',

            country: {
                elementType: 'select',
                elementConfig: {
                    options: [{value: 'Canada', displayValue: 'Canada'},
                    {value: 'USA', displayValue: 'USA'},
                    {value: 'EU', displayValue: 'EU'}]
                },
                value: ''
            },

            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{value: 'uber', displayValue: 'Uber Eats'},
                    {value: 'skip', displayValue: 'Skip the Dishes'},
                    {value: 'ups', displayValue: 'UPS Standard'}]
                },
                value: ''
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

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.orderForm.name.value,
                address: {
                    street: this.state.orderForm.street.value,
                    zipCode: this.state.orderForm.zipcode.value,
                    country: this.state.orderForm.country.displayValue
                },
                email: this.state.orderForm.email.displayValue
            },
            deliveryMethod: this.state.orderForm.deliveryMethod.value
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

        console.log(formElementsArray)

        let form = (
            <form >
                {/* <Input elementType='...' elementconfig='...' value='...' onChange={e => this.handleChange(e)} name='name'  /> */}
                {formElementsArray.map(i =>(
                    <Input 
                        key={i.id}
                        elementType={i.config.elementType}
                        elementConfig={i.config.elementConfig}
                        value={i.config.value}
                        onChange={ (e) => this.handleChange(e, i.id)} />
                ))}

                {/* <Input inputtype='input' type='email' value={this.state.email} onChange={e => this.handleChange(e)} name='email' placeholder='Email: ' />
                <Input inputtype='input' type='text' value={this.state.street} onChange={e => this.handleChange(e)} name='street' placeholder='Your Street : ' />
                <Input inputtype='input' type='text' value={this.state.zipcode} onChange={e => this.handleChange(e)} name='zipcode' placeholder='Zip Code : ' /> */}


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

// export default withErrorHandler(ContactData, axios);
export default ContactData;