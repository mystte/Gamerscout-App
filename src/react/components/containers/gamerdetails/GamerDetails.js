import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadGamerDetails } from '../../../redux/actions/gamerDetails';
import NavHeader from './_ui/navheader/NavHeader';
import CardsGrid from './_ui/cardsgrid/CardsGrid';
import styles from './styles';

const mapStateToProps = state => ({
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
    let renderedContent = null;
    if (!this.props.loading) {
      renderedContent = (
        <div style={styles.container}>
          <NavHeader
            gamertag={this.props.gamerData.gamertag}
            gamerLevel={this.props.gamerData.level}
            region={this.props.gamerData.region}
            gamerIconUrl={this.props.gamerData.gamerIconUrl}
          />
          <CardsGrid />
        </div>
      );
    } else {

    }
    return renderedContent;
  }
}

export default connect(mapStateToProps)(GamerDetails);
