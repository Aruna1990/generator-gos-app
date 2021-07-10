import React, { FC } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainFrame from './layouts/MainFrame';
import { mainRoutes } from './routes';
import { RouteItem } from './routes/types';
import './App.less';

type AppProps = {
  title?: string;
};

let redirectTo = (!window.location.hash || window.location.hash.substr(1) === '/') ? mainRoutes[0].path.substr(1) : window.location.hash.substr(1);

const App: FC<AppProps> = (props) => (
  <MainFrame menuData={mainRoutes} active="/<%= name %>" appName="<%= name %>">
    <Switch>
      <React.Fragment>
        {
          mainRoutes.map((route: RouteItem) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                render={(routeProps) => {
                  return <route.component {...routeProps} />;
                }}
              />
            );
          })
        }
        <Redirect to={redirectTo}/>
      </React.Fragment>
    </Switch>
  </MainFrame>
);

export default App;
