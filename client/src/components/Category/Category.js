import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext } from '@app/services';
import ProductCard from '@app/components/ProductCard';
import CategoryHeader from './CategoryHeader';
import './category.scss';

const Category = ({ name, limit = null }) => {
  const [products, setProducts] = useState([]);
  const { catalogService } = useContext(ServiceContext);

  useEffect(() => {
    const promise = limit ?
      catalogService.getCollectionByNameAndLimit(name, limit) : catalogService.getCollectionByName(name);

    promise
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, []);

  return (
    <article className="category">
      <CategoryHeader tag={limit ? 'h2' : 'h1'}>
        {limit ? <Link to={`/${name}`}>{name}</Link> : <Fragment>{name}</Fragment>}
      </CategoryHeader>
      <div className="category__products">
        {products.map(props => (
          <ProductCard key={props.id} {...props}/>
        ))}
      </div>
    </article>
  );
};

export default Category;
