import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';

class LayoutContainer extends Component {
  render() {
    const { children, title, location } = this.props;
    return (
      <Layout location={location} pageTitle={title}>
        { children }
      </Layout>
    );
  }
}

LayoutContainer.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

const mapDispatchToProps = {
};

const mapStateToProps = ({ global }) => ({
  title: global.pageTitle
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
