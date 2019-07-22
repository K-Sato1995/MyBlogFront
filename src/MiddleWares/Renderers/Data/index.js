export const formatDate = date => {
  const dateObject = new Date(date);
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const year = dateObject.getFullYear();
  return `${year}/${month}/${day}`;
};

export const trimString = (string, limit) => {
  if (string.length >= limit) {
    let slicedString = string.slice(0, limit);
    return `${slicedString}..`;
  }
  return string;
};
