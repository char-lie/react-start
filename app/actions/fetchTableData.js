import { fetchRandom } from '../api/fetchData';

export const Actions = Object.freeze({
  FETCH_TABLE_DATA: 'FETCH_TABLE_DATA',
});

export function fetchTableData() {
  return {
    type: Actions.FETCH_TABLE_DATA,
    payload: fetchRandom(),
  };
}
