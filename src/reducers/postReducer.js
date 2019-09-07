import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SEARCH_POSTS
} from "../actions/posts";

const initialState = {
  posts: [],
  post_tags: [],
  search: "",
  loading: true,
  error: null
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        post_tags: action.payload.post_tags
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        posts: []
      };

    case SEARCH_POSTS:
      return {
        ...state,
        search: action.payload.value
      };
    default:
      return state;
  }
}
