import React from 'react'
import {
    Box,
    Heading,
    Container,
    Text,
    Stack
} from '@chakra-ui/react';
import Nav from './navbar';

const CallToActionWithAnnotation: React.FC = () => {
    return (
        <>
            <Nav />
            <Container maxWidth={'8xl'}>
                <Stack
                    as={Box}
                    textAlign={'left'}
                    spacing={{ base: 8, md: 12 }}
                    py={{ base: 20, md: 20 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        A { }
                        <Text as={'span'} color={'yellow.400'}>
                            knockoff { }
                        </Text>
                        Trello clone
                    </Heading>
                    <Stack
                        as={Box}
                        textAlign={'left'}
                        spacing={{ base: 8, md: 12 }}
                    // py={{ base: 20, md: 20}}
                    >
                        <Heading
                            fontWeight={300}
                            fontSize={{ base: 'large', sm: '2xl', md: '4xl' }}
                            textAlign={'left'}
                            color={'gray.500'}
                        >
                            Have fun drag and dropping!
                        </Heading>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
    ;

export default CallToActionWithAnnotation