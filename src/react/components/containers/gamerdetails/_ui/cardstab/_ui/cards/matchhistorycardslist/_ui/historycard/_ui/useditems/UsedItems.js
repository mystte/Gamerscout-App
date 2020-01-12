import React from 'react';
import PropTypes from 'prop-types';

import { getLolItemImgUrl } from '../../../../../../../../../../../../utils/lol';
import styles from './styles';

const UsedItems = ({ items, staticDataUrl }) => {
  const renderItemPlaceholder = key => (
    <div
      style={{
        ...styles.itemPlaceHolder,
        ...styles.itemImg,
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
            style={styles.itemImg}
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
            style={styles.itemImg}
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
        style={styles.itemImg}
        alt={'item ward icon'}
        src={getLolItemImgUrl(staticDataUrl, items.get(6))}
      ></img>
    ) : (
      renderItemPlaceholder()
    );

  return (
    <div style={styles.container}>
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
