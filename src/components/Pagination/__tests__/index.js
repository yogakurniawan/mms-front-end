import React from 'react';
import { mount } from 'enzyme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshButton from 'components/Common/RefreshButton';
import Pagination from '../index';

injectTapEventPlugin();

describe('<Pagination />', () => {
  describe('mobile', () => {
    it('renders correctly', () => {
      const tree = renderer.create(
        <MuiThemeProvider>
          <Pagination
            refresh={jest.fn()}
            page={2}
            perPage={10}
            total={20}
            setPage={jest.fn()}
          />
        </MuiThemeProvider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render a condensed <Toolbar>', () => {
      const wrapper = mount(<MuiThemeProvider>
        <Pagination page={2} perPage={5} total={15} width={1} />
      </MuiThemeProvider>);
      const iconButtons = wrapper.find(IconButton);
      expect(iconButtons.length).toEqual(2);
      const flatButtons = wrapper.find(FlatButton);
      expect(flatButtons.length).toEqual(0);
    });

    it('should render only the text when no pagination is necessary', () => {
      const page = 1;
      const perPage = 20;
      const total = 15;
      const offsetEnd = Math.min(page * perPage, total);
      const offsetBegin = Math.min((page - 1) * perPage + 1, offsetEnd);
      const wrapper = mount(
        <MuiThemeProvider>
          <Pagination page={page} perPage={perPage} total={total} width={1} />
        </MuiThemeProvider>);
      const iconButtons = wrapper.find(IconButton);
      expect(iconButtons.length).toEqual(0);
      const span = wrapper.find('span');
      expect(span.text()).toEqual(`${offsetBegin}-${offsetEnd} of ${total}`);
    });
  });

  describe('desktop', () => {
    it('should render a normal <Toolbar>', () => {
      const wrapper = mount(<MuiThemeProvider>
        <Pagination page={2} perPage={5} total={15} width={2} />
      </MuiThemeProvider>);
      const iconButtons = wrapper.find(IconButton);
      expect(iconButtons.length).toEqual(0);
      const flatButtons = wrapper.find(FlatButton);
      expect(flatButtons.length).toEqual(6);
    });

    it('should render a <RefreshButton>', () => {
      const wrapper = mount(<MuiThemeProvider>
        <Pagination page={2} perPage={5} total={15} width={2} />
      </MuiThemeProvider>);
      const refreshButton = wrapper.find(RefreshButton);
      expect(refreshButton.length).toEqual(1);
    });

    it('should render only the text when no pagination is necessary', () => {
      const page = 1;
      const perPage = 20;
      const total = 15;
      const offsetEnd = Math.min(page * perPage, total);
      const offsetBegin = Math.min((page - 1) * perPage + 1, offsetEnd);
      const wrapper = mount(<MuiThemeProvider>
        <Pagination page={page} perPage={perPage} total={total} width={2} />
      </MuiThemeProvider>);
      const flatButtons = wrapper.find(FlatButton);
      expect(flatButtons.length).toEqual(1);
      const span = wrapper.find('span.displayed-records');
      expect(span.text()).toEqual(`${offsetBegin}-${offsetEnd} of ${total}`);
    });
  });
});