import { MODAL } from './actionTypes';

export function showModal(type, data = {}) {
  return {
    type: MODAL.SHOW,
    parameters: {
      type: type,
      data: data,
    }
  };
}

export function hideModal() {
  return {
    type: MODAL.HIDE,
  };
}