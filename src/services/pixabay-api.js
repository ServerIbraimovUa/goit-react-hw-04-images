const API_KEY = '38613444-415ea31856756f0ffc19b62a0';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImg(name, page = 1) {
  const param = new URLSearchParams({
    q: name,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 12,
  });
  const getArray = await fetch(`${BASE_URL}?${param}`);
  const parsed = await getArray.json();

  return parsed;
}
