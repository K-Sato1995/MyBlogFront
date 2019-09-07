import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SEARCH_POSTS,
  SET_CATEGORY,
  SET_TAG
} from "../actions/posts";

const initialState = {
  posts: [],
  post_tags: [],
  category: 0,
  tag: 0,
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

    case SET_CATEGORY:
      return {
        ...state,
        tag: 0,
        category: action.payload.category
      };

    case SET_TAG:
      return {
        ...state,
        tag: action.payload.tag
      };
    default:
      return state;
  }
}
