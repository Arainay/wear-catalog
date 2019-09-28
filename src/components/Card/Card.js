import React, { memo } from 'react';
import './card.scss';

const Card = ({ user }) => (
  <div className="card">
    <h2 className="card__name">{user.name}</h2>
    <img
      src={`https://robohash.org/${user.id}?set=set2`}
      alt={user.name}
      className="card__photo"
    />
    <p className="card__email">{user.email}</p>
  </div>
);

export default memo(Card);
