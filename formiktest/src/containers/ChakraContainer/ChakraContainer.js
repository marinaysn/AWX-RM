import React from 'react';
import { Box, Image, Link, Text, Flex } from "@chakra-ui/core";
import LoginForm from '../../components/TestForms/LoginForm'
import EnrolmentForm from '../../components/TestForms/EnrolmentForm';

const ChakraContainer = (props) => {
    return (
        <>
            <Box m='md'>
                <Box p="6" bg="gray.200" w='md' rounded='md' border='2px' borderColor="#0e055f" m='5'  >


                    <LoginForm />
                    
                </Box>

                <Box p="6" bg="gray.200" w='md' rounded='lg' border='1px'  borderColor="#f00" m='5'>
                    <EnrolmentForm />


                    {/* <Box as="button" rounded="md" bg="tomato" color="white" px={10} h={10}>
                    Button
                </Box> */}
                </Box>
            </Box>

        </>
    )
}

export default ChakraContainer;