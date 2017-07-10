import React from 'react';
import { mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { renderTextField, renderCheckbox } from '../form';

injectTapEventPlugin();

describe('renderTextField', () => {
    let subject
    it("renders an error message for the input", () => {
      const input = { name: 'firstName', value: '' };
      const label = 'First name';
      const meta = { touched: true, error: 'Required' };
      const Element = renderTextField({ input, label, meta });
      subject = mount(
          <MuiThemeProvider>
            {Element}
          </MuiThemeProvider>);
      const firstNameBlock = subject.find('div').last();
      expect(firstNameBlock).toBeDefined();
      expect(firstNameBlock.text()).toEqual('Required');
    });
});

describe('renderCheckbox', () => {
    let subject
    it("renders an correct label", () => {
      const input = { onChange: jest.fn(), value: '' };
      const label = 'Test';
      const Element = renderCheckbox({ input, label });
      subject = mount(
          <MuiThemeProvider>
            {Element}
          </MuiThemeProvider>);
      const checkBoxLabel = subject.find('label');
      expect(checkBoxLabel).toBeDefined();
      expect(checkBoxLabel.text()).toEqual('Test');
    });
});