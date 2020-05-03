import React from 'react';
import { NavLink } from 'react-router-dom';
import SignInButton from './SignInButton';
import Svg from '@app/components/Svg';
import logoIcon from './assets/crown.svg';
import './navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <li className="navigation__list-item navigation__logo">
        <NavLink
          to="/"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          <Svg className="navigation__logo-icon" content={logoIcon}/>
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink
          to="/shop"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          Shop
        </NavLink>
      </li>
      <li className="navigation__list-item">
        <NavLink
          to="/shop"
          className="navigation__link"
          activeClassName="navigation__link--active"
        >
          Contacts
        </NavLink>
      </li>
      <SignInButton/>
    </ul>
  </nav>
);

export default Navigation;
