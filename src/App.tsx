import React from 'react';
import Home from './pages/Home';
import InvestmentCalculator from './pages/InvestmentCalculator';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, createMuiTheme, Container } from '@material-ui/core';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        type: 'light'
    }
});

function App() {
    return <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main className="App">
                <Router>
                    <Navigation />
                    <Container>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/investment-calculator" component={InvestmentCalculator} />
                            {/* <Route path="information" component={Information} /> */}
                            {/* <Route path="contact" component={Contact} /> */}
                            {/* <Route path="*" component={NotFound} /> */}
                        </Switch>
                    </Container>
                </Router>
            </main>
        </ThemeProvider>
    </>;
}

export default App;
