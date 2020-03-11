import React from 'react';
import PropTypes from 'prop-types';

import { getLolItemImgUrl } from '../../../../../../../../../../../../utils/lol';
import styles from './styles';
import UseMediaQueries from '../../../../../../../../../../../views/hooks/UseMediaQueries';

const UsedItems = ({ items, staticDataUrl }) => {
  const { getResponsiveStyle } = UseMediaQueries();
  const renderItemPlaceholder = key => (
    <div
      style={{
        ...styles.itemPlaceHolder,
        ...styles[getResponsiveStyle('itemImg')],
      }}
      key={key}
    ></div>
  );

  const renderTopContainer = () =>
    items
      .filter((item, idx) => idx < 3)
      .map((item, idx) =>
        item !== 0 ? (
          <img
            key={`itemLine1${item}${idx}Icon`}
            style={styles[getResponsiveStyle('itemImg')]}
            alt={`item ${item} icon`}
            src={getLolItemImgUrl(staticDataUrl, item)}
          ></img>
        ) : (
          renderItemPlaceholder(`itemLine1${item}${idx}Icon`)
        )
      );

  const renderBottomContainer = () =>
    items
      .filter((item, idx) => idx >= 3 && idx < 6)
      .map((item, idx) =>
        item !== 0 ? (
          <img
            key={`itemLine2${item}${idx}Icon`}
            style={styles[getResponsiveStyle('itemImg')]}
            alt={`item ${item} icon`}
            src={getLolItemImgUrl(staticDataUrl, item)}
          ></img>
        ) : (
          renderItemPlaceholder(`itemLine1${item}${idx}Icon`)
        )
      );

  const renderWardImg = () =>
    items.get(6) ? (
      <img
        style={styles[getResponsiveStyle('itemImg')]}
        alt={'item ward icon'}
        src={getLolItemImgUrl(staticDataUrl, items.get(6))}
      ></img>
    ) : (
      renderItemPlaceholder()
    );

  return (
    <div style={styles[getResponsiveStyle('container')]}>
      <div style={styles.itemsContainer}>
        <div style={styles.topContainer}>{renderTopContainer()}</div>
        <div style={styles.bottomContainer}>{renderBottomContainer()}</div>
      </div>
      <div style={styles.wardContainer}>{renderWardImg()}</div>
    </div>
  );
};

UsedItems.propTypes = {
  items: PropTypes.object.isRequired,
  staticDataUrl: PropTypes.string,
};

UsedItems.defaultProps = {
  staticDataUrl: null,
};

export default UsedItems;
