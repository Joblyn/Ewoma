import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Dashboard, Landing, Signin, Signup } from "./pages";
import Layout from "./containers/Layout";
import { GlobalStyle } from "./globalStyle";
import "./utils/otp.js";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className="App">
      <GlobalStyle darkTheme={darkTheme} />
      <Router>
        <Switch>
          <Route path={ROUTES.SIGNIN}>
            <Signin value={3} darkTheme={darkTheme} />
          </Route>
          <Route path={ROUTES.SIGNUP}>
            <Signup value={4} darkTheme={darkTheme} />
          </Route>
          <Layout darkTheme={darkTheme} setDarkTheme={setDarkTheme}>
            <Switch>
              <Route exact path={ROUTES.HOME}>
                <Landing value={1} />
              </Route>
              <Route path={ROUTES.DASHBOARD}>
                <Dashboard value={2} darkTheme={darkTheme} />
              </Route>
            </Switch>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
