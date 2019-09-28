import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './catalog-item.scss';

const CatalogItem = ({ title, imageUrl, url, match }) => {
  const style = { backgroundImage: `url(${imageUrl})` };

  return (
    <Link to={`${match.url}${url}`} className="catalog-item">
      <div style={style} className="catalog-item__bg"/>
      <div className="catalog-item__info">
        <header className="catalog-item__title">{title}</header>
        <span className="catalog-item__subtitle">Shop now</span>
      </div>
    </Link>
  );
};

export default withRouter(CatalogItem);
