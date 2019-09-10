export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api/v1"
    : "https://k-blog0130.herokuapp.com/api/v1";

export async function getPosts() {
  let response = await fetch(`${baseUrl}//posts`);
  let data = await response.json();
  return data;
}

export async function getPost(slug) {
  let response = await fetch(`${baseUrl}/posts/${slug}`);
  let data = await response.json();
  return data;
}

export async function addLike(slug) {
  let response = await fetch(`${baseUrl}//posts/${slug}/like`, {
    method: "PUT"
  });
  let data = await response.json();
  return data;
}

export async function createComment(slug, name, content) {
  let response = await fetch(`${baseUrl}//posts/${slug}/comments`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      content: content
    })
  });
  let data = await response.json();
  return data;
}
