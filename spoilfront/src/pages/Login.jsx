import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useColorModeValue
} from "@chakra-ui/react";
import {useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate(); 

     const handleSubmit = async (event) => {
       event.preventDefault();

       const isValid = username === "Adeeb@gay" && password === "Ayushkimaa";

       if (isValid) {
        
         setUsername("");
         setPassword("");
         setLoginError(false);
         navigate("/")
         

       } else {
         setLoginError(true);
       }
     };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"} color={useColorModeValue("white")}>Sign in to your account</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="username">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={useColorModeValue("blue","yellow")} variant={"solid"} type="submit">
                Sign in
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}
