const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_YHZ2UyBTBYqQokgSiSnbvx5IVMZPkS1xA7qIuEU63ROOkRh95q0T9x9I9qYgQb9Y';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}

export function fetchCatByBreed() {
  return fetch(
    `${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });
}
