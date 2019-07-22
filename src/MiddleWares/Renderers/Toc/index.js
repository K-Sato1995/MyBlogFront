import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { trimString } from "../Data";

export const stringReplacer = (string, regex, mark) => {
  return string.replace(regex, mark);
};

export const createLink = string => {
  var shapedString = string
    .toLowerCase()
    .replace(/#+\s/, "#")
    .trimRight();
  var strArr = shapedString.split(" ");
  var anchor = strArr.join("-");
  return stringReplacer(anchor, /[?!]/g, "-");
};

export const returnTitle = (string, path) => {
  const link = createLink(string);
  const limit = 34;
  const title = trimString(stringReplacer(string, /#+/g, ""), limit);

  return (
    <Link to={`${path}${link}`} className="toc-title">
      {title}
    </Link>
  );
};
