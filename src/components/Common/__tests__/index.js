import React from 'react';
import { shallow } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LoadingMask from '../LoadingMask';
import Progress from '../Progress';

injectTapEventPlugin();

describe('components', () => {
  describe('LoadingMask', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<LoadingMask />);
    });

    it('+++ should render self and subcomponents', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('+++ contains Progress', () => {
      expect(wrapper.find(Progress).length).toEqual(1);
    });
  });
})