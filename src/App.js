import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./componentLibrary/PrivateRoute/PrivateRoute";
import SamplePage from './routes/SamplePage';
import Login from './componentsAdmin/Login/Login';
import './assets/scss/bootstrap.min.css';
import './assets/scss/pageStructure.scss';

function App() {

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={SamplePage} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
