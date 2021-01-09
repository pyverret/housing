import React from 'react';
import Home from './pages/Home';
import CompoundInterest from './pages/CompoundInterest';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme, Container } from "@material-ui/core";
import TopMenu from './components/TopMenu';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

function App() {
  return <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="App">
      <Router>
        <TopMenu />
        <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/compound-interest-calculator" component={CompoundInterest} />
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
