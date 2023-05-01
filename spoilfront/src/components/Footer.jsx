import { Box,Button, HStack, VStack ,Menu,MenuButton,MenuList,MenuItem, useColorModeValue} from "@chakra-ui/react";
import watchtvbg from '../assets/watchtvbgrot.png';
import { ChevronDownIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <div className="footer">
      <Box
        backgroundImage={watchtvbg}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        bgSize="100%"
        objectFit="cover"
        marginX={9}
        marginBottom={4}
        paddingBottom={4}
        h="33vh"
        backgroundSize="100%"
        borderTopLeftRadius="200px"
        position="relative"
      >
        <VStack
          position="absolute"
          right="0"
          top="0"
          color={useColorModeValue("black", "white")}
          fontFamily="Montserrat, sans-serif"
          fontSize="26px"
          fontWeight="extrabold"
          paddingTop={4}
          paddingRight={4}
          align="right"
          spacing={4}
        >
          <HStack alignSelf="flex-end" paddingRight={4}>
            <Box>We have a lot more to</Box>
            <Box color={useColorModeValue("white", "black")}>SPOIL!</Box>
          </HStack>
          <Box
            color={useColorModeValue("white", "black")}
            fontFamily="Montserrat, sans-serif"
            fontSize="15px"
            fontWeight="thin"
            paddingTop={2}
            paddingRight={4}
            paddingLeft="50%"
            align="right"
          >
            Get ready to have your viewing experience transformed! With WeSpoil,
            you'll have access to spoilers for a vast library of TV shows and
            movies, ensuring you never waste your time on disappointing endings
            again.
          </Box>
          <Box paddingLeft="50%" align="right" paddingRight={4}>
            <Button
              rounded={"full"}
              bg={useColorModeValue("black", "white")}
              color={useColorModeValue("white", "black")}
              _hover={{
                bg: useColorModeValue("black.400", "white"),
              }}
            >
              Spoil Now
            </Button>
          </Box>
        </VStack>
      </Box>

      <Box position="relative" width="100%">
        <VStack
          bg={useColorModeValue("white", "black")}
          width="100%"
          height="80px"
          bottom="-60px"
          position="absolute"
          margin="0"
          padding="0"
          fontWeight="light"
          fontSize="14px"
          alignItems="right"
          paddingTop={2}
          paddingX={12}
        >
          <HStack spacing={1}>
            <Box align="right">Read about</Box>
            <Box>
              <Box
                as="span"
                color={useColorModeValue("black", "white")}
                fontWeight="extrabold"
              >
                We
              </Box>
              <Box as="span" fontWeight="extrabold" color="#ffb628">
                Spoil
              </Box>
            </Box>
          </HStack>
          <Box>Questions? Contact us.</Box>
        </VStack>

        <VStack
          bg={useColorModeValue("white", "black")}
          width="100%"
          height="100px"
          bottom="-160px"
          position="absolute"
          margin="0"
          padding="0"
          fontWeight="light"
          fontSize="14px"
          alignItems="right"
          paddingX={12}
        >
          <HStack spacing={4}>
            <Box width="70px">FAQ</Box>
            <Box>Terms of Use</Box>
          </HStack>
          <HStack spacing={4}>
            <Box w="70px">Help Center</Box>
            <Box>Privacy Policy</Box>
          </HStack>
          <HStack spacing={4} paddingBottom={"10px"}>
            <Box w="70px">Account</Box>
            <Box>Cookie Preferences</Box>
          </HStack>

          <Menu>
            <MenuButton
              height={10}
              width="150px"
              as={Button}
              bg={useColorModeValue("black", "white")}
              color={useColorModeValue("white", "black")}
              rightIcon={<ChevronDownIcon />}
              fontFamily="Montserrat, sans-serif"
              fontSize="16px"
              paddingY={2}
            >
              English
            </MenuButton>
            <MenuList width="150px">
              <MenuItem>Kannada</MenuItem>
              <MenuItem>Hindi</MenuItem>
              <MenuItem>Russian</MenuItem>
              <MenuItem>Spanish</MenuItem>
              <MenuItem>French</MenuItem>
            </MenuList>
          </Menu>

          <Box
            position="relative"
            right="0"
            top="0"
            color={useColorModeValue("black", "white")}
            fontFamily="Montserrat, sans-serif"
            fontSize="30px"
            fontWeight="extrabold"
            align="right"
            marginRight={12}
            marginTop={4}
          >
            <Box as="span">We</Box>
            <Box as="span" color="#ffb628">
              Spoil
            </Box>
          </Box>

          <Box
            position="relative"
            right="0"
            top="0"
            color={useColorModeValue("black", "white")}
            fontFamily="Montserrat, sans-serif"
            fontSize="10px"
            fontWeight="extrabold"
            marginRight={12}
            align="right"
          >
            Copyright, WeSpoil
          </Box>
        </VStack>
      </Box>
      <Box
        height={12}
        bg={useColorModeValue("#ffb628", "black")}
        position="relative"
        w="95%"
        bottom="-290px"
        marginLeft={10}
        marginRight={12}
        marginBottom={12}
      />
    </div>
  );
}
 
export default Footer;