import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';

const RefreshButton = ({ label, refresh }) => <FlatButton
    primary
    label={label && label}
    onClick={refresh}
    icon={<NavigationRefresh />}
/>;

RefreshButton.defaultProps = {
    refresh: () => {}
}

RefreshButton.propTypes = {
    label: PropTypes.string,
    refresh: PropTypes.func.isRequired
};

export default RefreshButton;
