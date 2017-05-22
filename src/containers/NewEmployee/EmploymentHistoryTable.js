import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {
  FontIcon,
  IconButton
} from 'material-ui';
import { grey400 } from 'material-ui/styles/colors';
import {
  employee as employeeActions
} from '../../actions';
import { generate as generateGuid } from '../../utils/uuid';

class EmploymentHistoryTable extends React.Component {
  handleRemoveEmploymentHistory = (id) => (evt) => {
    evt.preventDefault();
    const { deleteEmploymentHistory } = this.props;
    deleteEmploymentHistory(id);
  }

  render() {
    const { employmentHistoryList } = this.props;
    return (
      <Table>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Project</TableHeaderColumn>
            <TableHeaderColumn>Role</TableHeaderColumn>
            <TableHeaderColumn>Start Date</TableHeaderColumn>
            <TableHeaderColumn>End Date</TableHeaderColumn>
            <TableHeaderColumn style={{ width: '10%' }}>Action</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            employmentHistoryList.length > 0 && employmentHistoryList.map((history) => (
              <TableRow key={generateGuid()}>
                <TableRowColumn>{history.projectName}</TableRowColumn>
                <TableRowColumn>{history.projectRole}</TableRowColumn>
                <TableRowColumn>{moment(history.startDate).format('MMMM Do, YYYY')}</TableRowColumn>
                <TableRowColumn>{moment(history.endDate).format('MMMM Do, YYYY')}</TableRowColumn>
                <TableRowColumn style={{ width: '10%' }}>
                  <IconButton onClick={this.handleRemoveEmploymentHistory(history.id)}>
                    <FontIcon color={grey400} className='material-icons'>delete</FontIcon>
                  </IconButton>
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
  }
}

EmploymentHistoryTable.propTypes = {
  employmentHistoryList: PropTypes.array.isRequired,
  deleteEmploymentHistory: PropTypes.func.isRequired
};


const mapDispatchToProps = {
  deleteEmploymentHistory: employeeActions.deleteEmploymentHistory
};

const mapStateToProps = ({ employee }) => ({
  employmentHistoryList: employee && employee.employmentHistoryList
});

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentHistoryTable);