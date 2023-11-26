import axios from 'axios';

export const fetchImages = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '40011347-164180987f1c1c9ecdd3b742f';

  const per_page = 12;
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page,
    page,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  response.data.perPage = per_page;
  return response.data;
};
