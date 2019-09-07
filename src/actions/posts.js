export const FETCH_POSTS_BEGIN = "FETCH_POSTS_BEGIN";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const SEARCH_POSTS = "SEARCH_POSTS";
export const SET_CATEGORY = "SET_CATEGORY";

export function fetchPosts() {
  return dispatch => {
    return fetch("http://localhost:3000/api/v2/posts")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchPostsSuccess(json.data));
        return json.data;
      })
      .catch(error => dispatch(fetchPostsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = data => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts: data.posts, post_tags: data.post_tags }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});

export const searchPosts = value => ({
  type: SEARCH_POSTS,
  payload: { value }
});

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: { category }
});
