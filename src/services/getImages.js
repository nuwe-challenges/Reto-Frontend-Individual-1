import { BASE_URL, SDK } from "./settings";

export async function getImages({ page = 1, per_page = 5 } = {}) {
  const URL = `${BASE_URL}?page=${page}&per_page=${per_page}&query=naruto&${SDK}`;
  const request = await fetch(URL);
  const response = await request.json();
  return response;
}
