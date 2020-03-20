export const fetchOptions = (type, token) => ({
  method: type,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token
  }
});