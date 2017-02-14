export const Actions = Object.freeze({
  MAKE_TEXT: 'MAKE_TEXT',
});

export function makeText(text) {
  return {
    type: Actions.MAKE_TEXT,
    payload: text,
  };
}
