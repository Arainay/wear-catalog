import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '@app/services';
import CatalogItem from '@app/components/CatalogItem';
import './main-catalog.scss';

const MainCatalog = () => {
  const [catalog, setCatalog] = useState([]);
  const { catalogService } = useContext(ServiceContext);

  useEffect(() => {
    catalogService.getCatalog()
      .then(data => {
        setCatalog(data);
      });
  }, []);

  return (
    <article className="main-catalog">
      {catalog.map(({ id, ...props }) => (
        <CatalogItem key={id} {...props}/>
      ))}
    </article>
  );
};

export default MainCatalog;
