
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import client from './graphql/client';
import { theme } from './styles/theme';
import Home from './pages/Home';

function App() {
  return (
    <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
  );
}

export default App;
