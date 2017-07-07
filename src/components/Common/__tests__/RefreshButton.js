/**
 * Testing our Button component
 */

import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import RefreshButton from '../RefreshButton';

const label = 'Refresh';
const refresh = () => {};
const renderComponent = (props = {}) => mount(
  <MuiThemeProvider><RefreshButton {...props} /></MuiThemeProvider>
);

injectTapEventPlugin();

describe('<RefreshButton />', () => {
  it('should render a <button> tag', () => {
    const renderedComponent = renderComponent({ label, refresh });
    expect(renderedComponent.find('button').length).toEqual(1);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ refresh: onClickSpy });
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
