export const getFavorite = () => {
  const getRequest = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = fetch("https://62d80e029c8b5185c781fe4a.mockapi.io/favorites", getRequest)
    .then((response) => response.json())
    .then(data => data)
    .catch((err) => console.log(err));
  return response;
};

export const deleteFavorite = (id) => {
  const deleteRequest = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = fetch(`https://62d80e029c8b5185c781fe4a.mockapi.io/favorites/${id}`, deleteRequest)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return response;
};

export const postFavorite = (data) => {
  const postRequest= {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
  const response = fetch("https://62d80e029c8b5185c781fe4a.mockapi.io/favorites", postRequest)
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return response;
};