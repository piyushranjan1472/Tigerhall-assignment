import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import Home from "./pages/Home";
import {  ChakraProvider } from "@chakra-ui/react";
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
