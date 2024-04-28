const BASE_URL = 'https://api.thecatapi.com/v1';
<<<<<<< HEAD

=======
>>>>>>> 65705f35aada4874dc16f83b523efcd8f8dc09e0
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

<<<<<<< HEAD
export function fetchCatByBreed(breedId) {
=======
export function fetchCatByBreed() {
>>>>>>> 65705f35aada4874dc16f83b523efcd8f8dc09e0
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
