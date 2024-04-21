import { Box, Flex, Heading, Text,useColorModeValue, Button } from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CardsDataContext } from "../components/CardContext";
import ActionMovies from "./ActionMovies.json"

const DiscoverLayout = ({ heading, description, cardData }) => {

  const { cardsData, setCardsData } = useContext(CardsDataContext);


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
          color={useColorModeValue("black", "white")}
          sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
        >
          {description}
        </Text>
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
            bg={useColorModeValue("brand.50", "black")}
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color={useColorModeValue("black", "white")}
            fontWeight="extrabold"
          >
            Newly
          </Box>
          <Box
            position="absolute"
            top="-12px"
            left="168px"
            width="80px"
            height="25px"
            bg="brand.50"
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color={useColorModeValue("white", "black")}
            fontWeight="extrabold"
          >
            Added
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1A202c")}></Box>
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
            bg={useColorModeValue("brand.50", "black")}
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color={useColorModeValue("black", "white")}
            fontWeight="extrabold"
          >
            Movies for
          </Box>
          <Box
            position="absolute"
            top="-12px"
            left="198px"
            width="50px"
            height="25px"
            bg={useColorModeValue("brand.50", "black")}
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color={useColorModeValue("white", "brand.50")}
            fontWeight="extrabold"
          >
            You
          </Box>
        </Box>
        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={ActionMovies} />
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
            bg={useColorModeValue("brand.50", "black")}
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color={useColorModeValue("black", "white")}
            fontWeight="extrabold"
          >
            Shows for
          </Box>
          <Box
            position="absolute"
            top="-12px"
            left="195px"
            width="60px"
            height="25px"
            bg={useColorModeValue("brand.50", "black")}
            paddingX={2}
            fontFamily="Montserrat, sans-serif"
            color={useColorModeValue("white", "brand.50")}
            fontWeight="extrabold"
          >
            You
          </Box>
        </Box>

        <Box width="100%" marginTop={8} marginBottom={8}>
          <Carousel cardData={cardData} />
        </Box>
        <Box height={12} bg={useColorModeValue("#f9f1e8", "#1a202c")}></Box>
      </Flex>
      <Box bg={useColorModeValue("#f9f1e8", "black")} paddingTop="20px">
        <Footer />
      </Box>
    </Box>
  );
};

export default DiscoverLayout;
