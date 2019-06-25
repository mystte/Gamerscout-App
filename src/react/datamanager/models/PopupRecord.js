import { Record, Maybe } from 'typed-immutable';

export const POPUP_TYPE = {
  SIGNIN: 'POPUP_SIGNIN',
  SIGNUP: 'POPUP_SIGNUP',
};

const defaultProps = {
  showPopup: Boolean,
  type: Maybe(String),
};

const ExtendsWith = (superclass) => class extends superclass {

  updateViewContent = (newViewContent) => {
    return this.set('viewContent', newViewContent);
  }

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class PopupRecord extends ExtendsWith(Record(defaultProps, 'PopupRecord')) {
  static apiParser(data) {
    const parsedData = {
      showPopup: data.showPopup ? data.showPopup : false,
      type: data.type ? data.type : null,
    };
    return new PopupRecord(parsedData);
  }
}
