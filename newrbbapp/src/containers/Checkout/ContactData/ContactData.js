import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import Input from '../../../components/UI/Input/Input'
import { connect } from 'react-redux';

export class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                valueWasEntered: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                valueWasEntered: false
            },

            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                valueWasEntered: false
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 7
                },
                valid: false,
                valueWasEntered: false
            },

            country: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'Canada', displayValue: 'Canada' },
                    { value: 'USA', displayValue: 'USA' },
                    { value: 'EU', displayValue: 'EU' }]
                },
                validation: {},
                valid: true,
                value: 'Canada',
                valueWasEntered: false
            },

            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'Uber Eats', displayValue: 'Uber Eats' },
                    { value: 'Skip the Dishes', displayValue: 'Skip the Dishes' },
                    { value: 'UPS Standard', displayValue: 'UPS Standard' }]
                },
                validation: {},
                valid: true,
                value: 'Uber Eats',
                valueWasEntered: false
            },
        },
        loading: false,
        formIsValid: false
    }

    checkValidation(value, rules) {
        let isValid = true;

        if (!rules) {
            return true;

        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        return isValid;
    }

    handleChange = (e, name) => {

        const tempOrderFormObject = { ...this.state.orderForm };

        //deep clone
        const updatedOrderFormElement = { ...tempOrderFormObject[name] };
        updatedOrderFormElement.value = e.target.value;

        updatedOrderFormElement.valid = this.checkValidation(updatedOrderFormElement.value, updatedOrderFormElement.validation)

        updatedOrderFormElement.valueWasEntered = true
        tempOrderFormObject[name] = updatedOrderFormElement;

        let formValid = true;
        for (let i in tempOrderFormObject) {

            formValid = tempOrderFormObject[i].valid && formValid
        }

        this.setState({
            orderForm: tempOrderFormObject, formIsValid: formValid
        })

    }


    orderHandler = (event) => {
        event.preventDefault();

        // moved here from BurgerBuilder

        this.setState({
            loading: true
        });

        const formData = {};

        for (let formIdentifier in this.state.orderForm) {
            formData[formIdentifier] = this.state.orderForm[formIdentifier].value
        }

        const order = {
            ingredients: this.props.ingredientsArray,
            price: this.props.totalPrice,
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
                {formElementsArray.map(i => (
                    <Input
                        key={i.id}
                        elementType={i.config.elementType}
                        elementConfig={i.config.elementConfig}
                        value={i.config.value}
                        invalid={!i.config.valid}
                        name={i.id}
                        valueWasEntered={i.config.valueWasEntered}
                        shouldValidate={i.config.validation ? true : false}
                        onChange={(e) => this.handleChange(e, i.id)} />
                ))}

                {/* <Button btnType='Success' click={this.orderHandler}>ORDER NOW</Button> */}
                <Button disabled={!this.state.formIsValid} btnType='Success'>ORDER NOW</Button>
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

const mapStateToProps = (state) => {
    return {
        ingredientsArray: state.ingredients,
        totalPrice: state.totalPrice
    }
}

// export default withErrorHandler(ContactData, axios);
export default connect(mapStateToProps)(ContactData);