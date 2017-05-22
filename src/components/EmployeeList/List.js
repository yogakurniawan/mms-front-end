import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar';
import { darkBlack } from 'material-ui/styles/colors';
import './List.css';

const styles = {
  listContainer: {
    padding: 0
  }
};

class ListComponent extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="List">
        <List style={styles.listContainer}>
          {list && list.map((employee) =>
            <div key={employee.id}>
              <ListItem
                leftAvatar={<Avatar src="http://www.material-ui.com/images/ok-128.jpg" />}
                primaryText={<span style={{ color: darkBlack }}>{`${employee.firstName} ${employee.lastName}`}</span>}
                secondaryText={
                  <p>
                    <span>{`SE - ${employee.grade}, ${employee.subDivision}`}</span><br />
                    <span>{`${employee.office}, ${employee.phone}`}</span>
                  </p>
                }
                secondaryTextLines={2}
              />
              <Divider />
            </div>
          )}
        </List>
      </div >
    );
  }
}

ListComponent.propTypes = {
  list: PropTypes.array
};

export default ListComponent;
