import { Record, Maybe } from 'typed-immutable';

export const POPUP_TYPE = {
  SIGNIN: 'POPUP_SIGNIN',
  SIGNUP: 'POPUP_SIGNUP',
  FORGET_PWD: 'POPUP_FORGET_PWD',
  CONFIRM_PWD: 'POPUP_CONFIRM_PWD',
};

const defaultProps = {
  showPopup: Boolean,
  type: Maybe(String),
  params: Object,
};

const ExtendsWith = (superclass) => class extends superclass {
  updateViewContent = (newViewContent) => this.set('viewContent', newViewContent);

  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class PopupRecord extends ExtendsWith(Record(defaultProps, 'PopupRecord')) {
  static apiParser(data) {
    const parsedData = {
      showPopup: data.showPopup ? data.showPopup : false,
      type: data.type ? data.type : null,
      params: data.params ? data.params : null,
    };
    return new PopupRecord(parsedData);
  }
}
