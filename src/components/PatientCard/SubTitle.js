import React from 'react';
import Flexbox from 'flexbox-react';
import FaCircle from 'react-icons/lib/fa/circle';
import styled from 'styled-components';
import moment from 'moment';
import { grey600 } from 'material-ui/styles/colors';

const SubTitleWrapper = styled(Flexbox) `
  align-items: center;
  font-size: 12px;
  font-weight: lighter;
  color: ${grey600};
`;

const BulletDivider = styled(Flexbox) `
  margin-left: 5px;
  margin-right: 5px;
`;

const SubTitle = props => {
  const link = props.patient._links.self.href;
  return (
    <SubTitleWrapper>
      <Flexbox>{link.substr(link.lastIndexOf('/') + 1)}</Flexbox>
      <BulletDivider><FaCircle size={5} /></BulletDivider>
      <Flexbox>{props.patient.gender}</Flexbox>
      <BulletDivider><FaCircle size={5} /></BulletDivider>
      <Flexbox>{moment(props.patient.dob).format('D MMM YYYY')}</Flexbox>
    </SubTitleWrapper>
  )
}

export default SubTitle;