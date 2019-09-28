import React, { createElement } from 'react';
import './category-header.scss';

const CategoryHeader = ({ tag = 'h1', children, ...props }) => createElement(
  tag,
  {
    ...props,
    className: 'category-header'
  },
  children
);

export default CategoryHeader;
