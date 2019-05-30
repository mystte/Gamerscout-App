import React, { useEffect, useState, useRef } from "react";
import PropTypes from 'prop-types';

import SVGIcon from '../svgicon/SVGIcon';
import styles from './styles';

export const SELECT_TYPE = {
  DEFAULT: 'SELECT_DEFAULT',
  SIMPLE: 'SELECT_SIMPLE',
};

export const DROPDOWN_TYPE = {
  DEFAULT: 'DROPDOWN_DEFAULT',
};

const DropDown = ({
  onChange,
  options,
  selectType,
}) => {
  const node = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [select, setSelect] = useState(1);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  const onSelect = (selectedItemNumber) => {
    setSelect(selectedItemNumber);
    if (onChange)
      onChange(options[selectedItemNumber - 1]);
  }

  const renderListView = () => {
    return options.map((elem, idx) => {
      const elemLabelStyle = (idx === select - 1) ? {
        ...styles.elemLabel,
        ...styles.elemLabelSelect,
      } : {
          ...styles.elemLabel,
        };

      return (
        <div
          key={elem.name}
          style={styles[`listElem${idx % 2 + 1}`]}
          onClick={() => onSelect(idx + 1)}
        >
          <span
            style={elemLabelStyle}
            className="noselect"
          >
            {elem.name}
          </span>
        </div>
      );
    });
  }

  const toggleListView = () => {
    setIsOpen(!isOpen);
  }

  const getSelectContainerStyle = () => {
    let containerStyle = styles.selectContainer;
    if (selectType === SELECT_TYPE.SIMPLE) {
      containerStyle = {
        ...containerStyle,
        ...styles.selectSimple,
      }
    }

    return containerStyle;
  }

  if (options.length === 0) return null;
  const selectedLabel = options[select - 1].name;
  const containerStyle = getSelectContainerStyle();

  return (
    <div
      ref={node}
      className="dropdown noselect"
      onClick={toggleListView}
      style={containerStyle}>
      <span style={styles.selectedLabel}>{selectedLabel}</span>
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
  };

  DropDown.defaultProps = {
    select: 0,
    selectType: SELECT_TYPE.DEFAULT,
    dropDownType: DROPDOWN_TYPE.DEFAULT,
    onChange: null,
  };

export default DropDown;
