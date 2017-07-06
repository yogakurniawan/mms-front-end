import React from 'react';
import { mount } from 'enzyme';
import { reduxForm } from 'redux-form';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'components/Form/SelectField';
import { Field } from 'redux-form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from '../index';
import ContentBox from '../ContentBox';
import ContainerBox from '../ContainerBox';
import HeaderBox from '../HeaderBox';
import ButtonWrapper from '../ButtonWrapper';
import LogoWrapper from '../Logo';

injectTapEventPlugin();

function setup() {
  const Enhanced = reduxForm({
    form: 'LoginForm'
  })(Login);
  const mockStore = configureStore();
  const enzymeWrapper = mount(<Provider store={mockStore()}><MuiThemeProvider><Enhanced /></MuiThemeProvider></Provider>);

  return {
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Login', () => {
    let wrapper;
    beforeEach(() => {
      const { enzymeWrapper } = setup();
      wrapper = enzymeWrapper;
    });

    it('should render self and subcomponents', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('+++ contains button - RaisedButton', () => {
      expect(wrapper.find(RaisedButton).length).toEqual(1);
    });

    it('+++ contains logo - img', () => {
      expect(wrapper.find('img').length).toEqual(1);
    });

    it('+++ contains HeaderBox', () => {
      expect(wrapper.find(HeaderBox).length).toEqual(1);
    });

    it('+++ contains SelectField', () => {
      expect(wrapper.find(SelectField).length).toEqual(1);
    });

    it('+++ contains Field', () => {
      expect(wrapper.find(Field).length).toEqual(3);
    });

    it('+++ contains ContentBox', () => {
      expect(wrapper.find(ContentBox).length).toEqual(1);
    });

    it('+++ contains ContainerBox', () => {
      expect(wrapper.find(ContainerBox).length).toEqual(1);
    });

    it('+++ contains ButtonWrapper', () => {
      expect(wrapper.find(ButtonWrapper).length).toEqual(1);
    });

    it('+++ contains LogoWrapper', () => {
      expect(wrapper.find(LogoWrapper).length).toEqual(1);
    });
  });
})