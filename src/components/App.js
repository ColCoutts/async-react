import React, { useState } from 'react';
import TopQuotes from '../containers/quotes/TopQuotes';
import CharacterQuotes from '../containers/quotes/CharacterQuotes';

export default function App() {
  const [quotes, updateQuotes] = useState('top');

  return (
    <>
      <button onClick={() => updateQuotes('top')}>Top Quotes</button>
      <button onClick={() => updateQuotes('characters')}>Pick a character</button>
      {quotes === 'top' && <TopQuotes />}
      {quotes === 'characters' && <CharacterQuotes />}
    </>
  );
}
