import React, { createContext } from 'react';
import { CatalogService } from '@app/services';

export const ServiceContext = createContext({});

const ServiceProvider = ({ children }) => (
  <ServiceContext.Provider
    value={{
     catalogService: new CatalogService()
    }}
  >
    {children}
  </ServiceContext.Provider>
);

export default ServiceProvider;
