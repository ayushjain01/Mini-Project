import { Box, Flex, Heading, Text,useColorModeValue } from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ActionAdventure from "./ActionAdventure.json"
import KidsAndFamily from "./KidsAndFamily.json"


const MovieLayout = ({ heading, description, cardData }) => {
  return (
    <Box>
      <Navbar />
      <Flex flexDirection="column" bg={useColorModeValue("#f9f1e8", "black")}>
        <Heading
          as="h1"
          size="2xl"
          my={8}
          textAlign={"left"}
          mx={20}
          fontFamily="Montserrat, sans-serif"
          color={useColorModeValue("black", "brand.50")}
          fontWeight="extrabold"
          sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {heading}
        </Heading>
        <Text
          fontSize="xl"
          textAlign="left"
          mb={8}
          mx={20}
          maxWidth="60%"
          fontFamily="Montserrat, sans-serif"
          sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
          color={useColorModeValue("black", "white")}
        >
          {description}
        </Text>
        <Box
          position="relative"
          height="1px"
          bgGradient="linear(to-r, black,black)"
        >
          <Box
            position="absolute"
            top="-12px"
            left="100px"
            width="130px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="black"
            fontWeight="extrabold"
          >
            New
          </Box>
          <Box
            position="absolute"
            top="-12px"
            left="148px"
            width="100px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="white"
            fontWeight="extrabold"
          >
            Releases
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1a202c")}></Box>
        <Box
          position="relative"
          height="1px"
          bgGradient="linear(to-r, black,black)"
        >
          <Box
            position="absolute"
            top="-12px"
            left="100px"
            width="80px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="black"
            fontWeight="extrabold"
          >
            Kids
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={KidsAndFamily} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1a202c")}></Box>
        <Box
          position="relative"
          height="1px"
          bgGradient="linear(to-r, black,black)"
        >
          <Box
            position="absolute"
            top="-12px"
            left="100px"
            width="130px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="black"
            fontWeight="extrabold"
          >
            Action and
          </Box>
          <Box
            position="absolute"
            top="-12px"
            left="205px"
            width="110px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="white"
            fontWeight="extrabold"
          >
            Adventure
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={ActionAdventure} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1a202c")}></Box>
        <Box
          position="relative"
          height="1px"
          bgGradient="linear(to-r, black,black)"
        >
          <Box
            position="absolute"
            top="-12px"
            left="100px"
            width="100px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="black"
            fontWeight="extrabold"
          >
            Romance
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1a202c")}></Box>
        <Box
          position="relative"
          height="1px"
          bgGradient="linear(to-r, black,black)"
        >
          <Box
            position="absolute"
            top="-12px"
            left="100px"
            width="90px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="black"
            fontWeight="extrabold"
          >
            Comedy
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1a202c")}></Box>
        <Box
          position="relative"
          height="1px"
          bgGradient="linear(to-r, black,black)"
        >
          <Box
            position="absolute"
            top="-12px"
            left="100px"
            width="130px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="black"
            fontWeight="extrabold"
          >
            Thriller and{" "}
          </Box>
          <Box
            position="absolute"
            top="-12px"
            left="210px"
            width="110px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="white"
            fontWeight="extrabold"
          >
            Suspense
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1a202c")}></Box>
        <Box
          position="relative"
          height="1px"
          bgGradient="linear(to-r, black,black)"
        >
          <Box
            position="absolute"
            top="-12px"
            left="100px"
            width="130px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="black"
            fontWeight="extrabold"
          >
            Blockbuster
          </Box>
          <Box
            position="absolute"
            top="-12px"
            left="218px"
            width="90px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="white"
            fontWeight="extrabold"
          >
            Movies
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1a202c")}></Box>
        <Box
          position="relative"
          height="1px"
          bgGradient="linear(to-r, black,black)"
        >
          <Box
            position="absolute"
            top="-12px"
            left="100px"
            width="80px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color="black"
            fontWeight="extrabold"
          >
            Horror
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1a202c")}></Box>
      </Flex>
      <Box bg={useColorModeValue("#f9f1e8", "black")} paddingTop="10px">
        <Footer />
      </Box>
    </Box>
  );
};

export default MovieLayout;
