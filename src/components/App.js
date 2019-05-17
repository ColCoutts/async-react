import React from 'react';
import Characters from './characters/Characters';

export default function App() {
  const characters = [
    {
      name: 'Charles',
      status: 'okay',
      species: 'Alien',
      image: './image'
    }
  ];
  return <Characters characters={characters} />;
}
