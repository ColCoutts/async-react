import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders a snapshot', () => {
    const character = {
      name: 'Colin',
      gender: 'Alient',
      age: '-less',
      films: [
        'this film'
      ]
    };

    const wrapper = shallow(<Character character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
