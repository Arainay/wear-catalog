import React from 'react';
import { Registration, SignIn } from '@app/components/Authorization';
import './authorization.scss';

const Authorization = () => (
  <div className="authorization">
    <SignIn className="authorization__section"/>
    <Registration className="authorization__section"/>
  </div>
);

export default Authorization;
