import { Record, List } from 'typed-immutable';
import ElementRecord from './ElementRecord';

interface ICanvas {
  elements: List<ElementRecord>;
}

const defaultProps = {
  elements: List(ElementRecord),
};

export default class CanvasRecord extends Record<ICanvas>(defaultProps, 'CanvasRecord') {
  setElements(elements: List<ElementRecord>) {
    return this.set('elements', elements);
  }

  addElement(element = new ElementRecord()) {
    return this.update('elements', elements => elements.unshift(element));
  }

  unselectElement(element: ElementRecord) {
    const elementIndex = this.elements.findIndex(e => e!.id === element.id);
    return this.update('elements', elements => elements.update(elementIndex, (item: ElementRecord) => item.set('selected', false)));
  }

  selectElement(element: ElementRecord, previousElement?:ElementRecord) {
    const newElements = this.elements.map((e) => {
      if (e!.id === element.id) { return e!.set('selected', true); }
      if (previousElement && e!.id === previousElement.id) { return e!.set('selected', false); }
      return e;
    }) as List<ElementRecord>;

    return this.set('elements', newElements);
  }

  getElementById(elementId: String) : ElementRecord {
    const index = this.elements.findIndex((item) => {
      return item!.get('id') === elementId;
    });

    return this.elements.get(index);
  }
}
