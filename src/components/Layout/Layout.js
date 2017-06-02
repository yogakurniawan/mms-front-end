import React from 'react';
import PropTypes from 'prop-types';
import {
  FontIcon,
  IconButton,
  AppBar,
  Drawer
} from 'material-ui';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { white } from 'material-ui/styles/colors';
import { Grid } from 'react-flexbox-grid';

const SelectableList = makeSelectable(List);

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lnOpen: false
    };
  }

  handleToggleLeftNav = () => this.setState({ lnOpen: !this.state.lnOpen })

  renderRightIcons() {
    const { logout } = this.props;
    return (
      <div>
        <IconButton>
          <FontIcon color={white} className='material-icons'>settings</FontIcon>
        </IconButton>
        <IconButton onClick={logout}>
          <FontIcon color={white} className='material-icons'>power_settings_new</FontIcon>
        </IconButton>
      </div>
    );
  }

  renderNavMenu() {
    return [
      <ListItem primaryText="Home" href="/home" value="/home" />,
      <SelectableList
        value="main"
      >
        <ListItem
          primaryText="Appointment"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem primaryText="Search Appointment" href="/search-appointment" value="/search-appointment" />,
            <ListItem primaryText="Create Appointment" href="/create-appointment" value="/create-appointment" />,
            <ListItem primaryText="Create Appointment Patient" href="/create-appointment-patient" value="/create-appointment-patient" />
          ]}
        />
        <ListItem
          primaryText="Patient Profiling"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem primaryText="Create Patient Profile" href="/search-patient" value="/search-patient" />,
            <ListItem primaryText="Search Patient Profile" href="/create-patient" value="/create-patient" />
          ]}
        />
      </SelectableList>,
      <ListItem primaryText="Logout" href="/logout" value="/logout" />,
    ];
  }

  render() {
    const { lnOpen } = this.state;
    const { children } = this.props;
    return (
      <div>
        <AppBar
          title=""
          zDepth={0}
          onLeftIconButtonTouchTap={this.handleToggleLeftNav}
          iconElementRight={this.renderRightIcons()} />
        <Drawer onRequestChange={this.handleToggleLeftNav} docked={false} width={300} open={lnOpen}>
          <AppBar
            title="MMS Menu"
            zDepth={0}
          />
          {this.renderNavMenu()}
        </Drawer>
        <Grid fluid id="Layout" className="Layout">
          {children}
        </Grid>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
