export const computeWinRate = (wins, losses) => (
  Math.round((wins * 100) / (wins + losses))
);

export const computeKda = (kills, assists, deaths = 1) => {
  const newDeaths = (deaths === 0) ? 1 : deaths;
  return Math.round(((kills + assists) / newDeaths) * 10) / 10;
};

export default null;
