export const getLolChampionImgUrl = (name) => `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${name.replace("'", '')}.png`;

export const getLolSpellImgUrl = (id = 1) => {
  let name = null;

  if (id === 1) {
    name = 'SummonerFlash';
  } else if (id === 2) {
    name = 'SummonerDot';
  }
  return `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${name}.png`;
};

export const getLolPerksImgUrl = (id = 1) => {
  let name = null;

  if (id === 1) {
    name = 'SummonerFlash';
  } else if (id === 2) {
    name = 'SummonerDot';
  }
  return `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${name}.png`;
};

export const getLolItemImgUrl = (id) => (
  `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/item/${id}.png`
);

export default null;
