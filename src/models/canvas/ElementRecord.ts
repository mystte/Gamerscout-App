import { Record } from 'typed-immutable';

interface IElement {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  selected: boolean;
}

const defaultProps = {
  id: '00',
  x: 0,
  y: 0,
  width: 40,
  height: 40,
  selected: false,
};

export default class ElementRecord extends Record<IElement>(defaultProps, 'ElementRecord') {
}
