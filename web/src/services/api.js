const sendEntryToApi = (data) => {
  return fetch('http://localhost:3000/create-entry', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
};

const getEntriesFromApi = () => {
  return fetch('http://localhost:3000/get-entries').then((response) => {
    return response.json();
  });
};

const sendEditedEntryToApi = (data) => {
  return fetch('http://localhost:3000/update-entry', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = {
  sendEntryToApi: sendEntryToApi,
  sendEditedEntryToApi: sendEditedEntryToApi,
  getEntriesFromApi: getEntriesFromApi,
};

export default objToExport;
