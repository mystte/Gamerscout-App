import React, { useState } from "react";
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
};

const DropDown = ({
  onChange,
  options,
  selectType,
  selectContent,
}) => {
  const [select, setSelect] = useState(1);

  const onSelect = (selectedItemNumber) => {
    setSelect(selectedItemNumber);
    if (onChange)
      onChange(options[selectedItemNumber - 1]);
  }

  const renderSelectContent = () => {
    let result = <span style={styles.selectedLabel}>{selectedLabel}</span>;

    if (selectType === SELECT_TYPE.CUSTOM_CONTENT) {
    result = <div style={styles.customSelect}>{selectContent}</div>;
    }

    return result;
  }

  const renderListView = () => {
    return options.map((elem, idx) => {
      const elemLabelStyle = (idx === select - 1) ? {
        ...styles.elemLabel,
        ...styles.elemLabelSelect,
      } : {
        ...styles.elemLabel,
      };

      const elemLabel = (elem.label) ? elem.label : elem.name;
      return (
        <div
          className={"option"}
          key={elem.name}
          style={styles.listElem}
          onClick={() => onSelect(idx + 1)}
        >
          <span
            style={elemLabelStyle}
            className="noselect"
          >
            {elemLabel}
          </span>
        </div>
      );
    });
  }

  const getSelectContainerStyle = () => {
    let containerStyle = styles.selectContainer;
    if (selectType === SELECT_TYPE.SIMPLE ||
      selectType === SELECT_TYPE.CUSTOM_CONTENT) {
      containerStyle = {
        ...containerStyle,
        ...styles.selectSimple,
      }
    }

    return containerStyle;
  }

  if (options.length === 0) return null;
  const selectedLabel = (options[select - 1].label) ? options[select - 1].label : options[select - 1].name;
  const containerStyle = getSelectContainerStyle();
  const { isOpen, toggle, node } = UseModal();

  return (
    <div
      ref={node}
      className="dropdown noselect"
      onClick={toggle}
      style={containerStyle}>
      {renderSelectContent()}
      <SVGIcon
        name="dropdown-array"
        width={7}
        height={4}
      />
      {isOpen &&
        <div
          className="listContainer shadow"
          style={styles.listViewContainer}
        >
          {renderListView()}
        </div>
      }
    </div>
  );
}

  DropDown.propTypes = {
    options: PropTypes.array.isRequired,
    select: PropTypes.number,
    selectType: PropTypes.string,
    dropDownType: PropTypes.string,
    onChange: PropTypes.func,
    selectContent: PropTypes.object,
  };

  DropDown.defaultProps = {
    select: 0,
    selectType: SELECT_TYPE.DEFAULT,
    dropDownType: DROPDOWN_TYPE.DEFAULT,
    onChange: null,
    selectContent: null,
  };

export default DropDown;
