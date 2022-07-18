export const updateStaffs = (data, id) => {
  const updateRequest = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
  const response = fetch(`http://localhost:3001/staffs/${id}`, updateRequest)
    .then((response) => response.json())
    .catch((err) => console.log(err));
  return response;
}