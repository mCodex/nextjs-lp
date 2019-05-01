import axios from 'axios';

export async function getPosts() {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
}

export function getPhotos() {
  return axios.get('https://jsonplaceholder.typicode.com/photos');
}
