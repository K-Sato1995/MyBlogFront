import React from "react";

export const formatDate = date => {
  const dateObject = new Date(date);
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  return `${year}/${month}/${day}`;
};
