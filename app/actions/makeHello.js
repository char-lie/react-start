const MAKE_TEXT = 'MAKE_TEXT';

export const Actions = {
  MAKE_TEXT,
};

export function makeText(text) {
  return {
    type: MAKE_TEXT,
    payload: text,
  };
}
