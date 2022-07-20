export const updateFavorite = (data, id) => {
  const updateRequest = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
  const response = fetch(`https://62d80e029c8b5185c781fe4a.mockapi.io/characters/${id}`, updateRequest)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return response;
}

