import React from 'react';
import { Field} from 'formik';
import {
    Textarea,
    FormControl,
    FormLabel,
    FormErrorMessage
} from '@chakra-ui/core'

const ChakraTextArea =(props) =>{

    const { label, name, type, ...rest } = props

    return (
        <Field name={name}>
            {
                ({ field, form }) => {
                    return <FormControl isInvalid={form.errors[name] && form.touched[name]}>
                    <FormLabel htmlFor={name} >{label}</FormLabel>
                    <Textarea type={type} id={name} name={name} {...rest} {...field} />
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                     
                    </FormControl>
                }
            }
        </Field>
    )
}

export default ChakraTextArea ;