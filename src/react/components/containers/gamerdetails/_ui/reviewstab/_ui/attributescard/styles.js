import { colorNameToHex } from '../../../../../../../utils/color';

const styles = {
  container: {
    maxWidth: 350,
    minWidth: 260,
    padding: 15,
    width: '31vw',
    height: 265,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    marginTop: 30,
    position: 'relative',
  },

  expandedContainer: {
    height: 720,
  },

  title: {
    fontWeight: 600,
    fontSize: 12,
    textTransform: 'uppercase',
    color: colorNameToHex('regentgray'),
  },

  attributesList: {
    height: '100%',
    overflowY: 'hidden',
  },

  footer: {
    height: 40,
    width: '100%',
    borderTopColor: colorNameToHex('dimgrey'),
    borderTopWidth: 1,
    borderTopStyle: 'solid',
  },

  showAll: {
    width: 79,
    height: 15,
    background: 'none',
    border: 'none',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    marginTop: 20,
  },
};

export default styles;
