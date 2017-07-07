import React from 'react';
import { shallow } from 'enzyme';
import CircularProgress from 'material-ui/CircularProgress';

import Mask from '../Mask';

describe('<Mask />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<Mask />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Mask />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Mask id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
