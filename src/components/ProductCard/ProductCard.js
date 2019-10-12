import React from 'react';
import './product-card.scss';

const ProductCard = ({ imageUrl, name, price, ...props }) => {
  const imageStyle = { backgroundImage: `url(${imageUrl})` };

  return (
    <section className="product-card" {...props}>
      <div style={imageStyle} className="product-card__image"/>
      <div className="product-card__info">
        <span className="product-card__name">{name}</span>
        <span className="product-card__price">${price}</span>
      </div>
    </section>
  );
};

export default ProductCard;
