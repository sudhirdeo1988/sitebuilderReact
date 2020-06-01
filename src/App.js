import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./componentLibrary/PrivateRoute/PrivateRoute";
import SamplePage from './routes/SamplePage';
import './assets/scss/bootstrap.min.css';
import './assets/scss/pageStructure.scss';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={SamplePage} />
      </Switch>
    </Router>
  );
}

export default App;
