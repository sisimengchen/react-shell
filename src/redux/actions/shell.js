export function increment(amount = 1) {
  return {
    type: 'SHELL/INCREMENT',
    payload: { amount }
  };
}

export function decrement(amount = 1) {
  return {
    type: 'SHELL/DECREMENT',
    payload: { amount }
  };
}
