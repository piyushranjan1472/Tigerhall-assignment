import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import client from "./graphql/client";
// import { theme } from "./styles/theme";
import Home from "./pages/Home";
import {  ChakraProvider,  extendTheme } from "@chakra-ui/react";
import colors from "./styles/colors";
import { theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={theme} >
      <ApolloProvider client={client}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
