import React, { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '@app/services';
import Category from '@app/components/Category';

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const { catalogService } = useContext(ServiceContext);

  useEffect(() => {
    catalogService.getCollections()
      .then(data => {
        setCollections(data);
      });
  }, []);

  return (
    <article className="collections">
      <h1 className="collections__page-title">
        Collections
      </h1>
      {collections.map(({ id, name, ...props }) => (
        <Category key={id} limit={4} name={name.toLowerCase()} {...props}/>
      ))}
    </article>
  );
};

export default Collections;
