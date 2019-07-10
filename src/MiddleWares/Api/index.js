export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://k-blog0130.herokuapp.com/";

export async function getPosts() {
  let response = await fetch(`${baseUrl}/api/v1/posts`);
  let data = await response.json();
  return data;
}

export async function getPost(slug) {
  let response = await fetch(`${baseUrl}api/v1/posts/${slug}`);
  let data = await response.json();
  return data;
}

export async function addLike(slug) {
  let response = await fetch(`${baseUrl}/api/v1/posts/${slug}/like`, {
    method: "PUT"
  });
  let data = await response.json();
  return data;
}
