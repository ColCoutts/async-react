import React from 'react';
import Characters from './characters/Characters';

export default function App() {
  const characters = [
    {
      name: 'Colin',
      gender: 'Alien',
      age: 'Some age',
      films: ['A movie', 'Another Movie']
    },
    {
      name: 'Chad',
      gender: 'Alien',
      age: 'Some age',
      films: ['A movie', 'Another Movie']
    },
    {
      name: 'Carl',
      gender: 'Alien',
      age: 'Some age',
      films: ['A movie', 'Another Movie']
    }
  ];

  return (
    <Characters characters={characters} />
  );
}
