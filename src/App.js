import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Landing } from "./pages";
import Layout from "./containers/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Landing} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
