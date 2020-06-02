import React from "react";
import { Route, Redirect } from "react-router-dom";
import pageJSON from  '../../pageJSON/sampleSite.json';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // Add your own authentication on the below line
  const isLoggedIn = pageJSON.siteConfigured;
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};



export default PrivateRoute;
