import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  loadGamerDetails,
  applyReviewFilters,
  doPushReview,
  setGamerDetailsError,
} from '../../../redux/actions/gamerDetails';
import Localization from '../../../config/localization/Localization';
import { BUTTON_TYPE } from './_ui/navheader/_ui/actionbuttons/_ui/actionbutton/ActionButton';
import NavHeader from './_ui/navheader/NavHeader';
import CardsTab from './_ui/cardstab/CardsTab';
import ReviewsTab from './_ui/reviewstab/ReviewsTab';
import LeaguesTab from './_ui/leaguestab/LeaguesTab';
import LiveMatchTab from './_ui/livematchtab/LiveMatchTab';
import ChampionsTab from './_ui/championstab/ChampionsTab';
import GamerNotFound from './_ui/gamernotfound/GamerNotFound';
import GamerSkeleton from './_ui/gamerskeleton/GamerSkeleton';
import styles from './styles';
import { getGamerDetailsUrl } from '../../../config/routes';
import Footer from '../footer/Footer';
import { pushNotification } from '../../../redux/actions/notifications';
import { NOTIFICATION_TYPE } from '../../../datamanager/models/NotificationRecord';
import Validator from '../../../datamanager/api/Validator';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  gamerData: state.gamerDetails.get('data'),
  connectedUser: state.app.getIn(['data', 'user']),
  loading: state.gamerDetails.get('loading'),
  error: state.gamerDetails.get('error'),
});

const GamerDetails = ({
  config,
  dispatch,
  match,
  gamerData,
  loading,
  history,
  connectedUser,
}) => {
  const [selectedTab, setSelectedTab] = useState(BUTTON_TYPE.OVERVIEW);
  const [preselect, setPreselect] = useState(null);
  const [notifLabels] = useState(Localization.Labels.notifications);

  useEffect(() => {
    dispatch(
      loadGamerDetails(
        match.params.platform,
        match.params.region,
        match.params.game,
        match.params.gamertag
      )
    );
  }, []);

  const selectTab = (tabType, preselectTab = null) => {
    if (selectedTab !== tabType) {
      setPreselect(preselectTab);
      setSelectedTab(tabType);
    }
  };

  const onSelectHeaderTab = buttonType => {
    if (buttonType !== selectedTab) {
      setSelectedTab(buttonType);
    }
  };

  const onApprovalButtonClick = type => {
    console.log(`on ${type} button button click`);
    setSelectedTab();
    selectTab(BUTTON_TYPE.REVIEWS, type);
  };

  const onReviewButtonClick = () => {
    console.log('On review button click');
    selectTab(BUTTON_TYPE.REVIEWS);
  };

  const onReviewSubmitClick = ({
    review,
    selectedAttributes,
    isApproval,
    isDisapproval,
  }) => {
    if (selectedTab !== BUTTON_TYPE.REVIEWS) {
      setSelectedTab(BUTTON_TYPE.REVIEWS);
      return;
    }
    if (!connectedUser) {
      dispatch(
        pushNotification({
          title: notifLabels.accountRequired.title,
          type: NOTIFICATION_TYPE.WARNING,
        })
      );
    } else {
      const error = Validator.doPostReviewValidation(
        review,
        selectedAttributes,
        isApproval,
        isDisapproval
      );
      if (error !== true) {
        dispatch(setGamerDetailsError(error));
      } else {
        dispatch(
          doPushReview({
            gamerId: gamerData.gamerId,
            review,
            selectedAttributes,
            isApproval,
            isDisapproval,
            username: connectedUser.username,
          })
        );
      }
    }
  };

  const getStaticDataUrlForPlatform = () =>
    config ? config.getStaticDataUrlForPlatform(match.params.platform) : null;

  const onReviewFilterChange = (show, filterBy) => {
    dispatch(
      applyReviewFilters(
        gamerData.reviewsCardRecord.applyReviewsFilter(show, filterBy)
      )
    );
  };

  const doSearchPlayer = gamer => {
    history.push(
      getGamerDetailsUrl(
        gamerData.platform,
        gamerData.region,
        gamerData.gameCode,
        gamer
      )
    );
    dispatch(
      loadGamerDetails(
        gamerData.platform,
        gamerData.region,
        gamerData.gameCode,
        gamer
      )
    );
  };

  const renderGamerDetailsContent = () => {
    let content = null;
    if (selectedTab === BUTTON_TYPE.OVERVIEW) {
      content = (
        <CardsTab
          gamertag={gamerData.gamertag}
          gameCode={gamerData.gameCode}
          platform={gamerData.platform}
          rankedCardRecord={gamerData.rankedCardRecord}
          championsCardRecord={gamerData.championsCardRecord}
          approvalsCardRecord={gamerData.approvalsCardRecord}
          disapprovalsCardRecord={gamerData.disapprovalsCardRecord}
          reviewsCardRecord={gamerData.reviewsCardRecord}
          onApprovalButtonClick={onApprovalButtonClick}
          onReviewButtonClick={onReviewButtonClick}
          trendsCardRecord={gamerData.trendsCardRecord}
          historyCardList={gamerData.gameHistoryList}
          staticDataUrl={getStaticDataUrlForPlatform()}
          doSearchPlayer={doSearchPlayer}
        />
      );
    } else if (selectedTab === BUTTON_TYPE.REVIEWS) {
      content = (
        <ReviewsTab
          approvalsCardRecord={gamerData.approvalsCardRecord}
          disapprovalsCardRecord={gamerData.disapprovalsCardRecord}
          reviewsCardRecord={gamerData.reviewsCardRecord}
          attributesList={gamerData.attributesList}
          onReviewSubmitClick={onReviewSubmitClick}
          preselect={preselect}
          onReviewFilterChange={onReviewFilterChange}
        />
      );
    } else if (selectedTab === BUTTON_TYPE.CHAMPIONS) {
      content = <ChampionsTab />;
    } else if (selectedTab === BUTTON_TYPE.LEAGUES) {
      content = <LeaguesTab />;
    } else if (selectedTab === BUTTON_TYPE.LIVE_MATCH) {
      content = <LiveMatchTab />;
    }

    return content;
  };

  if (!config) return null;
  return (
    <>
      {loading && <GamerSkeleton />}
      {!loading && gamerData && (
        <div style={styles.container}>
          <NavHeader
            selectedTab={selectedTab}
            gamertag={gamerData.gamertag}
            gamerLevel={gamerData.level}
            region={gamerData.region}
            gamerIconUrl={`${getStaticDataUrlForPlatform()}${
              gamerData.gamerIconUrl
            }`}
            onSelectTab={onSelectHeaderTab}
            onReviewSubmitClick={onReviewSubmitClick}
            staticDataUrl={getStaticDataUrlForPlatform()}
          />
          {renderGamerDetailsContent()}
        </div>
      )}
      {!loading && !gamerData && <GamerNotFound />}
      <Footer />
    </>
  );
};

GamerDetails.propTypes = {
  config: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  gamerData: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  connectedUser: PropTypes.object,
};

GamerDetails.defaultProps = {
  config: null,
  gamerData: null,
  connectedUser: null,
};

export default withRouter(connect(mapStateToProps)(GamerDetails));
