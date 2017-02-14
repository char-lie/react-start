const headers = new Headers();
headers.set('Content-Type', 'application/json');
headers.set('Accept', 'application/json');

const fetchParams = ['http://localhost:3000/get-random', {
  method: 'GET',
  headers,
  mode: 'cors',
}];

export const fetchRandom = () => window.fetch(...fetchParams)
    .then(response => response.json())
    .then(result => result.data);

export const fetchRandomBase = () => window.fetch(...fetchParams);
