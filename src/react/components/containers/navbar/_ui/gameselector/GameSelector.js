import React from 'react';
import { PropTypes } from 'prop-types';
import DropDown, {
  SELECT_TYPE,
  DROPDOWN_TYPE,
} from '../../../../views/elements/dropdown/DropDown';
import SVGIcon from '../../../../views/elements/svgicon/SVGIcon';
import { GAME_CODE } from '../../../../../datamanager/models/AppRecord';

const GameSelector = ({ onGameSelect }) => {
  return (
    <div>
      <DropDown
        height={50}
        options={[
          {
            name: GAME_CODE.LEAGUE_OF_LEGENDS,
            label: 'League of legends',
            icon: <SVGIcon width={28} height={28} name="icons/lol" />,
          },
          {
            name: GAME_CODE.VALORANT,
            label: 'Valorant',
            icon: <SVGIcon width={24} height={24} name="icons/valorant" />,
          },
        ]}
        selectType={SELECT_TYPE.SIMPLE}
        dropDown={DROPDOWN_TYPE.DEFAULT}
        onChange={onGameSelect}
      />
    </div>
  );
};

GameSelector.propTypes = {
  onGameSelect: PropTypes.func.isRequired,
};

export default GameSelector;
