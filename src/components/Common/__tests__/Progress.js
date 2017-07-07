import React from 'react';
import { shallow } from 'enzyme';
import CircularProgress from 'material-ui/CircularProgress';

import Progress from '../Progress';

describe('<Progress />', () => {
  it('should render a <CircularProgress />', () => {
    const renderedComponent = shallow(<Progress />);
    expect(renderedComponent.type()).toEqual(CircularProgress);
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Progress />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Progress id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
