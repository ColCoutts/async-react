import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('quote component', () => {
  it('renders a quote', () => {
    const quote = {
      character: 'Fry',
      quote: 'What?',
      image: '/image'
    };
    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
