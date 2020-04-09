import React, { lazy, Suspense, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '@app/providers/CurrentUser';
import Header from '@app/components/Header';
import Content from '@app/components/Content';
import './app.scss';

const MainCatalog = lazy(() => import ('@app/components/MainCatalog'));
const Collections = lazy(() => import ('@app/components/Collections'));
const Category = lazy(() => import ('@app/components/Category'));
const Authorization = lazy(() => import ('@app/components/Authorization'));

const App = () => {
  const {
    selectors: {
      getCurrentUser
    }
  } = useContext(CurrentUserContext);

  return (
    <div className="wrapper">
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Content>
          <Switch>
            <Route exact path="/" component={MainCatalog}/>
            <Route exact path="/shop" component={Collections}/>
            <Route exact path="/hats" render={() => <Category name="hats"/>}/>
            <Route exact path="/sneakers" render={() => <Category name="sneakers"/>}/>
            <Route exact path="/jackets" render={() => <Category name="jackets"/>}/>
            <Route exact path="/womens" render={() => <Category name="womens"/>}/>
            <Route exact path="/mens" render={() => <Category name="mens"/>}/>
            <Route
              exact
              path="/sign-in"
              render={() => getCurrentUser() === null ? <Authorization/> : <Redirect to="/"/>}
            />
            <Redirect to="/"/>
          </Switch>
        </Content>
      </Suspense>
    </div>
  );
};

export default App;
