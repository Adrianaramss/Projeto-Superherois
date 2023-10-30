import React from 'react';
import { CarSuper } from './UserCardstyled';

function Card({ hero, onClick }) {
  return (
    <CarSuper onClick={() => onClick(hero)}>
      <div className="card">
        <img src={hero.images.md} alt={hero.name} />
        <h2>{hero.name}</h2>
      </div>
    </CarSuper>
  );
}

export default Card;
