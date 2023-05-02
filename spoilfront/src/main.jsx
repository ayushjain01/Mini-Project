import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import {ColorModeScript} from '@chakra-ui/react'
import theme from './theme/index'
import { CardsDataProvider } from './components/CardContext'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <CardsDataProvider>
          <App />
        </CardsDataProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
