import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import ToggleButton from './_ui/togglebutton/ToggleButton';
import { APPROVAL_TYPE } from '../../../../../../../../../../../datamanager/models/ApprovalsCardRecord';

class ApprovalsToggle extends PureComponent {
  static propTypes = {
    preselect: PropTypes.string,
  };

  static defaultProps = {
    preselect: null,
  };

  componentWillMount() {
    if (this.props.preselect === APPROVAL_TYPE.APPROVAL)
      this.setState({ approveSelected: true });
    if (this.props.preselect === APPROVAL_TYPE.DISAPPROVAL) {
      this.setState({ disapproveSelected: true });
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      approveSelected: false,
      disapproveSelected: false,
    };
  }

  onApproveButtonClick = type => {
    this.setState(state => {
      let { approveSelected, disapproveSelected } = state;

      if (type === APPROVAL_TYPE.APPROVAL) {
        approveSelected = !approveSelected;
        disapproveSelected = approveSelected ? false : disapproveSelected;
      } else {
        disapproveSelected = !disapproveSelected;
        approveSelected = disapproveSelected ? false : approveSelected;
      }
      return { approveSelected, disapproveSelected };
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <ToggleButton
          onClick={this.onApproveButtonClick}
          type={APPROVAL_TYPE.APPROVAL}
          selected={this.state.approveSelected}
        />
        <ToggleButton
          onClick={this.onApproveButtonClick}
          type={APPROVAL_TYPE.DISAPPROVAL}
          selected={this.state.disapproveSelected}
        />
      </div>
    );
  }
}

export default ApprovalsToggle;
