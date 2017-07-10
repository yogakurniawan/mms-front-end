import React from 'react';
import { mount } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Field, reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import SelectField from '../SelectField';

injectTapEventPlugin();

const items = [
  {
    value: 1,
    text: 'Male'
  },
  {
    value: 2,
    text: 'Female'
  }
];

function setup() {
  const Enhanced = reduxForm({
    form: 'Form'
  })(SelectField);
  const mockStore = configureStore();
  const enzymeWrapper = mount(
    <Provider store={mockStore()}>
      <MuiThemeProvider>
        <Enhanced
          id="test-id"
          name="Test Name"
          label="Test Label"
          items={items}
          fullWidth
        />
      </MuiThemeProvider>
    </Provider>);

  return {
    enzymeWrapper
  }
}

describe('SelectField', () => {
  let wrapper;
  beforeEach(() => {
    const { enzymeWrapper } = setup();
    wrapper = enzymeWrapper;
  });

  it('+++ should render self and subcomponents', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ contains Field', () => {
    expect(wrapper.find(Field).length).toEqual(1);
  });
});