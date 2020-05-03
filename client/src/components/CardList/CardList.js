import React from 'react';
import Card from '@app/components/Card';
import './card-list.scss';

const CardList = ({ users }) => (
  <div className="card-list">
    {users.map(item => (
      <Card key={item.id} user={item}/>
    ))}
  </div>
);

export default CardList;
