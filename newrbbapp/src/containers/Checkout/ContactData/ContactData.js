import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button';
import './ContactData.css'


export class ContactData extends Component {

    state ={
        name: '',
        email: '',
        address: {
            street: '',
            zipcode: '',
            country: ''
        }
    }

    orderHandler = () => {

    }



    render() {
        return (
            <div className='ContactData'>
               <h4>Enter you delivery address</h4> 
               <form >
                   <input className='inp' type='text' name='name' placeholder='Your Name: ' />
                   <input className='inp' type='email' name='email' placeholder='Email: ' />
                   <input className='inp' type='text' name='street' placeholder='Your Street : ' />
                   <input className='inp' type='text' name='zip' placeholder='Zip Code : ' />
                <Button btnType='Success' click={this.orderHandler}>ORDER NOW</Button>
               </form>
               
            </div>
        )
    }
}

export default ContactData;
