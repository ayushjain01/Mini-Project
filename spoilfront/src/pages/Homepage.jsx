import Navbar from "../components/Navbar";
import { Box, HStack, Flex, Stack, Heading, Text, Button, Image, useBreakpointValue } from '@chakra-ui/react';
import watchtvbg from '../assets/watchtvbg.png';
import watchtv from '../assets/watchtv.png';
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import cardData from "./cardData.json"

const Homepage = () => {
    
    return ( 
        <div className="Home">
            <Box bg="#f9f1e8" paddingBottom={10}>
                <Navbar/>
            <Box
            backgroundImage={watchtvbg} backgroundRepeat="no-repeat" 
            backgroundPosition="center" 
            bgSize="cover"
            objectFit="cover"
            paddingTop={4} marginX={9} marginTop={4}
            marginBottom={4}
            paddingBottom={4}
            h="80vh"
          >
            <Stack direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={1} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                        as={'span'}
                        position={'relative'}
                         fontFamily="Montserrat, sans-serif"
                        fontWeight="extrabold"
                        sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        We
                        </Text>
                        <Text
                        as={'span'}
                        textColor='white'
                        position={'relative'}
                        fontFamily="Montserrat, sans-serif"
                        fontWeight="extrabold"
                        sx={{ textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)' }}
                        >Spoil</Text>
                        <br />{' '}
                        <Text color={'white'} as={'span'}
                        fontSize="26"
                         fontFamily="Montserrat, sans-serif"
                        fontWeight="extrabold"
                         >
                        Skip the suspense, not the show
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'md' }} color={'white'}
                    fontFamily="Montserrat, sans-serif"
                    fontWeight="thin"
                    letterSpacing="0.05em"
                    lineHeight="1.4em">
                        Tired of wasting your time on movies or TV shows with disappointing endings? Say goodbye to scrolling endlessly on streaming services and hello to <Text as="span" 
                        fontWeight="extrabold"
                        fontSize={{ base: 'md', lg: 'md' }} 
                        color={'black'}
                    fontFamily="Montserrat, sans-serif"
                    >We</Text>
                        <Text as="span" 
                        fontWeight="extrabold"
                        fontSize={{ base: 'md', lg: 'md' }} 
                        color={'white'}
                    fontFamily="Montserrat, sans-serif"
                    >Spoil.</Text> Our spoiler scale helps you make informed decisions and enjoy a personalized viewing experience. Don't waste any more time, start spoiling today.
                    </Text>
                    <Stack 
                    paddingTop={4}
                    direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button 
                        rounded={'full'}
                        bg={'black'}
                        color={'white'}
                        _hover={{
                            bg: 'black.400',
                        }}>
                        Spoil Now
                        </Button>
                    </Stack>
                    </Stack>
                </Flex>
                <Flex flex={1}>
                    <Image
                    alt={'Spoil Homepage Image'}
                    objectFit={'cover'}
                    src={watchtv}
                    width="500px"
                    height="500px"
                    />
                </Flex>
             </Stack>
            </Box>
        </Box>
         <Box position="relative" height="1px" bgGradient="linear(to-r, black,black)">
            <Box position="absolute" top="-12px" left="100px" width="130px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">New</Box>
            <Box position="absolute" top="-12px" left="148px" width="100px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="white" fontWeight="extrabold">Releases</Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8">
        </Box>
         <Box position="relative" height="1px" bgGradient="linear(to-r, black,black)">
            <Box position="absolute" top="-12px" left="100px" width="130px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">You</Box>
            <Box position="absolute" top="-12px" left="140px" width="100px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="white" fontWeight="extrabold">Might</Box>
            <Box position="absolute" top="-12px" left="198px" width="100px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">Also Like</Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8"></Box>
        <Box position="relative" height="1px" bgGradient="linear(to-r, black,black)">                   
            <Box position="absolute" top="-12px" left="100px" width="130px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">Trending</Box>
            <Box position="absolute" top="-12px" left="188px" width="55px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="white" fontWeight="extrabold">Now</Box>
        </Box>
        <Box width="100%" marginTop={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8"></Box>
        <Box width="100wh" bg="#f9f1e8">
            <Footer/>
        </Box>
        </div>
    );
}
 
export default Homepage;