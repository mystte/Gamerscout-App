import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadGamerDetails } from '../../../redux/actions/gamerDetails';
import NavHeader from './_ui/navheader/NavHeader';
import CardsGrid from './_ui/cardsgrid/CardsGrid';
import styles from './styles';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  gamerData: state.gamerDetails.get('data'),
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
      <React.Fragment>
        {!this.props.loading &&
          <div style={styles.container}>
            <NavHeader
              gamertag={this.props.gamerData.gamertag}
              gamerLevel={this.props.gamerData.level}
              region={this.props.config.getPlatformName(this.props.gamerData.region)}
              gamerIconUrl={this.props.gamerData.gamerIconUrl}
            />
            <CardsGrid />
          </div>
        }
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(GamerDetails);
