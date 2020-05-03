import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ServiceProvider from '@app/services';
import CurrentUserProvider from '@app/providers/CurrentUser';
import App from '@app/components/App';

render(
  <BrowserRouter>
    <ServiceProvider>
      <CurrentUserProvider>
        <App/>
      </CurrentUserProvider>
    </ServiceProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
