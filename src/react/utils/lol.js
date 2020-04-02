import axios from 'axios';
import { capitalize } from './strings';

export const spellMap = {
  1: 'SummonerBoost',
  2: '',
  3: 'SummonerExhaust',
  4: 'SummonerFlash',
  6: 'SummonerHaste',
  7: 'SummonerHeal',
  11: 'SummonerSmite',
  12: 'SummonerTeleport',
  13: 'SummonerMana',
  14: 'SummonerDot',
  21: 'SummonerBarrier',
  22: 'SummonerSnowball',
  30: 'SummonerPoroRecall',
  31: 'SummonerPoroThrow',
  32: 'SummonerSnowball',
};

export const getItemsJsonData = async url => {
  const json = await axios.get(`${url}/data/en_US/item.json`).then(res => res);
  return json;
};

export const getLolChampionImgUrl = (url, name) =>
  name
    ? `${url}/img/champion/${capitalize(
        name
          .replace("'", '')
          .replace(' ', '')
          .replace('.', '')
      )}.png`
    : null;

export const getLolSpellImgUrl = (url, id = 1) => {
  return `${url}/img/spell/${spellMap[id]}.png`;
};

export const getPerksSpellImgUrl = (url, icon) => {
  return `${url}/img/${icon}`;
};

export const getLolPerksImgUrl = (url, id = 1) => {
  let name = null;

  if (id === 1) {
    name = 'SummonerFlash';
  } else if (id === 2) {
    name = 'SummonerDot';
  }
  return `${url}/img/spell/${name}.png`;
};

export const getLolItemImgUrl = (url, id) => `${url}/img/item/${id}.png`;

export default null;
