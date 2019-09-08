import { baseUrl } from "../middlewares/Api/V2";
export const FETCH_TAGS_BEGIN = "FETCH_TAGS_BEGIN";
export const FETCH_TAGS_SUCCESS = "FETCH_TAGS_SUCCESS";
export const FETCH_TAGS_FAILURE = "FETCH_TAGS_FAILURE";

export function fetchTags() {
  return dispatch => {
    return fetch(`${baseUrl}/tags`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchTagsSuccess(json.data.tags));
        return json.data.tags;
      })
      .catch(error => dispatch(fetchTagsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchTagsBegin = () => ({
  type: FETCH_TAGS_BEGIN
});

export const fetchTagsSuccess = tags => ({
  type: FETCH_TAGS_SUCCESS,
  payload: { tags }
});

export const fetchTagsFailure = error => ({
  type: FETCH_TAGS_FAILURE,
  payload: { error }
});
