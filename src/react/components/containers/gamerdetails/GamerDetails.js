import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    this.props.dispatch(loadGamerDetails(
      this.props.match.params.platform,
      this.props.match.params.region,
      this.props.match.params.game,
      this.props.match.params.gamertag,
    ));
  };

  render() {
    return (
      <React.Fragment>
        {this.props.loading &&
          <div>Loading</div>
        }
        {(!this.props.loading && this.props.gamerData) &&
          <div style={styles.container}>
            <NavHeader
              gamertag={this.props.gamerData.gamertag}
              gamerLevel={this.props.gamerData.level}
              region={this.props.gamerData.region}
              gamerIconUrl={this.props.gamerData.gamerIconUrl}
            />
            <CardsGrid
              gameCode={this.props.gamerData.gameCode}
              platform={this.props.gamerData.platform}
              rankedCardRecord={this.props.gamerData.rankedCardRecord}
            />
          </div>
        }
        {(!this.props.loading && !this.props.gamerData) &&
          <div>No gamer Found</div>
        }
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps)(GamerDetails)
);
