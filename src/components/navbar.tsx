import {
    Box,
    Flex,
    Link,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    IconButton,
    Container,
    Heading

} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5'


export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box as="nav" position="fixed" w="100%" bg={useColorModeValue('gray.100', 'gray.900')} px={4} zIndex={1}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Heading
                            // maxW={'3xl'}
                            fontWeight={600}
                        // fontSize={{ base: 'large', sm: '2xl', md: '4xl' }}
                        // textAlign={'left'}
                        >
                            chello
                        </Heading>
                    </Box>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Link href="https://github.com/heyoitsJuice/chello">
                                <IconButton aria-label="github" fontSize='40px' icon={<IoLogoGithub />} />
                            </Link>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}