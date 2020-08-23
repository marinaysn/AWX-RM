import React from 'react';
import { Box, Image, Link, Text } from "@chakra-ui/core";
import LoginForm from '../../components/TestForms/LoginForm'
import EnrolmentForm from '../../components/TestForms/EnrolmentForm';

const ChakraContainer = (props) => {
    return (
<>
        <Box  m="4" width={[
            "100%", // base
            "50%", // 480px upwards
            "25%", // 768px upwards
            "15%", // 992px upwards
        ]}

            fontSize={["sm", "md", "lg", "xl"]}

            borderWidth="1px" rounded="lg" >
            <Box p="6" bg="gray.200" >

              
                    {/* <LoginForm /> */}
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