import { colorNameToHex } from '../../../../../../../../../../../../utils/color';

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  opponentsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  opponentContainer: {
    flexDirection: 'row',
  },

  teammatesContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  teammateContainer: {
    flexDirection: 'row',
    marginRight: 5,
  },

  summoner: {
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    height: 16,
    width: 53,
    flex: 1,
    cursor: 'pointer',
  },

  opponentSummoner: {
    marginLeft: 8,
  },

  mateSummoner: {
    marginRight: 8,
  },

  championPlaceholder: {
    backgroundColor: colorNameToHex('darkgrey'),
  },

  championImg: {
    width: 15,
    height: 15,
    borderRadius: '50%',
    marginBottom: 1,
  },

  mbChampionImg: {
    width: 25,
    height: 25,
    borderRadius: '50%',
    marginBottom: 1,
  },
};

export default styles;
