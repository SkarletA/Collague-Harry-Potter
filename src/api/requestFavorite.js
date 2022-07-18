export const getFavorite = () => {
  const getRequest = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }
  const response = fetch("http://localhost:3001/favorites", getRequest)
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
  const response = fetch(`http://localhost:3001/favorites/${id}`, deleteRequest)
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
  const response = fetch("http://localhost:3001/favorites", postRequest)
    .then((response) => response.json())
    .catch((err) => console.log(err));

  return response;
};