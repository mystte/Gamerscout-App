import { Record, Maybe } from 'typed-immutable';

const ATTRIBUTE_TYPE = {
  'GOOD': 'ATTRIBUTE_GOOD',
  'NEUTRAL': 'ATTRIBUTE_NEUTRAL',
  'BAD': 'ATTRIBUTE_BAD',
  'UNKNOWN': 'ATTRIBUTE_UNKNOWN',
};

const defaultProps = {
  id: Maybe(String),
  name: Maybe(String),
  type: Maybe(String),
  frequency: Maybe(Number),
  ratio: Maybe(Number)
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class AttributeRecord extends ExtendsWith(Record(defaultProps, 'ReviewsCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      id: data._id ? data._id : null,
      name: data.name ? data.name : null,
      type: data.type ? data.type : ATTRIBUTE_TYPE.NEUTRAL,
      ratio: data.ratio ? data.ratio : 0,
      frequency: data.frequency ? data.frequency : 0,
    }

    return new AttributeRecord(parsedData);
  }
}
