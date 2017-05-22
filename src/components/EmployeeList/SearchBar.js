import React from 'react';
import PropTypes from 'prop-types';
import {
  TextField,
  FontIcon,
} from 'material-ui';
import { white } from 'material-ui/styles/colors';
import './SearchBar.css';

const styles = {
  inputStyle: {
    color: white
  },
  hintStyle: {
    color: white
  },
  underlineStyle: {
    borderColor: "#5c6bc0"
  },
  underlineFocusStyle: {
    borderColor: white
  }
};

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <span className="SearchBar__IconSearch">
          <FontIcon color={white} className='material-icons'>search</FontIcon>
        </span>
        <span>
          <TextField
            inputStyle={styles.inputStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
            hintStyle={styles.hintStyle}
            hintText="Search" />
        </span>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func
}

export default SearchBar;
