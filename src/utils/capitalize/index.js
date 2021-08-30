export const capitalize = (string = '') => string
  .replace(/(\w)(.+)/, (m, firstLetter, allLetter) => `${firstLetter.toUpperCase()}${allLetter.toLocaleLowerCase()}`);
