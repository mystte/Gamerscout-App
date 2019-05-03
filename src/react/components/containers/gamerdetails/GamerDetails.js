import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadGamerDetails } from '../../../redux/actions/gamerDetails';
import NavHeader from './_ui/navheader/NavHeader';
import CardsGrid from './_ui/cardsgrid/CardsGrid';
import styles from './styles';

const mapStateToProps = state => ({
  data: state.gamerDetails.get('data'),
  loading: state.gamerDetails.get('loading'),
  error: state.gamerDetails.get('error'),
});
class GamerDetails extends PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  
  componentDidMount() {
    this.props.dispatch(loadGamerDetails());
  };

  render() {
    return (
      <div style={styles.container}>
        <NavHeader />
        <CardsGrid />
      </div>
    );
  }
}

export default connect(mapStateToProps)(GamerDetails);
