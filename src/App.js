import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./componentLibrary/PrivateRoute/PrivateRoute";
import SamplePage from './routes/SamplePage';
import Login from './componentsAdmin/Login/Login';
import {translationReducer} from './reducers/translationsReducer';
import './assets/scss/bootstrap.min.css';
import './assets/scss/pageStructure.scss';

function App() {
  // useEffect(() => {
  //   translationReducer({
  //     type: 'add_translation'
  //   });
  // })
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={SamplePage} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      translationReducer
    },
    dispatch
  );
}

export default connect(mapDispatchToProps)(App);
