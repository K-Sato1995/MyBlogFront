import React from "react";
import CategoryTag from "./CategoryTag";
import TagTag from "./TagTag";

const ContentTags = props => {
  const { category, categories, resetCategory, tag, tags, resetTag } = props;

  if (tag !== 0 && category !== 0)
    return (
      <div className="content-tag-box">
        <CategoryTag
          category={category}
          categories={categories}
          resetCategory={resetCategory}
        />
        <TagTag tag={tag} tags={tags} resetTag={resetTag} />
      </div>
    );

  if (category !== 0)
    return (
      <div className="content-tag-box">
        <CategoryTag
          category={category}
          categories={categories}
          resetCategory={resetCategory}
        />
      </div>
    );

  if (tag !== 0)
    return (
      <div className="content-tag-box">
        <TagTag tag={tag} tags={tags} resetTag={resetTag} />
      </div>
    );

  return <div className="content-tag-box-hidden" />;
};

export default ContentTags;
