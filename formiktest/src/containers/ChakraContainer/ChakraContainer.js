import React from 'react';
import { Box, Image, Link, Text, Flex } from "@chakra-ui/core";
import LoginForm from '../../components/TestForms/LoginForm'
import EnrolmentForm from '../../components/TestForms/EnrolmentForm';

const ChakraContainer = (props) => {
    return (
        <>
            <Box m='md'>
                <Flex p="6" bg="gray.200" w='md' rounded='lg' border='1px' m='5'>


                    <LoginForm />
                </Flex>

                <Flex p="6" bg="gray.200" w='md' rounded='lg' border='1px' m='5'>
                    <EnrolmentForm />


                    {/* <Box as="button" rounded="md" bg="tomato" color="white" px={10} h={10}>
                    Button
                </Box> */}
                </Flex>
            </Box>

        </>
    )
}

export default ChakraContainer;