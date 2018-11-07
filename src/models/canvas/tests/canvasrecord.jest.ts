import CanvasRecord from '../CanvasRecord';
import ElementRecord from '../ElementRecord';

describe('CanvasRecord', () => {

  it('can instanciate CanvasRecord', () => {
    const record = new CanvasRecord();
    expect(record).toBeInstanceOf(CanvasRecord);
  });

  it('can instantiante with elements from object', () => {
    const json = {
      elements: [
        {
          x: 1,
          y: 1,
        },
        {
          x: 1,
          y: 1,
        },
      ],
    };
    const record = new CanvasRecord(json);

    expect(record.elements.size).toBe(2);
    expect(record.elements.get(0)).toBeInstanceOf(ElementRecord);
  });

  it('can add a element to canvas', () => {
    const record = new CanvasRecord();
    expect(record.elements.size).toBe(0);

    const newElementRec = new ElementRecord();
    const record2 = record.addElement(newElementRec);
    expect(record2.elements.size).toBe(1);
  });

  it('can cans select an element', () => {
    const record = new CanvasRecord();

    const elementRecord = new ElementRecord({ id: 'testElement' });
    const recordWithElement = record.addElement(elementRecord);

    const recordWithSelectionElement = recordWithElement.selectElement(elementRecord);
    const elementToBeSelected = recordWithSelectionElement.getElementById(elementRecord.id);

    expect(elementToBeSelected.selected).toBeTruthy();

  });
});
