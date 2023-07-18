import React from 'react';
import { CardStatistics } from '../../types/CardStatistics';
import { Card } from '../Card';
import './ListOfCards.scss';

interface Props {
  cards: CardStatistics[];
  onDelete: (id: string) => void;
}

export const ListOfCards: React.FC<Props> = ({ cards, onDelete }) => {
  return (
    <div className="listOfCard">
      {cards.map((card) => (
        <Card
          card={card}
          onDelete={onDelete}
          key={card.id}
        />
      ))}
    </div>
  );
};
