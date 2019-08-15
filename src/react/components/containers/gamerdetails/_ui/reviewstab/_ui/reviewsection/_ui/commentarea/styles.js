import { colorNameToHex } from '../../../../../../../../../utils/color';

const styles = {
  container: {
    width: '100%',
    height: 139,
    backgroundColor: colorNameToHex('darkgrey'),
    marginTop: 20,
    marginBottom: 10,
    position: 'relative',
  },

  textarea: {
    width: '100%',
    height: 99,
    backgroundColor: colorNameToHex('darkgrey'),
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 9,
    paddingBottom: 15,
    color: colorNameToHex('white'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    fontSize: 14,
    resize: 'none',
    overflow: 'hidden',
    borderBottom: 'none',
  },

  actionsBar: {
    width: '100%',
    height: 48,
    borderTopColor: colorNameToHex('dimgrey'),
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    borderTop: 'none',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  horizontalSeparator: {
    width: 'calc(100% - 30px)',
    minHeight: 1,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: colorNameToHex('dimgrey'),
    position: 'absolute',
    bottom: 46,
  },

  attributesContainer: {
    paddingLeft: 15,
    borderLeftWidth: 1,
    borderLeftColor: colorNameToHex('dimgrey'),
    borderLeftStyle: 'solid',
    height: 30,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  attributeButton: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorNameToHex('dimgrey'),
    border: 'none',
  },

  attributesLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    marginLeft: 10,
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
  },
};

export default styles;
