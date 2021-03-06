import React from 'react';
import './FormikControl.css';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';
import DatePicker from './DatePicker';
import ChakraInput from '../ChakraComponents/ChakraInput';
import ChakraTextArea from '../ChakraComponents/ChakraTextArea';

const FormikControl = (props) =>{
    const { control, ...rest} = props

    switch(control) {
        case 'input': {
            return <Input {...rest} />
        }
        case 'textarea': {
            return <Textarea {...rest} />
        }
        case 'select': {
            return <Select {...rest} />
        }
        case 'radio': {
            return <RadioButton {...rest} />
        }
        case 'checkbox': {
            return <CheckBox {...rest} />
        }
        case 'date':  {
            return <DatePicker {...rest}  />
        }
        case 'chakrainput': {
            return <ChakraInput {...rest} />
        }
        case 'chakratextarea': {
            return <ChakraTextArea {...rest} />
        }
        default: return null   
    }
    // return (
    //     <div>
           
    //     </div>
    // )
}

export default FormikControl ;