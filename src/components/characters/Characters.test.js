import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters component', () => {
  it('renders a snapshot', () => {
    const characters = [
      {
        name: 'Colin',
        gender: 'Alient',
        age: '-less',
        films: [
          'this film'
        ]
      },
      {
        name: 'Chad',
        gender: 'Alient',
        age: '-less',
        films: [
          'this film'
        ]
      },
      {
        name: 'Chris',
        gender: 'Alient',
        age: '-less',
        films: [
          'this film'
        ]
      }
    ];

    const wrapper = shallow(<Characters characters={characters} />)
    expect(wrapper).toMatchSnapshot();
  });
});
