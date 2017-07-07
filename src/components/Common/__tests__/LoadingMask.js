import React from 'react';
import { mount } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoadingMask from '../LoadingMask';
import Progress from '../Progress';

injectTapEventPlugin();

const wrapper = mount(
  <MuiThemeProvider>
    <LoadingMask />
  </MuiThemeProvider>
);

describe('LoadingMask', () => {

  it('+++ should render self and subcomponents', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains Progress', () => {
    expect(wrapper.find(Progress).length).toEqual(1);
  });

  it('+++ should render 3 divs', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });
});