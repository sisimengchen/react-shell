import { SHELL_INCREMENT, SHELL_DECREMENT } from '@constants';

export function increment(amount = 1) {
  return {
    type: SHELL_INCREMENT,
    payload: amount
  };
}

export function decrement(amount = 1) {
  return {
    type: SHELL_DECREMENT,
    payload: amount
  };
}
