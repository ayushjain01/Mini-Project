import React from 'react';
import { Box, Button, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Link ,Text} from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";
import {FiMoon,FiSun} from "react-icons/fi";
import { useColorMode } from '@chakra-ui/color-mode';

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<FaSearch />} />
      <Input type="text" borderRadius="full" bg="#FFB628" placeholder="Search..."  sx={{
        "::placeholder": {
          color: "black",
        },
      }}/>
    </InputGroup>
  );
};





const NavLinks=[
    {label:"Movies",link:"/movies"},
    {label:"Shows",link:"/shows"},
    {label:"Discover",link:"/discover"},
    {label:"About Us",link:"/aboutUs"},
]



const NavLin = ({ href, children }) => {
  return (
    <Link
      href={href}
      _hover={{
        fontWeight: "bold",
        color: "orange.600",
      }}
    >
      {children}
    </Link>
  );
};


const Navbar = () => {
    const {colorMode,toggleColorMode}=useColorMode();
     return (
       <Box
         as="nav"
         bg={colorMode === "light" ? "#f9f1e8" : "black"}
         py="4"
         width="100%"
         fontFamily="Montserrat, sans-serif"
       >
         <Box mx="auto">
           <HStack spacing="8">
             <Box
               fontSize="18px"
               fontWeight="extrabold"
               paddingLeft={9}
               paddingRight={9}
             >
               <Link href="/" textDecoration="none" _hover={"none"}>
                 <Box
                   as="span"
                   color={colorMode === "light" ? "brand.100" : "white"}
                 >
                   We
                 </Box>
                 <Box as="span" color="brand.50">
                   Spoil
                 </Box>
               </Link>
             </Box>
             <Flex justify="space-between" margin="0" flex="1">
               <HStack
                 as="ul"
                 listStyleType="none"
                 fontSize="15px"
                 spacing="10"
                 fontFamily="Montserrat, sans-serif"
                 margin="0"
                 //   fontWeight="semibold"
               >
                 {NavLinks.map((item) => (
                   <li key={item.link}>
                     <NavLin href={item.link}>{item.label}</NavLin>
                   </li>
                 ))}
               </HStack>
             </Flex>
             {/* <Flex justify="space-between" flex="1"> */}
             <HStack paddingRight={10} spacing="8">
               <Box>
                 <SearchBar />
               </Box>
               <Button
                 variant="ghost"
                 fontSize="16px"
                 fontFamily="Montserrat, sans-serif"
                 p={2}
                 onClick={() => toggleColorMode()}
               >
                 {colorMode === "light" ? (
                   <Icon as={FiMoon} fontSize="20px" color="brand.100" />
                 ) : (
                   <Icon as={FiSun} fontSize="20px" color="white" />
                 )}
               </Button>
               <Link to="/login">
                 <Button
                   as={"a"}
                   href='/login'
                   variant="link"
                   fontSize="16px"
                   fontFamily="Montserrat, sans-serif"
                   p={2}
                   _hover={{
                     color: "brand.50",
                   }}
                 >
                   Sign in
                 </Button>
               </Link>
               <Link to="/">
                 <Button
                   variant="link"
                   fontSize="16px"
                   fontFamily="Montserrat, sans-serif"
                   p={2}
                   _hover={{
                     color: "brand.100",
                   }}
                 >
                   Sign up
                 </Button>
               </Link>
             </HStack>
             {/* </Flex> */}
           </HStack>
         </Box>
       </Box>
     );
}
 
export default Navbar;