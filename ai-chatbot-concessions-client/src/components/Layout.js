import React from "react";
import { Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import routes from "../routes";

const Layout = ({children}) => {

  // return <div>{children}</div>
  return (
    <div>
      {/* Add your header and navigation components here */}
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} exact />
        ))}
      </Switch>
    </div>
  );
};

export default Layout;
