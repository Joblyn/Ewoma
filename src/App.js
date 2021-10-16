import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Dashboard, Landing } from "./pages";
import Layout from "./containers/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <Landing value={1}/>
            </Route>
            <Route exact path={ROUTES.DASHBOARD}>
              <Dashboard value={2}/>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
