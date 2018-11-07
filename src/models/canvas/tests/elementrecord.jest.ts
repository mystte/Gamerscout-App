import ElementRecord from '../ElementRecord';

describe('ElementRecord', () => {
  it('can instanciate ElementRecord', () => {
    const record = new ElementRecord();

    expect(record).toBeInstanceOf(ElementRecord);
  });

  it('can access x, y, w, h properties', () => {
    const record = new ElementRecord();
    const newRecord = record.set('x', 3);

    expect(newRecord.get('x')).toBeGreaterThanOrEqual(0);
    expect(newRecord.get('y')).toBeGreaterThanOrEqual(0);
    expect(newRecord.get('width')).toBeGreaterThanOrEqual(0);
    expect(newRecord.get('height')).toBeGreaterThanOrEqual(0);
  });

  it('instantiate from object', () => {
    const newRecord = new ElementRecord({ x: 1, y: 1 });

    expect(newRecord.get('x')).toEqual(1);
  });
});
