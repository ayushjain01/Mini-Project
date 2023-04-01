import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config:{
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
   colors: {
    brand: {
      50: "#ffB628",
      100: "#292825",
      200: "#c5cbe3",
      300: "#a2a4d6",
      400: "#7e81c9",
      500: "#5b5ea8",
      600: "#474a85",
      700: "#343661",
      800: "#20233d",
      900: "#0d1019",
    },
  },
});

export default theme;
