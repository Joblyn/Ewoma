import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Landing } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Landing}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
