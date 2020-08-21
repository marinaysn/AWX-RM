import React from 'react';
import './ChakraInput.css';
import { Field} from 'formik';
import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Stack
} from '@chakra-ui/core'

const ChakraInput = (props) => {
    const { label, name, ...rest } = props
    return (
        <Field name={name}>
            {
                ({ field, form }) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>

                    
                    <FormLabel htmlFor={name} >{label}</FormLabel>
                    <Input id={name} {...rest} {...field} />
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                     
                    </FormControl>
                }

            }
        </Field>
    )
}

export default ChakraInput;