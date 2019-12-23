import { colorNameToHex } from '../../../../../utils/color';

const styles = {
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 20,
  },

  navHeader: {
    maxWidth: 1110,
    width: '100%',
    height: 265,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    borderTop: 'none',
    marginBottom: 30,
  },

  navTop: {
    width: '100%',
    height: 220,
    backgroundColor: colorNameToHex('darkgrey'),
    padding: 30,
    flexDirection: 'row',
    position: 'relative',
  },

  navBottom: {
    width: '100%',
    height: 50,
    borderTopWidth: 1,
    borderTopColor: colorNameToHex('dimgrey'),
    borderTopStyle: 'solid',
    borderTopRadius: 1,
  },

  avatar: {
    marginRight: 20,
  },

  avatarName: {
    marginTop: 6,
    marginBottom: 10,
  },

  reviewButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },

  firstRow: {
    flexDirection: 'row',
  },

  secondRow: {
    flexDirection: 'row',
  },

  leftColumn: {
    minWidth: 279,
    width: '31vw',
    maxWidth: 350,
    height: '100%',
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30,
  },

  approvalsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 30,
  },

  disapprovalCard: {
    width: '50%',
  },

  approvalCard: {
    width: '50%',
    marginRight: 10,
  },

  historyColumn: {
    minWidth: 658,
    width: '70vw',
    maxWidth: 730,
    marginRight: 15,
    marginLeft: 15,
    marginTop: 30,
  },
};

export default styles;
