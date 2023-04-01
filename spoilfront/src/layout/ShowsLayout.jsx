import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ShowsLayout = ({ heading, description, cardData }) => {
  return (
    <Box>
       <Navbar/>
      <Flex flexDirection="column" bg="#f9f1e8">
        <Heading as="h1" size="2xl" my={8} textAlign={'left'} mx={20} fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold"  sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          {heading}
        </Heading>
        <Text fontSize="xl" textAlign="left" mb={8} mx={20} maxWidth="60%" fontFamily="Montserrat, sans-serif" sx={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}> 
          {description}
        </Text>
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
            <Box position="absolute" top="-12px" left="100px" width="80px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">Drama</Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8">
        </Box>
         <Box position="relative" height="1px" bgGradient="linear(to-r, black,black)">
            <Box position="absolute" top="-12px" left="100px" width="200px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">Binge Worthy</Box>
            <Box position="absolute" top="-12px" left="230px" width="90px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="white" fontWeight="extrabold">Shows</Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8">
        </Box>
         <Box position="relative" height="1px" bgGradient="linear(to-r, black,black)">
            <Box position="absolute" top="-12px" left="100px" width="100px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">Romance</Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8">
        </Box>
         <Box position="relative" height="1px" bgGradient="linear(to-r, black,black)">
            <Box position="absolute" top="-12px" left="100px" width="90px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">Comedy</Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8">
        </Box>
         <Box position="relative" height="1px" bgGradient="linear(to-r, black,black)">
            <Box position="absolute" top="-12px" left="100px" width="130px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">Thriller and </Box>
            <Box position="absolute" top="-12px" left="210px" width="110px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="white" fontWeight="extrabold">Suspense</Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8">
        </Box>
         <Box position="relative" height="1px" bgGradient="linear(to-r, black,black)">
            <Box position="absolute" top="-12px" left="100px" width="130px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">Evergreen</Box>
            <Box position="absolute" top="-12px" left="198px" width="80px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="white" fontWeight="extrabold">Shows</Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8">
        </Box>
         <Box position="relative" height="1px" bgGradient="linear(to-r, black,black)">
            <Box position="absolute" top="-12px" left="100px" width="80px" height="25px" bg="brand.50" paddingX={2}   fontFamily="Montserrat, sans-serif" color="black" fontWeight="extrabold">Horror</Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
            <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg="#f9f1e8">
        </Box>
      </Flex>
      <Box bg="#f9f1e8">
      <Footer/>
      </Box>
    </Box>
  );
};

export default ShowsLayout;
