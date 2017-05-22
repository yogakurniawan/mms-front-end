import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import PersonOutline from 'material-ui/svg-icons/social/person-outline';
import Restore from 'material-ui/svg-icons/action/restore';
import Layers from 'material-ui/svg-icons/maps/layers';
import Place from 'material-ui/svg-icons/maps/place';

const TabsComponent = (props) => {
  return (
    <Tabs tabItemContainerStyle={{ backgroundColor: '#5c6bc0', height: '49px' }}>
      <Tab icon={<PersonOutline />}>
        <div>
          { props.employee }
        </div>
      </Tab>
      <Tab icon={<Restore />}>
        <div>
          { props.history }
        </div>
      </Tab>
      <Tab icon={<Layers />}>
        <div>
          { props.grade }
        </div>
      </Tab>
      <Tab icon={<Place />}>
        <div>
          { props.location }
        </div>
      </Tab>
    </Tabs>
  );
}

TabsComponent.propTypes = {
  employee: PropTypes.node,
  history: PropTypes.node,
  grade: PropTypes.node,
  location: PropTypes.node
};

export default TabsComponent;
