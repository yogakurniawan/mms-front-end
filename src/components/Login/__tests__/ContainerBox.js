import React from 'react';
import { shallow } from 'enzyme';
import { Row } from 'react-flexbox-grid';

import ContainerBox from '../ContainerBox';

describe('<ContainerBox />', () => {
  it('should render a <Row />', () => {
    const renderedComponent = shallow(<ContainerBox />);
    expect(renderedComponent.type()).toEqual(Row);
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<ContainerBox />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<ContainerBox id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });
});
