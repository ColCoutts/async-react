import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  const {
    name,
    gender,
    age,
    films
  } = character;

  return (
    <section>
      <p>{name}</p>
      <p>{gender}</p>
      <p>{age}</p>
      <p>{films}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    films: PropTypes.array.isRequired
  }).isRequired
};

export default Character;
