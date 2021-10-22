import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Dashboard, Landing } from "./pages";
import Layout from "./containers/Layout";
import { GlobalStyle } from "./globalStyle";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className="App">
      <GlobalStyle darkTheme={darkTheme} />
      <Router>
        <Layout darkTheme={darkTheme} setDarkTheme={setDarkTheme}>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Landing value={1} />
            </Route>
            <Route exact path={ROUTES.DASHBOARD}>
              <Dashboard value={2} darkTheme={darkTheme}/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
