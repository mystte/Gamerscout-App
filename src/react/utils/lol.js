export const spellMap = {
  1: 'summonerBoost',
  2: '',
  3: 'summonerExhaust',
  4: 'summonerFlash',
  7: 'summonerHeal',
  11: 'summonerSmite',
  12: 'summonerTeleport',
  13: 'summonerMana',
  14: 'summonerDot',
  21: 'SummonerBarrier',
  22: 'SummonerSnowball',
  32: 'SummonerSnowball',
};

export const getLolChampionImgUrl = (url, name) => ((name)
  ? `${url}/img/champion/${name.replace("'", '')
    .replace(' ', '')
    .replace('.', '')}.png`
  : null);

export const getLolSpellImgUrl = (url, id = 1) => (
  `${url}/img/spell/${spellMap[id]}.png`
);

export const getLolPerksImgUrl = (url, id = 1) => {
  let name = null;

  if (id === 1) {
    name = 'SummonerFlash';
  } else if (id === 2) {
    name = 'SummonerDot';
  }
  return `${url}/img/spell/${name}.png`;
};

export const getLolItemImgUrl = (url, id) => (
  `${url}/img/item/${id}.png`
);

export default null;
