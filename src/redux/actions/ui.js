import { UI_BUSY } from '@constants';

export function busy(isBusy = false) {
  return {
    type: UI_BUSY,
    payload: isBusy
  };
}
