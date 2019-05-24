import React from 'react';
import PropTypes from 'prop-types';

import ApprovalsCardRecord from '../../../../../../../../datamanager/models/ApprovalsCardRecord';
import DisapprovalsCardRecord from '../../../../../../../../datamanager/models/DisapprovalsCardRecord';
import Localization from '../../../../../../../../config/localization/Localization';
import ApprovalButton from './_ui/approvalbutton/ApprovalButton';
import styles from './styles';

export const APPROVAL_TYPE = {
  APPROVALS: 'APPROVALS',
  DISAPPROVALS: 'DISAPPROVALS',
};

const ApprovalsCard = ({
  approvalsCardRecord,
  onClick,
  type,
}) => {
  if (!approvalsCardRecord) return null;

  const labels = Localization.Labels.gamerDetails;
  const title = (type === APPROVAL_TYPE.APPROVALS) ? labels.approvalsCard.title : labels.disapprovalsCard.title;
  const count = approvalsCardRecord.getCount();
  const containerStyle = (type === APPROVAL_TYPE.APPROVALS) ? {
    ...styles.container,
    ...styles.lastContainer,
  } : styles.container;

  return (
    <div style={containerStyle}>
      <div style={styles.header}>
        <div style={styles.title}>{title}</div>
        {onClick &&
          <div style={styles.buttonContainer}>
            <ApprovalButton
              type={type}
              onClick={onClick}
            />
          </div>
        }
      </div>
      <div style={styles.count}>{count}</div>
    </div>
  );
};

ApprovalsCard.propTypes = {
  approvalsCardRecord: PropTypes.oneOfType([
    PropTypes.instanceOf(ApprovalsCardRecord),
    PropTypes.instanceOf(DisapprovalsCardRecord)
  ]),
  type: PropTypes.string,
  onClick: PropTypes.func,
};

ApprovalsCard.defaultProps = {
  approvalsCardRecord: null,
  type: APPROVAL_TYPE.APPROVALS,
  onClick: null,
};

export default ApprovalsCard;
