import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '@app/providers/CurrentUser';
import Header from '@app/components/Header';
import Content from '@app/components/Content';
import MainCatalog from '@app/components/MainCatalog';
import Collections from '@app/components/Collections';
import Category from '@app/components/Category';
import Authorization from '@app/components/Authorization';
import './app.scss';

const App = () => {
  const {
    selectors: {
      getCurrentUser
    }
  } = useContext(CurrentUserContext);

  return (
    <div className="wrapper">
      <Header/>
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
    </div>
  );
};

export default App;
