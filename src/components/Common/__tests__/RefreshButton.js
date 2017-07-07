/**
 * Testing our Button component
 */

import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RefreshButton from '../RefreshButton';

const label = 'Refresh';
const refresh = () => {};
const renderComponent = (props = {}) => mount(
  <MuiThemeProvider><RefreshButton {...props} /></MuiThemeProvider>
);

describe('<RefreshButton />', () => {
  it('should render a <button> tag', () => {
    const renderedComponent = renderComponent({ label, refresh });
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ refresh: onClickSpy });
    renderedComponent.find('a').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });

  // it('should have a className attribute', () => {
  //   const renderedComponent = renderComponent();
  //   expect(renderedComponent.find('a').prop('className')).toBeDefined();
  // });

  // it('should not adopt a type attribute when rendering an <a> tag', () => {
  //   const type = 'text/html';
  //   const renderedComponent = renderComponent({ href, type });
  //   expect(renderedComponent.find('a').prop('type')).toBeUndefined();
  // });

  // it('should not adopt a type attribute when rendering a button', () => {
  //   const type = 'submit';
  //   const renderedComponent = renderComponent({ handleRoute, type });
  //   expect(renderedComponent.find('button').prop('type')).toBeUndefined();
  // });
});
