export const romanToNumber = (romanNumber) => {
  let result = null;
  if (romanNumber === 'I') result = 1;
  else if (romanNumber === 'II') result = 2;
  else if (romanNumber === 'III') result = 3;
  else if (romanNumber === 'IV') result = 4;
  else if (romanNumber === 'V') result = 5;
  else if (romanNumber === 'VI') result = 6;
  else if (romanNumber === 'VII') result = 7;
  else if (romanNumber === 'VIII') result = 8;
  else if (romanNumber === 'IX') result = 9;
  else if (romanNumber === 'X') result = 10;
  else result = 'errNotSupported';
  return result;
};

export const capitalize = (str) => (
  `${(str.charAt(0)).toUpperCase()}${str.slice(1)}`
);

export default null;
