export const getCharacters = (limit = 5) => {
  return fetch(`https://ghibliapi.herokuapp.com/people/?limit=${limit}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch characters';

      return json;
    })
    .then((results) => ({
      characters: results.map(character => ({
        name: character.name,
        gender: character.gender,
        age: character.age,
        films: character.films
      }))
    }));
};
