export const getLolChampionImgUrl = (url, name) => ((name)
  ? `${url}/img/champion/${name.replace("'", '')
    .replace(' ', '')
    .replace('.', '')}.png`
  : null);

export const getLolSpellImgUrl = (url, id = 1) => {
  let name = null;

  if (id === 1) {
    name = 'SummonerFlash';
  } else if (id === 2) {
    name = 'SummonerDot';
  }
  return `${url}/img/spell/${name}.png`;
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

export const getLolItemImgUrl = (url, id) => (
  `${url}/img/item/${id}.png`
);

export default null;
