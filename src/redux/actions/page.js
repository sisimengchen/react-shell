export function set({ title = '' }) {
  return {
    type: 'PAGE/TITLE',
    payload: { title }
  };
}
