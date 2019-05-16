import React from 'react';
import { shallow } from 'enzyme';
import Quotes from './Quotes';

describe('Quotes compenent', () => {
  it('renders a quote', () => {
    const quotes = [
      {
        character: 'Fry',
        quote: 'wuat',
        image: './image'
      },
      {
        character: 'Fry',
        quote: 'wuat',
        image: './image'
      },
      {
        character: 'Fry',
        quote: 'wuat',
        image: './image'
      }
    ];

    const wrapper = shallow(<Quotes quotes={quotes} />);
    expect(wrapper).toMatchSnapshot();
  });
});
