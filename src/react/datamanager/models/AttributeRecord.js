import { Record, Maybe } from 'typed-immutable';

export const ATTRIBUTE_TYPE = {
  GOOD: 'good',
  NEUTRAL: 'neutral',
  BAD: 'bad',
};

const defaultProps = {
  id: Maybe(String),
  name: Maybe(String),
  type: Maybe(String),
  frequency: Maybe(Number),
  ratio: Maybe(Number),
};

const ExtendsWith = superclass =>
  class extends superclass {
    static get defaultProps() {
      return defaultProps;
    }

    static get ExtendsWith() {
      return ExtendsWith;
    }

    updateStats(frequency = null, ratio = null) {
      return this.withMutations(mutate => {
        if (frequency !== null) mutate.set('frequency', frequency);
        if (ratio !== null) mutate.set('ratio', ratio);
      });
    }
  };

export default class AttributeRecord extends ExtendsWith(
  Record(defaultProps, 'ReviewsCardRecord')
) {
  static apiParser(data) {
    const parsedData = {
      id: data._id ? data._id : null,
      name: data.name ? data.name : null,
      type: data.type ? data.type : ATTRIBUTE_TYPE.NEUTRAL,
      ratio: data.ratio ? data.ratio : 0,
      frequency: data.frequency ? data.frequency : 0,
    };

    return new AttributeRecord(parsedData);
  }
}
