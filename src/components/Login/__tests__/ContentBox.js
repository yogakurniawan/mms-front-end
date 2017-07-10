import React from 'react';
import { shallow } from 'enzyme';

import ContentBox from '../ContentBox';

describe('<ContentBox />', () => {
  it('should render a form', () => {
    const renderedComponent = shallow(<ContentBox />);
    expect(renderedComponent.type()).toEqual('form');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<ContentBox />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<ContentBox id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
