import React, { FC, useEffect, useState } from 'react';
import { alarmRoutes } from '../../routes';
import AlarmFrame from '../../layouts/AlarmFrame';
import { Redirect, Route, HashRouter as Router, Switch } from 'react-router-dom';
import { RouteItem } from '../../routes/types';

const Alarm: FC = (props) => {
  const [defaultRoute, setDefaultRoute] = useState("/page1/tab1");
  useEffect(() => {
    console.log('hash is changed');
    const hash = window.location.hash.split('#')[1];
    if (hash.split('/').length > 2) {
      setDefaultRoute(hash);
    }
  }, [])

  return (
      <Router>
        <AlarmFrame menuData={alarmRoutes}>
          <Switch>
            <React.Fragment>
              {alarmRoutes.map((route: RouteItem) => {
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
              })}
              <Redirect to={defaultRoute} />
            </React.Fragment>
          </Switch>
        </AlarmFrame>
      </Router>
  );
}

export default Alarm;
