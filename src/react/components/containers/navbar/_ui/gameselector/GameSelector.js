import React from 'react';
import { PropTypes } from 'prop-types';
import DropDown, {
  SELECT_TYPE,
  DROPDOWN_TYPE,
} from '../../../../views/elements/dropdown/DropDown';
import SVGIcon from '../../../../views/elements/svgicon/SVGIcon';
import { GAME_CODE } from '../../../../../datamanager/models/AppRecord';

const GameSelector = ({ onGameSelect, selectedGame }) => {
  const gamesOptions = [
    {
      name: 'default',
      label: 'Choose a Game',
    },
    {
      name: GAME_CODE.LEAGUE_OF_LEGENDS,
      label: 'League of legends',
      icon: <SVGIcon width={28} height={28} name="icons/lol" />,
      listIcon: <SVGIcon width={20} height={20} name="icons/lol" />,
    },
    {
      name: GAME_CODE.VALORANT,
      label: 'Valorant',
      icon: <SVGIcon width={24} height={24} name="icons/valorant" />,
      listIcon: <SVGIcon width={20} height={20} name="icons/valorant" />,
    },
  ];

  console.log('selectedGame', selectedGame);

  return (
    <div>
      <DropDown
        height={50}
        options={gamesOptions}
        selectType={SELECT_TYPE.SIMPLE}
        dropDown={DROPDOWN_TYPE.DEFAULT}
        onChange={onGameSelect}
        selected={gamesOptions.findIndex(e => e.name === selectedGame) + 1}
      />
    </div>
  );
};

GameSelector.propTypes = {
  onGameSelect: PropTypes.func.isRequired,
  selectedGame: PropTypes.string,
};

GameSelector.defaultProps = {
  selectedGame: null,
};

export default GameSelector;
