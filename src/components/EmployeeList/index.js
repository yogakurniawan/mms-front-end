import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ListComponent from './List';

const EmployeeList = (props) => {
  return (
    <div>
      <SearchBar onChange={props.handleInputChange} />
      <ListComponent list={props.list} />
    </div>
  );
}

EmployeeList.propTypes = {
  handleInputChange: PropTypes.func,
  list: PropTypes.array
}

export default EmployeeList;