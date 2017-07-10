import React from 'react';
import { shallow } from 'enzyme';
import CircularProgress from 'material-ui/CircularProgress';

import HeaderBox from '../HeaderBox';

describe('<HeaderBox />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<HeaderBox />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<HeaderBox />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<HeaderBox id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
