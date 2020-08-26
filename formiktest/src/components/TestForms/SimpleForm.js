import React, { Component } from 'react'
import { ThemeProvider, Box, useColorMode, Input, Stack, InputLeftAddon, Icon, InputGroup, Button, InputLeftElement, FormControl, Divider, FormHelperText } from '@chakra-ui/core';
import InputElement from '@chakra-ui/core/dist/InputElement';

export class SimpleForm extends Component {



    HelloWorld = () => {
        return (
            alert("Enter Your Name!")
        )

    }


    render() {
        return (
            <Box
                w='450px'

                bg={'gray.200'}
                boxShadow='md'
                rounded='lg' m='5'>

                <form action='submit'>

                    <Stack spacing='2' isInline mb='2'>
                        <Input placeholder='Your first name' />
                        <Input placeholder='Your last name' />
                        <Input placeholder='Your phone number' />
                        <Input placeholder='Your email' />
                    </Stack>


                </form>

                <form action='submit' >

                    <Stack spacing='2' mb='2'>

                        <FormControl isRequired>
                            <InputGroup>
                                <Input placeholder='Your first name' />
                                <InputLeftAddon children={<Icon name='info' />} onClick={this.HelloWorld} />

                            </InputGroup>
                        </FormControl>
                        <FormControl>
                            <InputGroup>

                                <InputLeftElement children={<Icon name='edit' />} onClick={this.HelloWorld} />
                                <Input type='name' placeholder=" Enter Last Name" aria-label='Last Name' />

                            </InputGroup>
                        </FormControl>

                        <Divider borderColor="teal" mx='4' />

                        <FormControl isRequired>
                            <InputGroup>

                                <InputLeftElement children={<Icon name='email' />} onClick={this.HelloWorld} />
                                <Input type='email' placeholder="Enter Email Address" aria-label='Email' />

                            </InputGroup>
                        </FormControl>

                        <FormControl>
                            <InputGroup>

                                <InputLeftElement children={<Icon name='phone' />} onClick={this.HelloWorld} />
                                <Input type='email' placeholder="Enter Phone NUmber" aria-label='Phone' />

                            </InputGroup>
                        </FormControl>

                        <Button type='submit' variant='solid' variantColor='teal'>Sign Up</Button>
                        <FormHelperText>
                            We will never share your email
                            
                        </FormHelperText>
                    </Stack>


                </form>

            </Box>
        )
    }
}

export default SimpleForm


// const SimpleForm = (props) => {



//     const { colorMode } = useColorMode();

//     function HelloWorld(e){
        
//           alert("Hello World!")
    
//     }
//     return (
//         <Box
//             w='450px'

//             bg={'gray.200'}
//             boxShadow='md'
//             rounded='lg' m='5'>

//             <form action='submit'>

//                 <Stack spacing='2' isInline mb='2'>
//                     <Input placeholder='Your first name' />
//                     <Input placeholder='Your last name' />
//                     <Input placeholder='Your phone number' />
//                     <Input placeholder='Your email' />
//                 </Stack>


//             </form>

//             <form action='submit' >

//                 <Stack spacing='2' mb='2'>
//                     <InputGroup>
//                     <Input placeholder='Your first name' />
//                         <InputLeftAddon children={<Icon name='info' />} onClick={HelloWorld} />

//                     </InputGroup>

//                     <Input placeholder='Your phone number' />
//                     <Input placeholder='Your email' />
//                 </Stack>


//             </form>

//         </Box>


//     )
// }

// export default SimpleForm;