import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {
  FontIcon,
  IconButton,
  AppBar,
  Drawer
} from 'material-ui';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { white } from 'material-ui/styles/colors';
import { Grid } from 'react-flexbox-grid';
import { generate } from 'utils/uuid';

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

  renderLink(text, to) {
    return (
      <Link to={to} style={{ textDecoration: 'none' }}>
        {text}
      </Link>
    );
  }

  renderNavMenu() {
    const { location } = this.props;
    const host = window.location.host;
    const domain = host.substring(4);
    const appointmentUrl = `http://app.${domain}/#/appointment/`;
    return [
      <ListItem key={generate()} onClick={() => this.handleToggleLeftNav()} containerElement={<Link to="/home" />} primaryText="Home" value="/home" /> ,
      <SelectableList
        key={generate()}
        value={location.pathname}
      >
        <ListItem
          primaryText="Appointment"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem onClick={() => this.handleToggleLeftNav()} href={`${appointmentUrl}search`} primaryText="Search Appointment" value="/appointment/search" />,
            <ListItem onClick={() => this.handleToggleLeftNav()} href={`${appointmentUrl}create`} primaryText="Create Appointment" value="/appointment/create" />,
            <ListItem onClick={() => this.handleToggleLeftNav()} containerElement={<a href="#" />} primaryText="Create Appointment Patient" value="/create-appointment-patient" />
          ]}
        />
        <ListItem
          primaryText="Patient Profiling"
          primaryTogglesNestedList={true}
          nestedItems={[
            <ListItem onClick={() => this.handleToggleLeftNav()} containerElement={<Link to="/patient/search" />} primaryText="Search Patient" value="/patient/search" />,
            <ListItem onClick={() => this.handleToggleLeftNav()} containerElement={<Link to="/patient/create" />} primaryText="Create Patient" value="/patient/create" />
          ]}
        />
      </SelectableList> ,
      <ListItem key={generate()} onClick={() => this.handleToggleLeftNav()} containerElement={<Link to="/logout" />} primaryText="Logout" href="/logout" value="/logout" /> ,
    ];
  };

  render() {
    const { lnOpen } = this.state;
    const { children, pageTitle } = this.props;
    return (
      <div>
        <AppBar
          titleStyle={{ fontWeight: 'lighter' }}
          title={pageTitle}
          zDepth={0}
          onLeftIconButtonTouchTap={this.handleToggleLeftNav}
          iconElementRight={this.renderRightIcons()} />
        <Drawer onRequestChange={this.handleToggleLeftNav} docked={false} width={300} open={lnOpen}>
          <AppBar
            titleStyle={{ fontWeight: 'lighter' }}
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
  children: PropTypes.node,
  pageTitle: PropTypes.string,
  location: PropTypes.object.isRequired
};

export default Layout;
