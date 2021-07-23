import { BASE_URL, SDK } from "./settings";
export async function getSingleImage({ id }) {
  const URL = `${BASE_URL}/${id}?${SDK}`;
  const request = await fetch(URL);
  const response = await request.json();
  return response;
}
