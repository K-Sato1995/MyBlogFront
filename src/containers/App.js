import { connect } from "react-redux";
import App from "../components/App";
import {
  fetchPosts,
  searchPosts,
  setCategory,
  setTag,
  resetFilter
} from "../actions/posts";
import { fetchCategories } from "../actions/categories";
import { fetchTags } from "../actions/tags";

function mapStateToProps(state) {
  return {
    posts: state.postReducer.posts,
    post_tags: state.postReducer.post_tags,
    search: state.postReducer.search,
    categories: state.categoryReducer.categories,
    category: state.postReducer.category,
    tags: state.tagReducer.tags,
    tag: state.postReducer.tag,
    loading: state.postReducer.loading,
    error: state.postReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts() {
      dispatch(fetchPosts());
    },
    fetchCategories() {
      dispatch(fetchCategories());
    },
    fetchTags() {
      dispatch(fetchTags());
    },
    updateSearch(e) {
      dispatch(searchPosts(e.target.value));
    },
    updateCategory(e) {
      dispatch(setCategory(parseInt(e.target.value)));
    },
    updateTag(e) {
      dispatch(setTag(parseInt(e.target.value)));
    },
    showAllPosts() {
      dispatch(resetFilter("category", 0));
      dispatch(resetFilter("tag", 0));
      dispatch(resetFilter("search", ""));
    },
    resetCategory() {
      dispatch(resetFilter("category", 0));
    },
    resetTag() {
      dispatch(resetFilter("tag", 0));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
