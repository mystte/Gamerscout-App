import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../svgicon/SVGIcon';
import styles from './styles';
import UseModal from '../../hooks/UseModal';

export const SELECT_TYPE = {
  DEFAULT: 'SELECT_DEFAULT',
  SIMPLE: 'SELECT_SIMPLE',
  CUSTOM_CONTENT: 'SELECT_CUSTOM_CONTENT',
};

export const DROPDOWN_TYPE = {
  DEFAULT: 'DROPDOWN_DEFAULT',
  SIMPLE: 'DROPDOWN_SIMPLE',
};

const DropDown = ({
  onChange,
  options,
  selectType,
  selectContent,
  noSelectFeedback,
  height,
  uppercase,
  selected,
}) => {
  if (options.length === 0) return null;
  const [select, setSelect] = useState(selected || 1);
  const selectedLabel = options[select - 1].label
    ? options[select - 1].label
    : options[select - 1].name;
  const { isOpen, toggle, node } = UseModal();

  useEffect(() => {
    if (selected !== select) {
      setSelect(selected);
    }
  }, [selected]);

  const onSelect = selectedItemNumber => {
    setSelect(selectedItemNumber);
    if (onChange) onChange(options[selectedItemNumber - 1]);
  };

  const getTextTransform = () => ({
    textTransform: uppercase ? 'uppercase' : 'capitalize',
  });

  const renderSelectContent = () => {
    const icon = options[select - 1].icon || null;
    let result = (
      <span
        style={{
          ...styles.selectedLabel,
          ...getTextTransform(),
        }}
      >
        {icon && <div style={styles.icon}>{icon}</div>}
        <div>{selectedLabel}</div>
      </span>
    );

    if (selectType === SELECT_TYPE.CUSTOM_CONTENT) {
      result = (
        <div
          style={{
            ...styles.customSelect,
            ...getTextTransform(),
          }}
        >
          {selectContent}
        </div>
      );
    }

    return result;
  };

  const renderListView = () =>
    options.map((elem, idx) => {
      const elemLabelStyle =
        idx === select - 1 && !noSelectFeedback
          ? {
              ...styles.elemLabel,
              ...styles.elemLabelSelect,
              ...getTextTransform(),
            }
          : {
              ...styles.elemLabel,
              ...getTextTransform(),
            };

      const elemLabel = elem.label ? elem.label : elem.name;
      return elem.name !== 'default' ? (
        <div
          className={'option'}
          key={elem.name}
          style={styles.listElem}
          onClick={() => onSelect(idx + 1)}
        >
          <div style={elemLabelStyle} className="noselect">
            {elem.listIcon && (
              <div style={styles.elemIcon}>{elem.listIcon}</div>
            )}
            {elemLabel}
          </div>
        </div>
      ) : null;
    });

  const getSelectContainerStyle = () => {
    let containerStyle = {
      ...styles.selectContainer,
      height,
    };
    if (
      selectType === SELECT_TYPE.SIMPLE ||
      selectType === SELECT_TYPE.CUSTOM_CONTENT
    ) {
      containerStyle = {
        ...containerStyle,
        ...styles.selectSimple,
      };
    }

    return containerStyle;
  };

  const containerStyle = getSelectContainerStyle();
  const listViewContainerStyle = {
    ...styles.listViewContainer,
    top: height - 2,
  };

  return (
    <div
      ref={node}
      className="dropdown noselect"
      onClick={toggle}
      style={containerStyle}
    >
      {renderSelectContent()}
      <SVGIcon name="dropdown-array" width={7} height={4} />
      {isOpen && (
        <div className="listContainer shadow" style={listViewContainerStyle}>
          {renderListView()}
        </div>
      )}
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.number,
  selectType: PropTypes.string,
  dropDownType: PropTypes.string,
  onChange: PropTypes.func,
  selectContent: PropTypes.object,
  noSelectFeedback: PropTypes.bool,
  uppercase: PropTypes.bool,
  height: PropTypes.number,
};

DropDown.defaultProps = {
  selectType: SELECT_TYPE.DEFAULT,
  dropDownType: DROPDOWN_TYPE.DEFAULT,
  onChange: null,
  selectContent: null,
  noSelectFeedback: false,
  uppercase: false,
  height: 36,
  selected: 1,
};

export default DropDown;
